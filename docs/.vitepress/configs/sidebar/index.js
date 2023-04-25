export default {
    '/web/': [{
        text: '前端', items: [
            {text: 'UI', link: '/web/ui'}
        ]
    }], '/ops/': [{
        text: '运维', items: [
            {text: 'Redis集群', link: '/ops/redis_cluster'},
            {text: 'NFS挂载', link: '/ops/nfs'},
            {
                text: 'Shell',
                items: [
                    {text: 'echo', link: '/ops/shell/echo'},
                    {text: 'getopts', link: '/ops/shell/getopts'},
                    {text: 'if', link: '/ops/shell/if'},
                ]
            },]
    }], '/developer/': [{
        text: '开发',
        items: [
            {
                text: 'Java',
                items: [
                    {text: 'EasyConnect使用后Idea连不上生产环境数据库', link: '/developer/java/1'},
                ]
            },
            {
                text: 'Maven',
                items: [
                    {text: 'Maven 打包分离 jar 包里的 lib 依赖', link: '/developer/maven/1'},
                    {text: '把前端项目使用 Maven 打包到 jar 包中', link: '/developer/maven/2'},
                ]
            },]
    }],
}
