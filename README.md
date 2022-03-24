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

```bash
npm install -g nrm
```



#### 1.5 README.md

对该项目的介绍与陈述，即该文用意



### Chapter 2. 规范代码与提交

#### 2.1 EditorConfig（统一编辑器风格）

使用 vscode 的 [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 插件，在项目根目录手动新建`.editorconfig`配置文件，配置项细则参照官网 [EditorConfig](https://editorconfig.org/)

```
root = true

[*]
# 缩进风格 space/tab
indent_style = space
# 缩进大小
indent_size = 2
# 字符编码格式
charset = utf-8
# 删除文件中换行符之前的所有空白字符
trim_trailing_whitespace = true
# 文件末尾添加空行
insert_final_newline = true
# 换行符方式  可选:lf/cr/crlf
end_of_line = lf

[*.md]
trim_trailing_whitespace = false
```



#### 2.2 Prettier（统一项目代码风格）

项目中安装`prettier`依赖包

```bash
npm install prettier -D
```

在项目根目录新建配置文件 `.prettierrc` ，具体的配置详见 [a]()

```json
{
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "endOfLine": "lf",
  "printWidth": 120,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

- trailingComma：对象的最后一个属性末尾添加逗号  可选 - all/es5/none
- useTabs: 是否使用 tabs 缩进
- tabWidth：缩进大小
- semi：分号是否添加
- singleQuote：是否默认以单引号为标准
- endOfLine：换行符方式  可选 - lf/cr/crlf
- printWidth：单行字符最长字符长度，超过换行
- bracketSpacing：对象括号间打印空格
- arrowParens：箭头函数的参数是否括号包裹  可选 - always/avoid

安装 vscode 的 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件。

在项目根目录上新建`.vscode`文件夹，在此文件夹下再新建`settings.json`文件，该文件的配置会优先于`vscode`本地全局的 `settings.json`配置

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
    
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

新建`.prettierignore`文件用于排除需要忽略`prettier`规则生效的文件

```
dist/
node_modules/
build/
out/
```



#### 2.3 ESLint（解决代码质量问题）

首先在项目中安装`eslint`：

```bash
npm install eslint -D
```

安装成功后，执行以下命令：

```bash
npx eslint --init
```

依据个人需求的问答选择，最终会在根目录上生成`.eslintrc.js`的配置文件，默认配置如下

```javascript
module.exports = {
  // 指定启用环境 browser 和 Node.js  
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 当前默认安装引入对 社区推荐、react 和 ts 语法推荐的规则定义
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 第三方插件，使用 npm 进行安装
  plugins: ['react', '@typescript-eslint'],
  /**
  * 规则配置
  *	"off" 或 0 - 关闭规则
  * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  */
  rules: {},
};
```

安装`Airbnb` 风格配置

```bash
npm install eslint-config-airbnb -D
```

执行参看`eslint-config-airbnb`的依赖，并安装其相关依赖

```bash
npm info "eslint-config-airbnb@latest" peerDependencies

npm install --save-dev eslint-config-airbnb eslint@^x.x.x eslint-plug-plugin-import@^x.x.x eslint-plugin-react@^x.x.x eslint-plugin-react-hooks@^x.x.x
```

引入并开启 React Hooks 的检查

```javascript
{
	"extends": [
		// ...
		"airbnb", 
		"airbnb/hooks"
	]
};
```

> 补充：
>
> 1. 当遇到在 `.ts` 和 `.tsx` 文件中引入另一个文件模块会报错时，需添加如下规则：（本次配置没遇到，故无下述教程配置）
>
> ```javascript
> rules: {
>   'import/extensions': [
>     ERROR,
>     'ignorePackages',
>     {
>       ts: 'never',
>       tsx: 'never',
>       json: 'never',
>       js: 'never',
>     },
>   ],
> }
> ```
>
> 2. 过程中需要补充安装的包有：`eslint-plugin-jsx-a11y`、`eslint-import-resolver-typescript`等

项目安装 `typescript`

```bash
npm install typescript -D
```

配置常用拓展名

```javascript
{
  // ...
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
    },
  },
}
```

安装如下`eslint`插件：

- `eslint-plugin-promise` ：让你把 Promise 语法写成最佳实践

  ```bash
  npm install eslint-plugin-promise -D
  ```

  

- `eslint-plugin-unicorn` ：提供了更多有用的配置项，比如我会用来规范关于文件命名的方式

  ```bash
  npm install eslint-plugin-unicorn -D
  ```

更新 .eslintrc.js 的 extends 配置字段

```javascript
{
  //...
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
```

具体`rules`规则配置详见[项目相关代码](https://github.com/FarewellTears/react-ts-admin-template/blob/main/.eslintrc.js)



#### 2.4 StyleLint（统一样式代码风格）

首先在项目中引入

```bash
npm install --save-dev stylelint stylelint-config-standard
```

安装社区部分优秀的插件：

- `stylelint-config-rational-order`：用于按照以下顺序将相关属性声明进行分组来对它们进行排序

  1. Positioning
  2. Box Model
  3. Typography
  4. Visual
  5. Animation
  6. Misc

  ```bash
  npm install --save-dev stylelint-order stylelint-config-rational-order
  ```

  

- `stylelint-declaration-block-no-ignored-properties`：用于提示存在的矛盾样式

  ```bash
  npm install stylelint-declaration-block-no-ignored-properties --save-dev
  ```



#### 2.5 lint 命令

 `package.json` 的 `scripts` 中增加以下配置：

```json
{
	scripts: {
        "lint": "npm run lint-eslint && npm run lint-stylelint",
        "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js src",
        "lint-stylelint": "stylelint --config .stylelintrc.js src/**/*.{less,css}"
    }
}
```

对`.less`单独处理

```bash
npm install --save-dev postcss-less
```

配置 `.stylelintrc.js` 文件

```json
{
	customSyntax: 'postcss-less',
	rules: {
		//...
	}
}
```



#### 2.6 解决 ESLint、Stylelint 和 Prettier 的冲突

安装插件 `eslint-config-prettier`，这个插件会禁用所有和 prettier 起冲突的规则：

```bash
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-prettier
```

添加以下配置到 `.eslintrc.js` 的 `extends` 中：

```json
{
  extends: [
    // other configs ...
   	'plugin:prettier/recommended',
  ],
  plugins: [
    // other configs ... 
    'prettier',
  ],
}
```

这里需要注意， `'prettier'` 及之后的配置要放到原来添加的配置的后面，这样才能让 `prettier` 禁用之后与其冲突的规则。

`stylelint` 的冲突解决也是一样的，先安装插件 [stylelint-config-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Fstylelint-config-prettier) ：

```bash
npm install --save-dev stylelint-config-prettier
```

添加以下配置到 `.stylelintrc.js` 的 `extends` 中：

```json
{  
	extends: [
  	// other configs ...
    'stylelint-config-prettier'
  ]
}
```



#### 2.7 lint-staged

提交代码前对代码进行格式化，借助于`husky`提供提交前的钩子以及`lint-staged`格式化和校验

```bash
npm install husky lint-staged --save-dev
```

在 `package.json`配置如下

```json
{
	"husky": {
        "hooks": {
          "pre-commit": "lint-staged",
        }
      },
    "lint-staged": {
        "*.{ts,tsx,js}": [
            "eslint --config .eslintrc.js"
        ],
        "*.{css,less}": [
            "stylelint --config .stylelintrc.js"
        ],
        "*.{ts,tsx,js,json,html,yml,css,less,md}": [
            "prettier --write"
        ]
    },
}
```



#### 2.8 commitlint + changelog（未经验证）

安装 `commitlint` 相关依赖：

```bash
npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

在根目录新建文件 `.commitlintrc.js` ，配置如下

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

然后在`package.json` 的 `husky` 配置，增加一个钩子：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint --config .commitlintrc.js -E HUSKY_GIT_PARAMS"
    }
  },
}
复制代码
```

`-E HUSKY_GIT_PARAMS` 简单理解就是会拿到 message 后 commitlint 进行 lint 校验

安装`changelog`依赖：

```bash
npm install conventional-changelog-cli -D
```

在 `package.json` 的 `scripts` 下增加一个命令：

```json
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
  },
}
```

之后就可以通过 `npm run changelog` 生成 angular 风格的`changelog`，需要注意的是，上面这条命令产生的`changelog`是基于上次 tag 版本之后的变更（feat、fix 等等）所产生的。









## Part 0. Reference

1. [博客 - [2.7w字]我是这样搭建 React+Typescript项目环境的(上)](https://juejin.cn/post/6860129883398668296)
2. [博客 - [2.7w字]我是这样搭建 React+Typescript项目环境的(下)](https://juejin.cn/post/6860134655568871437)
3. [如何使用React Testing Library和Jest测试React应用](https://juejin.cn/post/6886680584874934280)
