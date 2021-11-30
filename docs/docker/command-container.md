# Docker 容器命令

## 新建并启动容器

```docker
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```
OPTIONS说明

--name="容器新名字": 为容器指定一个名称，可以在后面使用该名称来操作该容器。

-d: 后台运行容器，并返回容器ID，也即启动守护式容器。

-i：以交互模式运行容器，通常与 -t 同时使用。

-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用。

-P: 随机端口映射。

-p: 指定端口映射 hostPort:containerPort。

## 停止容器

```docker
docker stop [OPTIONS] 容器ID [容器ID...]
```

## 删除容器

```docker
docker rm [OPTIONS] 容器ID [容器ID...]
```
