import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/java": [{ text: "开始" }],
  "/linux": [
    {
      text: "开始",
      children: ["/linux/file-sync.md"],
    },
  ],
};
