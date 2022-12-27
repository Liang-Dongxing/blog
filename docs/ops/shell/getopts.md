# shell 脚本之参数传递的两种方式

## 位置参数

### 示例1
```shell
#!/bin/bash
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
```
结果

```shell
./test.sh 1 2 3

Shell 传递参数实例！
执行的文件名：./test.sh
第一个参数为：1
第二个参数为：2
第三个参数为：3
```
### 示例2
```shell
#!/bin/bash
echo $0    # 当前脚本的文件名（间接运行时还包括绝对路径）。
echo $n    # 传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是 $1 。
echo $#    # 传递给脚本或函数的参数个数。
echo $*    # 传递给脚本或函数的所有参数。
echo $@    # 传递给脚本或函数的所有参数。被双引号 (" ") 包含时，与 $* 不同，下面将会讲到。
echo $?    # 上个命令的退出状态，或函数的返回值。
echo $$    # 当前 Shell 进程 ID。对于 Shell 脚本，就是这些脚本所在的进程 ID。
echo $_    # 上一个命令的最后一个参数
echo $!    # 后台运行的最后一个进程的 ID 号
```
结果

```shell
$ ./test.sh test test1 test2 test3 test4

./test.sh                      # $0
                               # $n
5                              # $#
test test1 test2 test3 test4   # $*
test test1 test2 test3 test4   # $@
0                              # $?
12305                          # $$
12305                          # $_
                               # $!
```


## getopts

语法格式：getopts [option[:]] [DESCPRITION] VARIABLE
option：表示为某个脚本可以使用的选项
":"：如果某个选项（option）后面出现了冒号（":"），则表示这个选项后面可以接参数（即一段描述信息DESCPRITION）
VARIABLE：表示将某个选项保存在变量VARIABLE中

### 示例1

```shell
#!/bin/bash
while getopts ":a:b:c:" opt
do
    case $opt in
        a)
        echo "参数a的值$OPTARG"
        ;;
        b)
        echo "参数b的值$OPTARG"
        ;;
        c)
        echo "参数c的值$OPTARG"
        ;;
        ?)
        echo "未知参数"
        exit 1;;
    esac
done
```
结果

```shell
$ ./test.sh -a 1 -b 2 -c 3
#在shell中的输出
参数a的值1
参数b的值2
参数c的值3
```

### 示例2

```shell
#!/bin/bash
while getopts ":a:b:c" opt
do
    case $opt in
        a)
        echo "参数a的值$OPTARG"
        ;;
        b)
        echo "参数b的值$OPTARG"
        ;;
        c)
        echo "参数c的值$OPTARG"
        ;;
        ?)
        echo "未知参数"
        exit 1;;
    esac
done
```

结果

```shell
$ ./test.sh -a 1 -b 2 -c
#在shell中的输出
参数a的值1 -a参数位置为1，是处理带值选项参数
参数b的值2 -b参数位置为2，是处理带值选项参数
参数c的值  -c参数位置为3，是处理开关型变量(即后面没有跟参数)
```