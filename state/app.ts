import { create } from "zustand";

export const useAppStore = create(() => ({
    menuExpand: false,
}));