import webData from "../../data";

describe("test data", () => {
  test("test data search", () => {
    expect(webData.search("http")).not.toBeNull();
    expect(webData.search("http").length).toBeGreaterThan(0);
    expect(webData.search("图虫EXIF查看器")[0].name).toBe("图虫EXIF查看器");
  });
});
