import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs';

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Liang-DongXing',
    description: '这是我的第一个 VuePress 站点',
    base: '/my-docs/',
    themeConfig: {
        home: '/',
        navbar: navbar.default.navbar,
        sidebar: sidebar.default.sidebar,
        logo: '/images/icons/L-logo-black.png',
        logoDark: '/images/icons/L-logo-white.png',
        docsDir: 'docs',
        repo: 'Liang-Dongxing/my-docs',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
    }
})
