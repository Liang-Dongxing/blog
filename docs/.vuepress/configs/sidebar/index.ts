import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/java": ["/java/index.md", "/java/exception/IllegalArgumentException.md","/java/exception/yaml文件乱码.md"],
  "/linux": ["/linux/index.md", "/linux/file-sync.md"],
  "/docker": [
    "/docker/index.md",
    "/docker/command-help.md",
    "/docker/command-images.md",
    "/docker/command-container.md",
    "/docker/command-file.md",
  ],
  "/kubernetes": ["/kubernetes/index.md"],
  "/web": ["/web/index.md", "/web/npm.md", "/web/nginx.md"],
};
