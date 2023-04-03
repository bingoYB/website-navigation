import { create } from "zustand";

export const useAppStore = create(() => ({
    menuExpand: true,
    activeMenu: {
        title: "首页",
        icon: "home",
    },
}));