# shell脚本之 if 条件判断用法

## if 基本语法

```shell
if [ 条件判断 ]; then
    # 条件成立执行的语句
else
    # 条件不成立执行的语句
fi
```

## if 扩展语法

```shell
if [ 条件判断 ]; then
    # 条件成立执行的语句
elif [ 条件判断 ]; then
    # 条件成立执行的语句
else
    # 条件不成立执行的语句
fi
```
## 实例
```shell
1：判断目录$doiido是否存在，若不存在，则新建一个
if [ ! -d "$doiido"]; then
　　mkdir "$doiido"
fi

2：判断普通文件$doiido是否存，若不存在，则新建一个
if [ ! -f "$doiido" ]; then
　　touch "$doiido"
fi

3：判断$doiido是否存在并且是否具有可执行权限
if [ ! -x "$doiido"]; then
　　mkdir "$doiido"
    chmod +x "$doiido"
fi

4：是判断变量$doiido是否有值
if [ ! -n "$doiido" ]; then
　　echo "$doiido is empty"
　　exit 0
fi

5：两个变量判断是否相等
if [ "$var1" = "$var2" ]; then
　　echo '$var1 eq $var2'
else
　　echo '$var1 not eq $var2'
fi

6：测试退出状态：
if [ $? -eq 0 ];then
    echo 'That is ok'
fi

7：数值的比较：
if [ "$num" -gt "150" ]
    echo "$num is biger than 150"
fi

8：a>b且a<c
(( a > b )) && (( a < c ))
[[ $a > $b ]] && [[ $a < $c ]]
[ $a -gt $b -a $a -lt $c ]

9：a>b或a<c
(( a > b )) || (( a < c ))
[[ $a > $b ]] || [[ $a < $c ]]
[ $a -gt $b -o $a -lt $c ]

10：检测执行脚本的用户
if [ "$(whoami)" != 'root' ]; then
    echo "You have no permission to run $0 as non-root user."
    exit 1;
fi
上面的语句也可以使用以下的精简语句
[ "$(whoami)" != 'root' ] && ( echo "You have no permission to run $0 as non-root user."; exit 1 )

11：正则表达式
doiido="hero"
if [[ "$doiido" == h* ]];then 
    echo "hello，hero"
fi

```