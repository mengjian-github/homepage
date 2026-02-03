"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLink,
} from "react-icons/fi";
import { SiZhihu, SiJuejin, SiWechat } from "react-icons/si";
import Image from "next/image";
import DownloadResumeButton from "@/app/components/DownloadResumeButton";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ResumePage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-6">
                  Resume
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                  个人简历
                </h1>
              </div>
              <DownloadResumeButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Profile Header */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="relative w-28 h-28 rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 flex-shrink-0"
            >
              <Image
                src="/images/avatar.png"
                alt="孟健的照片"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                孟健
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 mb-4">
                技术负责人 · 技术作家 · 出海创业者
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                {[
                  { icon: <FiLink className="w-3.5 h-3.5" />, href: "https://mengjian.site", label: "mengjian.site" },
                  { icon: <FiGithub className="w-3.5 h-3.5" />, href: "https://github.com/mengjian-github", label: "GitHub" },
                  { icon: <SiZhihu className="w-3.5 h-3.5" />, href: "https://www.zhihu.com/people/meng-jian-39-32", label: "知乎" },
                  { icon: <SiJuejin className="w-3.5 h-3.5" />, href: "https://juejin.cn/user/4212984287073895", label: "掘金" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
                <span className="inline-flex items-center gap-1.5 text-neutral-500 dark:text-neutral-500">
                  <SiWechat className="w-3.5 h-3.5" />
                  mjcoding3
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 py-16 space-y-12">
            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeIn}
                className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 mb-5"
              >
                技术专长
              </motion.h3>

              <motion.div variants={fadeIn} className="space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    技术开发
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Vue", "TypeScript", "Electron"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[10px] font-mono tracking-wide rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    AI 技术融合
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["D2C", "P2C", "Copilot", "MCP", "DeepSeek"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[10px] font-mono tracking-wide rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeIn}
                className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 mb-5"
              >
                教育背景
              </motion.h3>
              <motion.div variants={fadeIn}>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  西安交通大学
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  自动化科学与技术 · 本科
                </p>
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mt-1">
                  2012 – 2016
                </p>
              </motion.div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeIn}
                className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 mb-5"
              >
                荣誉奖项
              </motion.h3>
              <motion.div variants={fadeIn} className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                    公司荣誉
                  </h4>
                  <ul className="space-y-1">
                    {[
                      "技术工程化 Teflow Oteam PMC",
                      "智能代码生成 TIC Oteam PMC",
                      "十二项公司级荣誉，3 项专业级荣誉",
                      "KM 技术文章 7 级影响力",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-neutral-500 dark:text-neutral-400 flex gap-2"
                      >
                        <span className="text-amber-500 dark:text-amber-400/60 mt-px">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                    业界影响力
                  </h4>
                  <ul className="space-y-1">
                    {[
                      "逆向分析 Copilot（Github 上千 star）",
                      "GMTC 全球大技术大会演讲嘉宾",
                      "开源书籍《React 源码全解》作者",
                      "知乎技术话题高赞回答者",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-neutral-500 dark:text-neutral-400 flex gap-2"
                      >
                        <span className="text-amber-500 dark:text-amber-400/60 mt-px">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-2 py-16 space-y-16 lg:border-l border-neutral-200 dark:border-neutral-800 lg:pl-16">
            {/* Work Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeIn}
                className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 mb-8"
              >
                工作经历
              </motion.h3>

              <div className="space-y-0">
                {[
                  {
                    company: "Nextfield Labs LLC",
                    role: "创始人 / 全栈工程师",
                    period: "2025.10 - 至今",
                    items: [
                      "全职创业：AI 编程 + 出海增长",
                      "主产品：字流 ziliu.online（14 平台一键发布工具）",
                      "《DeepSeek极简入门与应用》累计销量 93 万册",
                    ],
                  },
                  {
                    company: "腾讯",
                    role: "QQ 大技术五组负责人（T11）",
                    period: "2022.12 - 2023",
                    items: [
                      "负责 QQ 群基础、QQ 群视频等多个核心业务",
                      "负责大技术 AI 方向建设落地，整体提效 30%以上",
                      "建设智能代码生成平台 Ultron Smartcode",
                    ],
                  },
                  {
                    company: "腾讯",
                    role: "腾讯课堂运营技术负责人",
                    period: "2018.03 - 2022.11",
                    items: [
                      "负责课堂 C 侧业务的技术预审、技术方案",
                      "多端实现拉通优化，涉及 PC、H5、APP 等",
                      "负责部门研发效能建设",
                    ],
                  },
                  {
                    company: "腾讯",
                    role: "厘米秀技术开发",
                    period: "2016.07 - 2018.03",
                    items: [
                      "负责厘米秀团队技术开发工作",
                      "转岗腾讯课堂，离开团队时绩效考核 4 星",
                    ],
                  },
                ].map((job, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="py-6 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                      <div>
                        <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                          {job.company}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {job.role}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 flex-shrink-0">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {job.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-2"
                        >
                          <span className="text-amber-500 dark:text-amber-400/60 mt-1 flex-shrink-0">
                            ·
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Books */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeIn}
                className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 mb-8"
              >
                著作与出版
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "《DeepSeek极简入门与应用》",
                    subtitle: "出版书籍",
                    highlight: "累计销量 93 万册",
                  },
                  {
                    title: "《React 源码全解》",
                    subtitle: "开源电子书",
                    highlight: "深入解析 React 源码",
                  },
                ].map((book, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800"
                  >
                    <h4 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                      {book.title}
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {book.subtitle}
                    </p>
                    <p className="text-sm text-amber-600 dark:text-amber-400 mt-2 font-mono">
                      {book.highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeIn}
                className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 mb-8"
              >
                重点项目
              </motion.h3>

              <div className="space-y-0">
                {[
                  {
                    title: "AI 大技术落地专项",
                    period: "2022.06 - 2023",
                    items: [
                      "基于 PB 解析与 TDesign 场景化抽象，构建智能后台 P2C 方案",
                      "搭建整套 D2C 方案，开发 Figma 插件，还原度达 95%以上",
                      "P2C 和 D2C 已落地到整个 QQ 团队的技术业务开发中",
                    ],
                  },
                  {
                    title: "QQ NT 版本性能优化专项",
                    period: "2022.03 - 2022.05",
                    items: [
                      "负责 QQ 启动性能优化、图片查看器大图性能优化",
                      "对启动流程做单文件打包、异步拆包等优化",
                      "对图片查看器使用高精度图片进行 canvas 渲染",
                    ],
                  },
                  {
                    title: "技术统一监控看板项目",
                    period: "2021.09 - 2022.03",
                    items: [
                      "独立部署 Grafana 镜像，打通内部权限系统",
                      "技术集成 lmlog-aegis 方案，中转打通 RUM 上报监控 API",
                      "建立业务统一看板，包含业务测速、白屏、性能资源等监控",
                    ],
                  },
                ].map((proj, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="py-6 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                      <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                        {proj.title}
                      </h4>
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
                        {proj.period}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {proj.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-2"
                        >
                          <span className="text-amber-500 dark:text-amber-400/60 mt-1 flex-shrink-0">
                            ·
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
