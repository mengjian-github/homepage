"use client";

import { FiClock, FiExternalLink, FiArrowRight } from "react-icons/fi";
import JsonLd from "../components/JsonLd";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const articles = [
  {
    title: "腾讯打工8年：我为什么选择离开？",
    description:
      "我在腾讯工作8年的心路历程，为什么最终选择离开？分享我的成长、思考和决策过程。",
    date: "2022-12-15",
    link: "https://mp.weixin.qq.com/s/fenUVm-ucssdflenPj4KUw",
    readTime: "15 分钟",
    categories: ["职业发展", "经验分享"],
  },
  {
    title: "新 QQ NT 桌面版如何实现内存优化探索",
    description:
      "深入解析新版 QQ NT 桌面版在内存优化方面的技术探索和实践经验。",
    date: "2022-06-20",
    link: "https://mp.weixin.qq.com/s/STqlp2eMdeoixedCEhYJgQ",
    readTime: "12 分钟",
    categories: ["技术", "开发", "性能优化"],
  },
  {
    title: "对 Electron 相关质疑的回答",
    description:
      "针对业界对 Electron 框架的常见质疑，从技术角度进行分析和回应。",
    date: "2022-05-10",
    link: "https://mp.weixin.qq.com/s/m3Y-m_nMp1vWQD4w8ndArQ",
    readTime: "10 分钟",
    categories: ["技术", "Electron", "桌面应用"],
  },
  {
    title: "深入解析 GitHub Copilot 工作原理",
    description:
      "通过逆向分析，探索 GitHub Copilot 的底层实现机制和工作原理。",
    date: "2023-03-05",
    link: "https://juejin.cn/post/7127612045822255135",
    readTime: "20 分钟",
    categories: ["AI", "GitHub Copilot", "技术研究"],
  },
  {
    title: "DeepSeek R1 最佳实践指南发布",
    description:
      "我编写的 DeepSeek R1 大模型最佳实践指南正式发布，帮助开发者更高效地使用 AI 辅助编程。",
    date: "2023-10-12",
    link: "https://wvehg9sdj2q.feishu.cn/wiki/Rq0EwcY4WiWp0ok1lh3cqohsngf?fromScene=spaceOverview",
    readTime: "系列文章",
    categories: ["AI", "DeepSeek", "最佳实践"],
  },
  {
    title: "加入孟健的 AI 编程陪伴群",
    description:
      "邀请你加入我创建的 AI 编程陪伴群，共同学习、交流 AI 与编程技术，分享前沿资讯。",
    date: "2023-12-01",
    link: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog",
    readTime: "5 分钟",
    categories: ["社区", "AI", "学习"],
  },
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "孟健的技术博客",
    description: "分享技术开发、AI技术融合和团队管理的专业文章",
    author: {
      "@type": "Person",
      name: "孟健",
      url: "https://mengjian.site",
    },
    publisher: {
      "@type": "Person",
      name: "孟健",
      url: "https://mengjian.site",
    },
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      <JsonLd data={blogSchema} />

      {/* Header */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeIn}
              className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-6"
            >
              Blog
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"
            >
              博客文章
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl"
            >
              分享我的技术见解、项目经验和行业思考
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <div className="space-y-0">
              {articles.map((article, i) => (
                <motion.a
                  key={i}
                  variants={fadeIn}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0 hover:bg-neutral-50 dark:hover:bg-white/[0.01] -mx-4 px-4 rounded-lg transition-colors"
                >
                  {/* Date + meta */}
                  <div className="sm:w-36 flex-shrink-0 flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
                      {article.date}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 dark:text-neutral-700 flex items-center gap-1">
                      <FiClock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {article.categories.map((cat, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 text-[10px] font-mono tracking-wide rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center flex-shrink-0 pt-1">
                    <FiArrowRight className="w-4 h-4 text-neutral-300 dark:text-neutral-700 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-neutral-900 dark:text-white mb-3"
            >
              订阅我的公众号
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-sm text-neutral-500 dark:text-neutral-500 mb-8 max-w-md mx-auto"
            >
              关注「孟健AI编程」公众号，获取更多前端、AI、技术管理等方面的原创内容。
            </motion.p>
            <motion.div variants={fadeIn}>
              <a
                href="https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                立即关注
                <FiExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
