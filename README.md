# website-navigation

**个人网址导航**

在线地址：https://bingoyb.github.io/website-navigation/

国内码云快速地址：https://bingoyyy.gitee.io/website-navigation/

这个项目是我个人学习使用的项目，同时也是给自己写的网址导航，若有什么好的网址，欢迎提供！

### 部署说明：
此项目为纯前端项目，如果你想要自己部署，只需要有个能够提供静态页面服务的服务器就行【我就直接是挂在github-page上】

前端相关命令（前提：你得安装了node）
```
# 下载依赖
npm install
# 前端编译
npm run build
```
编译结果在docs里面，所以你只需要将这个文件夹的内容放到你的静态服务器里就行了；

当然你可以自己fork去进行自定义的修改

### 目录结构
---
方便你理解我的代码结构

```
├── README.md
├── package.json
├── action                # gitaction相关脚本
├── docs                  # 打包目录 实际页面访问目录
├── public                # 静态资源
├── src                   # 页面所有代码
│   ├── data              # 数据文件
│   ├── page              # 页面代码
│   ├── wget              # 页面零部件
│   ├── style             # 样式字体等
│   ├── assets            # 样式资源
│   ├── store             # redux全局状态
│   ├── router            # 路由组件
│   ├── main.jsx        # 页面入口文件
```


### 数据更新

若有好的网站收藏希望收录于网站上的，或者有其他问题，请提交 issue

提交数据格式

```json
{
    "url": "https://www.bilibili.com/",
    "name": "B站",
    "desc": "bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围。"
}
```



联系方式
---

邮箱 binhdu@foxmail.com

