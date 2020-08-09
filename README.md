# KalinBlog
如何使用
1.将本项目clone到本地
2.cd 进入该项目
3.# 安装
yarn global add vuepress # 或者：npm install -g vuepress (没有yarn建议安装一个，并且安装node.js，这里推荐用yarn,因为速度快^_^)

# 开始写作
vuepress dev docs.

# 构建静态文件
vuepress build docs.


4.如何发布：建立 deploy.sh 脚本

#!/usr/bin/env sh

#遇到错误退出
set -e

vuepress build docs

cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:YoHoFox/KalinBlog.git master:gh-pages

cd -
