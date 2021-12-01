# Spring Boot 配置文件加密

1.mavne导入依赖

```xml
<dependency>
    <groupId>com.github.ulisesbocchio</groupId>
    <artifactId>jasypt-spring-boot-starter</artifactId>
    <version>3.0.4</version>
</dependency>
```

2.在配置文件中添加加密盐

```yaml
jasypt:
  encryptor:
    password: $2a$10$Wzamw5.YLzsW8a4S2Iey7.
```

3.获取需要加密字符串的密文

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PasswordCreate {

    @Autowired
    private StringEncryptor stringEncryptor;

    /**
     * 生成
     */
    @Test
    void contextLoads() {
        String root = stringEncryptor.encrypt("root");
        System.out.println(root);
    }

}
```

4.在配置文件密文，密文需要 __ENC()__ 包起来

```yaml
server:
  port: 8443
  ssl:
    enabled: false
    key-store: classpath:admin.jks
    key-store-password: ENC(yLT+TMQBFMTdC4PK4cIQwqyo/UFF1xyXQZ1ptND8n3TANYvl9WOnahNLcFitWFAO)
    key-store-type: JKS
    key-alias: admin
spring:
  datasource:
    druid:
      db-type: com.alibaba.druid.pool.DruidDataSource
      driverClassName: com.p6spy.engine.spy.P6SpyDriver
      stat-view-servlet:
        enabled: true
        url-pattern: /druid/*
        reset-enable: false
        login-username: admin
        login-password: ENC(yLT+TMQBFMTdC4PK4cIQwqyo/UFF1xyXQZ1ptND8n3TANYvl9WOnahNLcFitWFAO)
```
