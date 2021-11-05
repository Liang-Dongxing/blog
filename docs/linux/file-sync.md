# Linux 集群实时文件同步
分为文件发送端和文件接收端两种模式。
## 准备工作
需要安装一下服务：inotify-tools、rsync、sshpass、ssh。
```shell
yum install -y epel-release && yum update
yum install -y inotify-tools
yum install -y rsync
yum install -y sshpass
```
检查Linux是否安装了ssh服务：
```shell
ps -ef | grep ssh
```
安装openssh-server、openssh-clients：
```shell
yum -y install openssh-server
yum -y install openssh-clients
systemctl enable sshd #开机启动ssh
systemctl disable sshd #开机关闭ssh
systemctl start ssh #单次开启ssh
systemctl stop ssh #单次关闭ssh
```
## 文件同步脚本
```shell
#!/bin/bash
/usr/bin/inotifywait -mrq --format '%w%f' -e close_write,modify,create /home/test \
| while read line
do
sshpass -p root rsync -avz --remove-source-files /home/test root@172.17.0.2:/home > nohup.out 2>&1
done
exit 0
```
解读脚本：

第二行：执行inotifywait命令进行监控，-mrq表示监控目录，--format表示输出格式，-e表示事件，close_write表示文件写入，modify表示文件修改，create表示文件创建，/home/test被监控的目录。

第五行：sshpass -p root 接收端的密码，rsync -avz表示递归，--remove-source-files表示同步后删除源文件，/home/test需要同步的目录，root@172.17.0.2:/home接收端用户名和IP地址、同步的目录。
## 文档链接
[rsync](https://linux.die.net/man/1/rsync)

[inotify-tools](https://github.com/inotify-tools/inotify-tools/wiki)

[inotifywait](https://linux.die.net/man/1/inotifywait)
