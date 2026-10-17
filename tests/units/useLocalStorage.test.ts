/** @jest-environment jsdom */

import { act, renderHook } from "@testing-library/react";
import { useLocalStorageState } from "../../utils/hooks/useLocalStorage";

describe("useLocalStorageState", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("search engine survives rerenders, updates and remounts", () => {
    const { result, rerender, unmount } = renderHook(() =>
      useLocalStorageState("searchType", { defaultValue: "百度" })
    );

    expect(result.current[0]).toBe("百度");
    rerender();
    act(() => result.current[1]("Google"));
    expect(result.current[0]).toBe("Google");
    expect(JSON.parse(localStorage.getItem("searchType"))).toBe("Google");

    unmount();
    const restored = renderHook(() =>
      useLocalStorageState("searchType", { defaultValue: "百度" })
    );
    expect(restored.result.current[0]).toBe("Google");
  });

  test("migrates the legacy plain-text search engine preference", () => {
    localStorage.setItem("searchType", "必应");
    const { result, rerender } = renderHook(() =>
      useLocalStorageState("searchType", { defaultValue: "百度" })
    );

    expect(result.current[0]).toBe("必应");
    rerender();
    expect(JSON.parse(localStorage.getItem("searchType"))).toBe("必应");
  });

  test.each([0, false, ""])('preserves the stored value %p', (storedValue) => {
    localStorage.setItem("value", JSON.stringify(storedValue));
    const { result } = renderHook(() =>
      useLocalStorageState<string | number | boolean>("value", {
        defaultValue: "fallback",
      })
    );
    expect(result.current[0]).toBe(storedValue);
  });

  test("recovers the default when stored JSON is corrupt", () => {
    localStorage.setItem("settings", "{broken");
    const { result } = renderHook(() =>
      useLocalStorageState("settings", { defaultValue: { enabled: true } })
    );
    expect(result.current[0]).toEqual({ enabled: true });
  });

  test("changing keys does not overwrite the destination preference", () => {
    localStorage.setItem("first", JSON.stringify("Google"));
    localStorage.setItem("second", JSON.stringify("必应"));
    const { result, rerender } = renderHook(
      ({ storageKey }) =>
        useLocalStorageState(storageKey, { defaultValue: "百度" }),
      { initialProps: { storageKey: "first" } }
    );

    rerender({ storageKey: "second" });
    expect(result.current[0]).toBe("必应");
    expect(JSON.parse(localStorage.getItem("first"))).toBe("Google");
    expect(JSON.parse(localStorage.getItem("second"))).toBe("必应");
  });

  test("keeps search usable when browser storage is blocked", () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Storage is blocked");
    });
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage is blocked");
    });
    const { result } = renderHook(() =>
      useLocalStorageState("searchType", { defaultValue: "百度" })
    );

    act(() => result.current[1]("Google"));
    expect(result.current[0]).toBe("Google");
  });
});
