# DockerFile解析

```dockerfile
#基础镜像，当前新镜像是基于哪个镜像的
FROM openjdk:11

#镜像维护者的姓名和邮箱地址
MAINTAINER LiangDongXing liangdongxing.cn@outlook.com

#容器构建时需要运行的命令
RUN ["apt","update"]
RUN ["yum","-y","update"]

#当前容器对外暴露出的端口
EXPOSE 8080

#指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点
WORKDIR /usr/local

#用来在构建镜像过程中设置环境变量
ENV JAVA_HOME /usr/java/openjdk-11
ENV PATH $JAVA_HOME/bin:$PATH

#将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包
ADD ./om-system/target/*.jar /opt/om/app.jar

#类似ADD，拷贝文件和目录到镜像中。
#将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置
COPY ./om-system/target/*.jar /opt/om/app.jar

#容器数据卷，用于数据保存和持久化工作
VOLUME ["/home/om","/var/log/om"]

#指定一个容器启动时要运行的命令 
#Dockerfile 中可以有多个 CMD 指令，但只有最后一个生效，CMD 会被 docker run 之后的参数替换
CMD ["java","-jar","/opt/om/app.jar","--spring.profiles.active=prod"]

#指定一个容器启动时要运行的命令
#ENTRYPOINT 的目的和 CMD 一样，都是在指定容器启动程序及参数
ENTRYPOINT ["java","-jar","/opt/om/app.jar","--spring.profiles.active=prod"]

#当构建一个被继承的Dockerfile时运行命令，父镜像在被子继承后父镜像的onbuild被触发
ONBUILD RUN ["echo","build is ok!!!"]
```
