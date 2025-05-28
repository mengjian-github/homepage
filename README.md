# 孟健的个人网站

[![部署状态](https://img.shields.io/badge/部署-成功-brightgreen)](https://mengjian.dev)
[![技术栈](https://img.shields.io/badge/技术栈-Next.js%2014-blue)](https://nextjs.org/)
[![开源](https://img.shields.io/badge/开源-MIT-green)](https://github.com/mengjian-github/mengjian-homepage)

这是孟健的个人网站源代码，基于 [Next.js 14](https://nextjs.org/) 构建，使用 App Router、TypeScript 和 TailwindCSS。

## 项目介绍

本网站是一个展示个人信息、项目经验、技术博客和联系方式的全栈应用。网站主要包含以下几个板块：

- **首页**：个人简介和核心技能展示
- **关于我**：详细的个人介绍、工作经历和教育背景
- **项目经验**：展示主要项目作品和技术实践
  - 🤖 [微信群聊日报生成器](https://www.wechatdaily.online/) - 基于 AI 的群聊分析工具
  - 📝 [飞书文档转公众号排版工具](https://www.larkmd.online/) - 专业的内容创作工具
  - 🔍 [逆向分析 Copilot](https://github.com/mengjian-github/copilot-analysis) - GitHub 1000+ stars
  - 📚 [React 源码全解](https://meng-jian.gitbook.io/react-yuan-ma-quan-jie/) - 开源电子书
- **博客文章**：技术文章和行业洞察
- **联系方式**：社交媒体链接和沟通渠道

网站采用响应式设计，支持亮色/暗色主题切换，并进行了SEO优化。

## 技术栈

- **前端框架**：Next.js 14 (App Router)
- **编程语言**：TypeScript
- **样式方案**：TailwindCSS
- **UI组件**：自定义组件 + React Icons
- **动画**：Framer Motion
- **主题切换**：next-themes
- **部署平台**：Vercel
- **性能优化**：图片优化、代码分割、SEO优化

## 特色功能

- ✨ **响应式设计**：完美适配桌面端、平板和移动设备
- 🌓 **主题切换**：支持亮色/暗色主题，自动跟随系统设置
- 🚀 **性能优化**：使用 Next.js 14 的最新特性，加载速度极快
- 📱 **移动友好**：针对移动设备优化的交互体验
- 🔍 **SEO优化**：完整的元数据配置，搜索引擎友好
- 🎨 **精美设计**：现代化的UI设计，注重用户体验

## 本地开发

### 前置要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看开发环境下的网站。

## 构建和部署

### 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 本地预览生产版本

```bash
npm run start
# 或
yarn start
# 或
pnpm start
```

### 部署

推荐使用 [Vercel](https://vercel.com/) 平台部署。只需将代码推送到您的 GitHub 仓库，然后在 Vercel 上导入该仓库即可完成部署。

## 目录结构

```
├── app/                # Next.js 应用目录
│   ├── components/     # 共享组件
│   ├── about/          # 关于页面
│   ├── projects/       # 项目页面
│   ├── blog/           # 博客页面
│   ├── contact/        # 联系页面
│   ├── resume/         # 简历页面
│   └── layout.tsx      # 根布局组件
├── components/         # 全局组件
│   └── ui/            # UI 组件库
├── lib/               # 工具函数和配置
├── public/            # 静态资源
│   ├── images/        # 图片资源
│   └── fonts/         # 字体文件
└── README.md          # 项目文档
```

## 自定义和扩展

- **添加新页面**：在 `app` 目录下创建新的目录和 `page.tsx` 文件
- **更新元数据**：修改 `app/layout.tsx` 和各页面的 `metadata` 导出
- **修改主题**：调整 `tailwind.config.ts` 中的配置
- **添加组件**：在 `components` 目录下创建可复用组件
- **更新项目信息**：修改 `app/projects/page.tsx` 中的项目数据

## 最新更新

- 🚀 **2025年1月**：添加微信群聊日报生成器项目展示
- 📝 **2024年12月**：更新飞书文档转公众号排版工具信息
- 🎨 **2024年**：优化项目页面布局，增加精选项目区域
- 🔧 **2024年**：升级到 Next.js 14，提升性能和开发体验

## 许可证

MIT

---

## 关于作者

孟健，字节跳动 Flow-Parallel 前端团队负责人，《DeepSeek极简入门与应用》作者（销量突破60万册），专注于 AI 与前端技术融合发展。

- 🌐 **个人网站**：[https://mengjian.site](https://mengjian.site)
- 📧 **联系方式**：通过网站联系页面获取
- 🐙 **GitHub**：[@mengjian-github](https://github.com/mengjian-github)
