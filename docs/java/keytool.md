# https 证书生成

## Java、Spring boot 中生成和使用

```shell
# 生成jks证书
keytool -genkey -alias admin -dname "CN=admin,OU=admin,O=admin,L=BeiJing,ST=BeiJing,C=CN" -storetype JKS -keyalg RSA -keysize 2048 -keystore admin.jks -validity 365
```

```yaml
#需要把证书放到resources目录下
server:
  port: 8443
  ssl:
    key-store: classpath:admin.jks
    key-store-password: trsadmin
    key-store-type: JKS
    key-alias: admin
```

```java
@Configuration
public class TomcatConfig {

    /**
     * 开发环境使用默认tomcat http直接访问
     *
     * @return ServletWebServerFactory
     */
    @ConditionalOnExpression("'${spring.profiles.active}'.equalsIgnoreCase('dev')")
    @Bean
    public ServletWebServerFactory webServerFactory() {
        TomcatServletWebServerFactory fa = new TomcatServletWebServerFactory();
        fa.addConnectorCustomizers(connector -> connector.setProperty("relaxedQueryChars", "[]{}"));
        return fa;
    }

    /**
     * 测试环境、正式环境使用tomcat http 跳转到 https
     *
     * @return TomcatServletWebServerFactory
     */
    @ConditionalOnExpression("!'${spring.profiles.active}'.equalsIgnoreCase('dev')")
    @Bean
    public TomcatServletWebServerFactory tomcatServletWebServerFactory() {
        TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory() {
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint securityConstraint = new SecurityConstraint();
                securityConstraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection securityCollection = new SecurityCollection();
                securityCollection.addPattern("/*");
                securityConstraint.addCollection(securityCollection);
                context.addConstraint(securityConstraint);
            }
        };
        factory.addAdditionalTomcatConnectors(httpConnector());
        return factory;
    }

    @ConditionalOnExpression("!'${spring.profiles.active}'.equalsIgnoreCase('dev')")
    @Bean
    public Connector httpConnector() {
        Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
        connector.setScheme("http");
        //Connector监听的http的端口号
        connector.setPort(8000);
        connector.setSecure(false);
        //监听到http的端口号后转向到的https的端口号
        connector.setRedirectPort(8443);
        return connector;
    }

}
```

## nginx 中生成和使用

```shell
# 证书密钥
openssl genrsa -des3 -out privkey.key 2048
# 输出
Generating RSA private key, 1024 bit long modulus (2 primes)
.......+++++
....................+++++
e is 65537 (0x010001)
Enter pass phrase for privkey.key:密码
Verifying - Enter pass phrase for privkey.key:密码

# 生成证书
openssl req -new -key server.key -out server.csr
# 输出
Country Name (2 letter code) [AU]:CN
State or Province Name (full name) [Some-State]:BeiJing
Locality Name (eg, city) []:BeiJing
Organization Name (eg, company) [Internet Widgits Pty Ltd]:admin
Organizational Unit Name (eg, section) []:admin
Common Name (e.g. server FQDN or YOUR name) []:admin
Email Address []:admin

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:

# 备份一份密钥文件
cp privkey.key privkey.key.bak

# 去除文件口令
openssl rsa -in privkey.key.bak -out privkey.key
# 输出
Enter pass phrase for privkey.key.bak:密码
writing RSA key

# 生成证书文件
openssl x509 -req -days 365 -in server.csr -key privkey.key -out server.pem
# 输出
Signature ok
subject=C = CN, ST = BeiJing, L = BeiJing, O = admin, OU = admin, CN = admin, emailAddress = admin
Getting Private key
```
