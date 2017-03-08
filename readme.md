### 如何开始
#### 安装 composer
1. 下载[composer安装器](https://github.com/composer/getcomposer.org/blob/master/web/installer) 保存为`installer`
1. 上传`installer`到用户`home`目录
1. 在用户`home`目录执行来生成了`composer.phar`: 
``` shell
sudo php installer
```
1. 运行以下命令使用`composer`命令代替 `php composer.phar` 命令
```shell
sudo mv composer.phar /usr/local/bin/composer
```
1. `composer -v` 查看是否安装完成

