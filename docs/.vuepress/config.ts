import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { NavbarConfig, SidebarConfig } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "Liang-DongXing",
  description: "这是我的第一个 VuePress 站点",
  base: "/my-docs/",
  head: [
    ["link", { rel: "icon", href: "/my-docs/images/icons/L-logo-black.png" }],
  ],
  themeConfig: {
    home: "/",
    lang: "zh-CN",
    navbar: NavbarConfig.navbar,
    sidebar: SidebarConfig.sidebar,
    logo: "/images/icons/L-logo-black.png",
    logoDark: "/images/icons/L-logo-white.png",
    docsDir: "docs",
    repo: "Liang-Dongxing/my-docs",
    // page meta
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",

    // custom containers
    tip: "提示",
    warning: "注意",
    danger: "警告",

    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",

    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
  },
  plugins: [
    ["@vuepress/plugin-search", { locales: { "/": { placeholder: "搜索" } } }],
    ["@vuepress/medium-zoom"],
    ["@vuepress/plugin-google-analytics", { id: "G-KJE470ZPPE" }],
    ["vuepress-plugin-clean-urls", { normalSuffix: "/", indexSuffix: "/" }],
  ],
});
