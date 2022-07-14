import type {SidebarConfig} from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  '/project/': [
    {
      text: 'Alibaba',
      collapsible: true,
      children: [
        '/project/alibaba/Canal.md',
        '/project/alibaba/DataX.md',
        '/project/alibaba/RabbitMQ.md',
      ]
    },
    {
      text: 'Apache',
      collapsible: true,
      children: [
        '/project/apache/Atlas.md',
        '/project/apache/DolphinScheduler.md',
        '/project/apache/Doris.md',
        '/project/apache/Dubbo.md',
        '/project/apache/Flink.md',
        '/project/apache/Flume.md',
        '/project/apache/Hadoop.md',
        '/project/apache/HBase.md',
        '/project/apache/Hive.md',
        '/project/apache/Kafka.md',
        '/project/apache/Kylin.md',
        '/project/apache/Maven.md',
        '/project/apache/Mybatis.md',
        '/project/apache/RocketMQ.md',
        '/project/apache/SeaTunnel.md',
        '/project/apache/SparkStreaming.md',
        '/project/apache/StreamX.md',
        '/project/apache/Superset.md',
        '/project/apache/ZooKeeper.md',
      ]
    },
    '/project/Azkaban.md',
    '/project/ClickHouse.md',
    '/project/Docker+K8S.md',
    '/project/Elasticsearch.md',
    '/project/Gradle.md',
    '/project/Java.md',
    '/project/Linux.md',
    '/project/Maxwell.md',
    '/project/Mycat.md',
    '/project/MySQL.md',
    '/project/Nginx.md',
    '/project/Prometheus.md',
    '/project/Redis.md',
    '/project/Scala.md',
    '/project/Spring.md',
    '/project/Zabbix.md',
    {
      text: '前端',
      collapsible: true,
      children: [
        '/project/web/axios.md',
        '/project/web/JavaScript.md',
        '/project/web/Promise.md',
        '/project/web/React.md',
        '/project/web/TypeScript.md',
        '/project/web/Vue.md',
        '/project/web/webpack.md',
      ]
    },
  ]
};
