### 如何开始
#### 安装 composer
1. 下载[composer安装器](https://github.com/composer/getcomposer.org/blob/master/web/installer) 保存为`installer`
2. 上传`installer`到用户`home`目录
3. 在用户`home`目录执行来生成了`composer.phar`: 
``` shell
sudo php installer
```
4. 运行以下命令使用`composer`命令代替 `php composer.phar` 命令
```shell
sudo mv composer.phar /usr/local/bin/composer
```
5. `composer -v` 查看是否安装完成
6. 全局使用中国镜像(有时候也抽风)
```shell
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

#### 安装nodejs

下载node版本管理器 nvm
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

配置成淘宝镜像为nodejs下载源:
```shell
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
```

安装最新稳定版nodejs:
```shell
nvm install stable
```

配置npm为淘宝源:
```shell
npm config set registry " https://registry.npm.taobao.org "
```

#### laravue开发前工作
```shell
cd /the-path-to-your-laravue/
composer install 
npm install
cp .env.example .env
php artisan key:generate
```

