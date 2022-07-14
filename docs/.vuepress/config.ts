import {defineUserConfig} from "@vuepress/cli";
import {viteBundler} from '@vuepress/bundler-vite'
import {NavbarConfig, SidebarConfig} from "./configs";
import {defaultTheme} from "vuepress-vite";
import {backToTopPlugin} from '@vuepress/plugin-back-to-top';
import {containerPlugin} from '@vuepress/plugin-container';
import {externalLinkIconPlugin} from '@vuepress/plugin-external-link-icon';
import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics';
import {mediumZoomPlugin} from '@vuepress/plugin-medium-zoom';
import {nprogressPlugin} from '@vuepress/plugin-nprogress';
import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {searchPlugin} from '@vuepress/plugin-search';
import {prismjsPlugin} from '@vuepress/plugin-prismjs';
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links';
import {gitPlugin} from '@vuepress/plugin-git';
import {palettePlugin} from '@vuepress/plugin-palette';
import {tocPlugin} from '@vuepress/plugin-toc';

export default defineUserConfig({
  lang: "zh-CN",
  title: "Liang-DongXing",
  description: "喜爱编程、热爱编程",
  base: "/my-docs/",
  head: [
    ["link", {rel: "icon", href: "/my-docs/images/icons/L-logo-black.png"}],
  ],
  locales: {
    '/': {
      lang: "zh-CN",
      title: "Liang-DongXing",
      description: "喜爱编程、热爱编程",
    },
    '/en/': {
      lang: "en-US",
      title: "Liang-DongXing",
      description: "love programming, love programming",
    }
  },
  theme: defaultTheme({
    navbar: NavbarConfig.navbar,
    sidebar: SidebarConfig.sidebar,
    logo: "/images/icons/L-logo-black.png",
    logoDark: "/images/icons/L-logo-white.png",
    docsDir: "docs",
    repo: "Liang-Dongxing/my-docs",

    locales: {
      '/': {
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
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
      '/en/': {
        selectLanguageName: 'English',
      },
      navbar: [
        {
          text: '首页',
          link: '/',
        },
      ],
    },
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    backToTopPlugin(),
    containerPlugin({}),
    externalLinkIconPlugin({}),
    googleAnalyticsPlugin({
      id: 'G-292474410'
    }),
    mediumZoomPlugin({}),
    nprogressPlugin(),
    registerComponentsPlugin({}),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),
    prismjsPlugin({
    }),
    activeHeaderLinksPlugin({
    }),
    gitPlugin({
    }),
    palettePlugin({
    }),
    tocPlugin({
    }),
  ],
});
