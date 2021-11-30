# Nginx

## Nginx 同时代理http和ssh

```config
http {
    server {
        listen       8089;# http端口
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
}
# ssh
stream {
    upstream ssh {
        hash   $remote_addr consistent;
        server 192.9.200.53:22; # 需要连接的内网服务器
    }

    server {
        listen  9541;# ssh端口
        proxy_connect_timeout   30s;
        proxy_timeout   300s;
        proxy_pass  ssh;
    }
}
```
