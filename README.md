# react-ts-admin-template

构建搭建 React+Typescript 项目模板

## Part 1. 关于搭建 React+Typescript 项目指南

### Chapter 1. 项目初始化及配置

#### 1.1 package.json

1. 新建空文件夹 -> `ctrl + ~` 唤出项目根目录终端 -> 执行`npm init -y`生成配置文件 package.json

2. 修改配置文件，这里用`注释/取值`的方式直接告知各字段用法

   ```json
   {
     "name": "项目名/repo-name",
     "version": "版本好/1.0.0",
     "description": "项目描述，方便托管工具如github检索时关键字匹配",
     "main": "文件入口/index.js",
     "scripts": {},
     "repository": {
       "type": "git",
       "url": "git+https://github.com/xxx/repo-name.git"
     },
     "keywords": ["npm", "search", "keywords"],
     "author": {
       "name": "xxx",
       "url": "https://github.com/xxx",
       "email": "xxx@xx.com"
     },
     "license": "开源协议/MIT",
     "bugs": {
       "url": "bugs反馈地址/https://github.com/xxx/repo-name/issues"
     },
     "homepage": "项目介绍，跳转到项目的README/https://github.com/xxx/repo-name#readme"
   }
   ```




#### 1.2 LICENSE

在 [choosealicense](https://choosealicense.com/) 中选择合适的`license`，这里取宽松的 MIT 协议（仅保留版权和许可通知的宽松开源协议）[View full MIT License »](https://choosealicense.com/licenses/mit/)



#### 1.3 .gitignore

使用 vscode 的 [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore) 插件，通过`ctrl+shift+p` 召唤命令面板，输入 `Add gitignore` 命令，即可在输入框输入系统或编辑器名字，来自动添加需要忽略的文件或文件夹至 `.gitignore` 中

该项目添加一下目标：Node、VisualStudioCode、Windows

>  填坑：无法拉取线上的配置，需要先通过 [ipaddress](https://www.ipaddress.com/) 查询 [raw.githubusercontent.com](https://ipaddress.com/website/raw.githubusercontent.com) 的真实 IP，修改本地 hosts 文件将上述查询到的 IP 加入，方可访问



#### 1.4 NPM 包管理

通过 [nrm](https://www.npmjs.com/package/nrm) 进行 npm 包管理，安装与使用参见[官方文档](https://github.com/Pana/nrm#readme)，安装如下

```powershell
npm install -g nrm
```



#### 1.5 README.md

对该项目的介绍与陈述，即该文用意





## Part 0. Reference

1. [博客 - [2.7w字]我是这样搭建 React+Typescript项目环境的(上)](https://juejin.cn/post/6860129883398668296)
2. [博客 - [2.7w字]我是这样搭建 React+Typescript项目环境的(下)](https://juejin.cn/post/6860134655568871437)
3. [如何使用React Testing Library和Jest测试React应用](https://juejin.cn/post/6886680584874934280)
