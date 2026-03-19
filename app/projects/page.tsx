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
    title: "字流",
    description:
      "AI 驱动的多平台内容发布工具，一次创作，智能适配公众号、知乎、掘金等多个平台，是当前最核心的产品之一。",
    link: "https://ziliu.online",
    github: "https://github.com/mengjian-github/ziliu",
    tags: ["AI", "内容工具", "Next.js", "Cloudflare", "工作流"],
    featured: true,
  },
  {
    title: "OpenClaw 101",
    description:
      "面向中文用户的 AI 私人助理入门导航站，帮助开发者和创作者快速理解并上手 OpenClaw 的实际用法。",
    link: "https://openclaw101.dev",
    github: "https://github.com/mengjian-github/openclaw101",
    tags: ["OpenClaw", "AI 助手", "Next.js", "文档站", "教育内容"],
    featured: true,
  },
  {
    title: "MCP Hub 中国",
    description:
      "精选优质 MCP 服务的综合平台，包含 Web 应用、CLI 工具和 MCP 服务器，面向中文开发者构建 MCP 生态入口。",
    link: "https://mcp-cn.com",
    github: "https://github.com/mengjian-github/mcp-cn",
    tags: ["MCP", "TypeScript", "Next.js", "CLI", "AI 工具"],
    featured: true,
  },
  {
    title: "飞书转公众号",
    description:
      "帮助创作者把飞书文档快速转换成可发布的公众号内容，属于典型的内容工作流提效工具。",
    link: "https://www.larkmd.online/",
    github: "https://github.com/mengjian-github/lark-to-markdown",
    tags: ["内容工作流", "Next.js", "TailwindCSS", "公众号"],
    featured: true,
  },
  {
    title: "逆向分析 Copilot",
    description:
      "深入剖析 GitHub Copilot 的工作原理与实现机制，在技术社区获得较强传播，是个人技术影响力代表作之一。",
    link: null,
    github: "https://github.com/mengjian-github/copilot-analysis",
    tags: ["GitHub Copilot", "逆向工程", "AI", "VSCode 插件"],
    featured: true,
  },
  {
    title: "出海产品矩阵",
    description:
      "围绕 SEO、内容、工具与轻量应用持续做实验，形成多个站点并行验证的产品矩阵。",
    link: null,
    github: "https://github.com/mengjian-github/mengjian",
    tags: ["SEO", "出海", "增长", "站群", "产品实验"],
    featured: true,
  },
  {
    title: "AI Daily Generator",
    description:
      "智能 AI 资讯日报生成工具，支持自动抓取、整合和格式化输出，服务内容创作与信息分发场景。",
    link: null,
    github: "https://github.com/mengjian-github/ai-daily-generator",
    tags: ["Next.js", "AI", "内容生成", "自动化"],
    featured: false,
  },
  {
    title: "微信群聊日报生成器",
    description:
      "基于 AI 的微信群聊分析工具，自动提取话题精华、群友金句和跟进事项，并生成美观日报。",
    link: "https://www.wechatdaily.online/",
    github: null,
    tags: ["Electron", "React", "TypeScript", "AI", "跨平台"],
    featured: false,
  },
  {
    title: "React 源码全解",
    description:
      "从源码角度解析 React 的设计思想和实现细节，是长期内容沉淀与技术写作能力的代表作品。",
    link: "https://meng-jian.gitbook.io/react-yuan-ma-quan-jie/",
    github: null,
    tags: ["React", "源码分析", "电子书", "开源"],
    featured: false,
  },
  {
    title: "个人主页 / GitHub 品牌承接",
    description:
      "围绕个人品牌，统一展示个人经历、作品、出版、演讲与产品矩阵，用于承接流量、合作与信任建设。",
    link: "https://mengjian.site",
    github: "https://github.com/mengjian-github/homepage",
    tags: ["个人品牌", "Portfolio", "Next.js", "SEO"],
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
              我的代表产品、开源项目与个人品牌作品
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
