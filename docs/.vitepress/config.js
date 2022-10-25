import navbar from "./configs/navbar";
import sidebar from "./configs/sidebar";

export default {
    lang: 'zh-CN',
    title: '个人博客',
    description: '记录一些日常的学习笔记',
    base: '/blog/',
    lastUpdated: true,
    themeConfig: {
        nav: navbar,
        sidebar: sidebar,
        siteTitle: 'LiangDongXing',
        lastUpdatedText: '最后修改时间',
        footer: {
            message: 'Released under the GNU GPLv3 Licensed.',
            copyright: 'Copyright © 2022-present Liang-DongXing'
        },
        editLinks: false,
        editLink: {
            pattern: 'https://github.com/Liang-Dongxing/my-docs/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Liang-Dongxing/my-docs'}
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    }
}
