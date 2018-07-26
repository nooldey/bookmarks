---
home: true
heroImage: /avatar.png
actionText: 开始
actionLink: /developer/
features:
- title: 极简操作
  details: 你需要做的，只有一步，导出你的谷歌书签！
- title: 智能转换
  details: 运行脚本，自动分析谷歌书签导出的HTML文件，并生成Markdown文件。
- title: 随时访问
  details: 借助Vuepress，生成可随时在线访问文档，再也不怕谷歌账户登录失败！
footer: Copyright © 2018 Nooldey
---

### Easy Steps

1. 克隆本项目到本地： `git clone https://github.com/nooldey/bookmarks.git`.
2. 导出谷歌浏览器的书签，导出格式为HTML.
3. 将导出的谷歌书签文件重命名为`bookmarks.html`，复制到本项目的文件夹`generater/bookmark/`下.

### Start

1. 装载依赖包：`npm i`
2. 解析谷歌书签：`npm run chrome`
3. 生成可发布网页：`npm run build`
4. 本地开发：`npm run dev`


::: tip 开发注意事项
1. `generater`文件夹下，除书签文件`bookmarks.html`外，请勿随意修改文件；
2. `generater/static`文件夹下，请勿随意修改`.vuepress`下的文件；
3. 二次开发请注意目录规则遵守`Vuepress`官方说明及规范。
:::
