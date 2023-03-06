# Spring Cloud Zookeeper 注册中心和配置中心

## 注册中心

### 依赖 pom.xml

```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zookeeper-all</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-zookeeper-discovery</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

### 配置 application.yml

```yaml
spring:
  application:
    name: bit-zookeeper-discovery # 应用名称
  profiles:
    active: dev # 激活的配置文件
  cloud:
    zookeeper:
      discovery:
        enabled: true # 是否开启服务发现
      connect-string: localhost:2181 # zookeeper地址
```

## 配置中心

### 依赖 pom.xml

```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-bootstrap</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zookeeper-all</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-zookeeper-discovery</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zookeeper-config</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
```

### 配置 bootstrap.yml

```yaml
spring:
  application:
    name: bit-zookeeper-discovery # 应用名称
  profiles:
    active: dev # 激活的配置文件
  cloud:
    zookeeper:
      config:
        enabled: true # 是否开启配置中心
        root: bit-cloud/config # 配置中心根路径
        default-context: ${spring.application.name} # 默认配置文件路径
        profile-separator: "," # 配置文件分隔符
      discovery:
        enabled: true # 是否开启服务发现
      connect-string: localhost:2181 # zookeeper地址
```

**使用配置中心时注意：**
1. **需要在 bootstrap.yml 中配置，而不是 application.yml。**
2. **需要在 pom.xml 中添加 spring-cloud-starter-bootstrap 依赖。**
3. **配置中心的配置路径为 spring.cloud.zookeeper.config.name（默认为属性值spring.application.name）和 spring.cloud.zookeeper.config.default-context（默认为application）从四个自动上下文加载值。**
4. **例如当我们配置服务端口时候，需要在zookeeper中添 /bit-cloud/config/bit-zookeeper-discovery/server.port 配置值`端口号`。而不是在 /bit-cloud/config/bit-zookeeper-discovery 路径下配置 `server.port=端口号`**
