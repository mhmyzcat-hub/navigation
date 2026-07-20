# 叹木宁导航站

一个部署在 GitHub Pages 上的静态导航站，包含公告、上款路径、联系方式和开款图片推荐。

## 项目结构

- `index.html`：导航首页
- `recommend.html`：统一的开款推荐页面，通过 `category` 查询参数选择分类
- `notice-*.html`：公告详情页
- `data/navigation.js`：全站唯一资料配置，包含站点、公告、导航和推荐分类
- `assets/recommendations/`：开款推荐图片
- `js/`、`css/`：页面逻辑和样式

## 修改资料

常规资料只需编辑 `data/navigation.js`：

- `siteConfig`：站点名称、页脚和推荐联系人
- `featuredPath`：上款路径
- `announcements`：公告列表
- `navigationData`：首页栏目及入口
- `recommendationGalleries`：推荐分类及图片目录

推荐入口统一使用以下形式：

```text
recommend.html?category=trousers
```

其中 `category` 必须与 `recommendationGalleries` 中的键一致。

## 添加推荐图片

将图片放入 `assets/recommendations/` 下对应目录即可，无需在配置中登记文件名。GitHub Pages 构建时会自动生成图片清单。目录规则和命名建议见 [图片维护说明](assets/recommendations/README.md)。

> 推荐图片清单使用 Jekyll 的 `site.static_files` 生成，因此直接双击 HTML 本地预览时不会显示图片；请使用 GitHub Pages/Jekyll 构建结果验证完整图库。

## 本地检查

项目没有构建依赖。提交前建议执行：

```sh
node --check data/navigation.js
node --check js/app.js
node --check js/render.js
node --check js/gallery.js
```

同时确认所有 HTML 中引用的本地 CSS、JavaScript 和页面文件均存在。

## 部署

推送至 GitHub Pages 对应分支后由 Pages 自动构建。根目录页面使用相对路径，可部署在仓库子路径下。
