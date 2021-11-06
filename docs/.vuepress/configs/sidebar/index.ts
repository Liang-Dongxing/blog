import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/java": ["/java/index.md"],
  "/linux": ["/linux/index.md", "/linux/file-sync.md"],
  "/docker": [
    "/docker/index.md",
    "/docker/command-help.md",
    "/docker/command-images.md",
    "/docker/command-container.md",
  ],
  "/kubernetes": ["/kubernetes/index.md"],
};
