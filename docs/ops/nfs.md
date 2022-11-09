# NFS 搭建挂载

## 安装软件

```shell
# Centos
yum -y install nfs-utils rpcbind

# Ubuntu
apt install nfs-kernel-server
apt install nfs-common
```

## 启动软件

```shell
# Centos
# Ubuntu 跳过此步骤
systemctl start rpcbind
systemctl start nfs
```

## 编辑文件

```shell
vim /etc/exports

# 添加如下内容 ip为访问者服务器ip
# /home/jhdata/data/ 192.168.3.241(rw,no_root_squash,no_all_squash,sync)
/home/data/ IP(rw,no_root_squash,no_all_squash,sync)

```

## 生效配置文件    

```shell
exportfs -r
```

## 访问者服务器挂载

```shell
# mount -t nfs 192.168.3.203:/home/jhdata/data/ /home/jhdata/data/
mount -t nfs IP:/home/data/ /home/data/
```

## 查看挂载状态

```shell
df -h

showmount -e
```

## 取消挂载

```shell
umount /home/data/
```

## 挂载windows共享目录

```shell
sudo mount -t cifs -o username="administrator",password="********"  //IP/data/ /home/data/
```