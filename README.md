# website-navigation

个人网址导航，使用 Next.js、React 和 Zustand。

- [Cloudflare Pages](https://website-navigation-e4h.pages.dev/)
- [GitHub Pages](https://bingoyb.github.io/website-navigation/)

## 单分支发布

只维护 master 分支的源码。每次合并到 master 后，两个平台自动构建并发布同一份源码：

| 平台 | 构建路径 | 发布方式 |
| --- | --- | --- |
| Cloudflare Pages | 网站根目录 | Git 集成，生产分支为 master |
| GitHub Pages | /website-navigation | GitHub Actions 上传静态产物并发布 |

路径差异由 NEXT_PUBLIC_BASE_PATH 构建参数控制。页面中的静态资源统一通过 assetPath 生成路径，CSS 图片由 Next.js 打包。

GitHub Actions 会在 PR 和 master 更新时验证两种路径的完整构建。docs 是导出目录，已加入忽略规则；生成文件无需提交。原 cloud-page、nextjs-version 分支保留历史，不再用于日常发布，旧的强推 master 工作流已停用。

### 平台设置

Cloudflare Pages：

- 生产分支：master
- 构建命令：npm test -- --runInBand && npm run build && npm run export && npm run verify:export
- 构建输出目录：docs
- NEXT_PUBLIC_BASE_PATH 留空

GitHub Pages：

- Settings → Pages → Source：GitHub Actions
- 工作流：[deploy-pages.yml](.github/workflows/deploy-pages.yml)
- 工作流读取 Pages 配置提供的路径前缀，无需手动提交构建产物或同步发布分支

## 本地开发与验证

~~~sh
npm ci
npm run dev
~~~

Cloudflare 根路径构建：

~~~sh
npm run build
npm run export
npm run verify:export
~~~

GitHub Pages 路径构建：

~~~sh
NEXT_PUBLIC_BASE_PATH=/website-navigation npm run build
NEXT_PUBLIC_BASE_PATH=/website-navigation npm run export
NEXT_PUBLIC_BASE_PATH=/website-navigation npm run verify:export
~~~

修改 NEXT_PUBLIC_BASE_PATH 后，需要重新构建。两个平台的构建产物各自生成，不要复用不同路径的导出文件。

## 数据更新

网站数据位于 [data](data) 目录。新增网站时按分类编辑 JSON；若有好的网站希望收录，或发现其他问题，请提交 issue。

~~~json
{
  "url": "https://www.bilibili.com/",
  "name": "B站",
  "desc": "bilibili 是国内知名的视频弹幕网站。"
}
~~~

提交前运行：

~~~sh
npm test -- --runInBand
~~~

## 联系方式

邮箱：binhdu@foxmail.com
