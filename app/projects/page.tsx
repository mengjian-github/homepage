"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const projects = [
  {
    title: "MCP Hub 中国",
    description:
      "精选优质 MCP 服务的综合平台，包含 Web 应用、CLI 工具和 MCP 服务器。支持 Cursor 一键安装，为 AI 开发者提供便捷的工具生态系统。",
    link: "https://mcp-cn.com",
    github: "https://github.com/mengjian-github/mcp-cn",
    tags: ["MCP", "TypeScript", "Next.js", "CLI", "Monorepo", "AI 工具"],
    featured: true,
  },
  {
    title: "AI Daily Generator",
    description:
      "智能 AI 资讯日报生成工具，自动抓取最新 AI 动态，支持多平台格式化输出。现代化界面设计，一键生成微信群、朋友圈等分享格式。",
    link: null,
    github: "https://github.com/mengjian-github/ai-daily-generator",
    tags: ["Next.js", "React 19", "AI", "Playwright", "shadcn/ui"],
    featured: true,
  },
  {
    title: "微信群聊日报生成器",
    description:
      "基于 AI 的微信群聊分析工具，自动提取话题精华、群友金句和跟进事项，一键生成美观的图片日报。支持 macOS、Windows、Linux 三大平台。",
    link: "https://www.wechatdaily.online/",
    github: "https://github.com/mengjian-github/wechat-daily-report",
    tags: ["Electron", "React", "TypeScript", "AI", "跨平台"],
    featured: true,
  },
  {
    title: "飞书文档转公众号排版工具",
    description:
      "专业的在线工具，帮助用户快速将飞书文档转换为美观的微信公众号文章，支持一键转换、实时预览和完整样式保留。",
    link: "https://www.larkmd.online/",
    github: "https://github.com/mengjian-github/lark-to-markdown",
    tags: ["Next.js", "TailwindCSS", "React Markdown"],
    featured: true,
  },
  {
    title: "逆向分析 Copilot",
    description:
      "深入剖析 GitHub Copilot 的工作原理，研究其实现机制和功能设计，GitHub 上已获得上千 star，在技术社区产生广泛影响。",
    link: null,
    github: "https://github.com/mengjian-github/copilot-analysis",
    tags: ["GitHub Copilot", "逆向工程", "AI", "VSCode 插件"],
    featured: true,
  },
  {
    title: "React 学习指南",
    description:
      "一个面向初学者和进阶开发者的 React 教程网站，涵盖从基础到高级的 React 知识点和最佳实践。",
    link: "https://r-learn.vercel.app/",
    github: null,
    tags: ["React", "教程", "Next.js", "MDX"],
    featured: false,
  },
  {
    title: "开源书籍《React 源码全解》",
    description:
      "深入解析 React 源码的开源电子书，从源码角度解析 React 的设计思想和实现细节。",
    link: "https://meng-jian.gitbook.io/react-yuan-ma-quan-jie/",
    github: null,
    tags: ["React", "源码分析", "电子书", "开源"],
    featured: false,
  },
  {
    title: "DeepSeek R1 最佳实践指南",
    description:
      "提供 DeepSeek R1 大模型的最佳实践指南，包括如何有效使用 AI 大模型进行编程和日常助手工作。",
    link: "https://wvehg9sdj2q.feishu.cn/wiki/Rq0EwcY4WiWp0ok1lh3cqohsngf?fromScene=spaceOverview",
    github: null,
    tags: ["DeepSeek", "AI", "大模型", "实践指南"],
    featured: false,
  },
  {
    title: "D2C 智能代码生成平台",
    description:
      "基于 AI 的设计稿转代码平台，通过分析设计稿自动生成前端代码，大幅提升开发效率。",
    link: null,
    github: null,
    tags: ["AI", "D2C", "Figma", "前端"],
    featured: false,
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeIn}
              className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-6"
            >
              Projects
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"
            >
              项目经验
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl"
            >
              我的开源项目和技术作品
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-12 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                精选项目
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.02] flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 text-[10px] font-mono tracking-wide rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <FiExternalLink className="w-3 h-3" /> 访问
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <FiGithub className="w-3 h-3" /> GitHub
                      </a>
                    )}
                    {!project.link && !project.github && (
                      <span className="text-xs text-neutral-400 dark:text-neutral-600">
                        项目进行中
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0d0d0d] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-12 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                02
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                其他项目
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all duration-300 bg-white dark:bg-white/[0.02] flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 text-[10px] font-mono tracking-wide rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <FiExternalLink className="w-3 h-3" /> 访问
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <FiGithub className="w-3 h-3" /> GitHub
                      </a>
                    )}
                    {!project.link && !project.github && (
                      <span className="text-xs text-neutral-400 dark:text-neutral-600">
                        项目进行中
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500 max-w-xl mx-auto">
            我还有更多进行中和已完成的项目，包括企业内部项目和开源贡献。如果您对特定领域的项目感兴趣，欢迎通过联系方式页面与我联系。
          </p>
        </div>
      </section>
    </div>
  );
}
