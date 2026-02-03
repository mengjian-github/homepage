"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-6"
            >
              关于我
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"
            >
              孟健
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              前腾讯 T11 · 前字节跳动 3-1，现全职创业：AI 编程 + 出海（小产品矩阵 / SEO 增长）
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
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
                个人简介
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div variants={fadeIn} className="md:col-span-1">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
                  <Image
                    src="/images/avatar.png"
                    alt="孟健的照片"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="md:col-span-2 space-y-5">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  前腾讯 8 年（T9 → T11）、前字节跳动前端技术 Leader（3-1）。腾讯期间做过 QQ 厘米秀、腾讯课堂运营技术、QQ 桌面端跨端重构等；字节期间负责猫箱（BagelBell）AI 角色互动平台。2025 年 10 月正式离职，开始全职创业，专注 AI 编程与出海增长。
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  我擅长用工程能力把想法快速落地：前端/全栈、自动化、AI 编程（Cursor / Claude Code / Codex 等）以及 SEO/SEM/Affiliate/EDM 等海外增长手段。
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  目前在做{" "}
                  <a
                    href="https://ziliu.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 underline underline-offset-2 transition-colors"
                  >
                    字流 ziliu.online
                  </a>
                  （14 平台一键发布工具）以及一系列 SEO 驱动的小产品。公众号「孟健AI编程」全网约 3 万粉，DeepSeek 相关书籍累计销量 93 万册。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallup Strengths */}
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
                盖洛普优势
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {["战略思考", "责任感", "成就导向", "学习", "分析思维"].map(
                (s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-white/[0.03] text-center"
                  >
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-mono tracking-wider">
                      0{i + 1}
                    </span>
                    <span className="block mt-2 text-base font-semibold text-neutral-900 dark:text-white">
                      {s}
                    </span>
                  </motion.div>
                )
              )}
            </div>
            <motion.p
              variants={fadeIn}
              className="text-neutral-500 dark:text-neutral-500 mt-8 max-w-2xl leading-relaxed text-sm"
            >
              盖洛普优势是我的核心工作风格——擅长战略分析、高度负责、追求成就、持续学习和系统思考。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
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
                03
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                工作经历
              </h2>
            </motion.div>

            <div className="space-y-0">
              {[
                {
                  company: "Nextfield Labs LLC（Wyoming）",
                  role: "创始人 / 全栈工程师",
                  period: "2025.10 - 至今",
                  items: [
                    "全职创业：AI 编程 + 出海增长，小产品矩阵",
                    "主产品：字流 ziliu.online（14 平台一键发布工具）",
                    "增长手段：SEO / SEM / Affiliate / EDM 等海外运营组合",
                    "内容输出：公众号「孟健AI编程」（全网约 3 万粉）",
                    "出版：DeepSeek 相关书籍累计销量 93 万册",
                  ],
                },
                {
                  company: "字节跳动",
                  role: "Flow 部门 · 前端技术 Leader（3-1）",
                  period: "2024 - 2025.10",
                  items: [
                    "负责猫箱（BagelBell）—— AI 角色创建与互动平台，日活 59 万",
                    "融合 AI 角色互动、情感陪伴、故事创作、图像生成等能力",
                    "隶属豆包所在的 Flow 大部门",
                  ],
                },
                {
                  company: "腾讯",
                  role: "QQ 大技术五组负责人（T11）",
                  period: "2022.12 - 2023",
                  items: [
                    "负责 QQ 群基础、QQ 群视频、QQ 群课堂、QQ 桌面端、QQ 频道、QQ 动态广场等相关技术业务",
                    "负责 QQ 桌面端基于 Electron 框架的持续性能优化",
                    "负责大技术 AI 方向建设落地，结合 QPilot 落地 D2C、P2C 两大方向，整体提效 30%以上",
                    "建设智能代码生成平台 Ultron Smartcode",
                    "负责主导 2 个公司级技术 OTeam",
                  ],
                },
                {
                  company: "腾讯",
                  role: "腾讯课堂运营技术负责人",
                  period: "2018.03 - 2022.11",
                  items: [
                    "负责课堂 C 侧业务的技术预审、技术方案、上线交付",
                    "多端实现拉通优化，涉及 PC Web、PC 客户端、H5、APP、IPad、小程序等多端业务的跨端需求",
                    "聚焦运营侧招、选、搭、投、玩法沉淀，保质保量高效达成业务 KPI",
                    "负责部门研发效能建设，自研效能工具 Thanos 与 Coding 的共建与落地",
                  ],
                },
                {
                  company: "腾讯",
                  role: "厘米秀产品中心 技术开发",
                  period: "2016.07 - 2018.03",
                  items: [
                    "2016.07 入职腾讯，在厘米秀团队负责技术开发工作",
                    "2018.03 转岗腾讯课堂，离开团队时绩效考核 4 星",
                  ],
                },
              ].map((job, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="py-8 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {job.company}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {job.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 flex-shrink-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-3"
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
      </section>

      {/* Education */}
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
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                教育背景
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex items-baseline justify-between py-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  西安交通大学
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  自动化科学与技术 · 本科
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
                2012 – 2016
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Books */}
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
                05
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                我的著作
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "DeepSeek极简入门与应用",
                  desc: "我的第一本出版书籍，深入浅出地介绍 DeepSeek 大模型的入门知识与实际应用场景。",
                  link: "https://item.jd.com/14960026.html",
                  linkText: "在京东购买",
                  hasImage: true,
                },
                {
                  title: "React 源码全解",
                  desc: "开源电子书，深入解析 React 源码的核心原理和实现机制，帮助开发者更好地理解 React 框架。",
                  link: "https://github.com/mengjian-github",
                  linkText: "查看项目",
                  hasImage: false,
                },
              ].map((book, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all"
                >
                  {book.hasImage && (
                    <div className="relative w-24 h-32 rounded overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 mb-4">
                      <Image
                        src="/images/my-first-book.jpg"
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                    {book.desc}
                  </p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {book.linkText}
                    <FiArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
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
                06
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                荣誉奖项
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  label: "公司荣誉",
                  text: "获得十二项公司级荣誉，3 项专业级荣誉。包括优秀员工、开源协同、自研上云等多项公司级奖项。",
                },
                {
                  label: "技术影响力",
                  text: "KM 技术文章 7 级影响力，分享达人，7 篇技术文章获 KM 总榜。",
                },
                {
                  label: "开源贡献",
                  text: "逆向分析 Copilot（Github 已获得上千 star）。",
                },
                {
                  label: "行业演讲",
                  text: "腾讯云专场 AI 分享交流、GMTC 全球大技术大会演讲嘉宾。",
                },
                {
                  label: "AI 领域",
                  text: "专注 AI 技术教学，教授 AI 编程技能。",
                },
                {
                  label: "技术著作",
                  text: "开源书籍《React 源码全解》作者，以及出版书籍《DeepSeek极简入门与应用》作者。",
                },
                {
                  label: "社区影响",
                  text: "知乎技术话题高赞回答者、云加社区特邀专栏作者、掘金社区和微信公众号作者。",
                },
              ].map((award, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-4 py-3 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0"
                >
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400/80 flex-shrink-0 w-20 sm:w-28 text-right">
                    {award.label}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {award.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <a
            href="https://mp.weixin.qq.com/s/fenUVm-ucssdflenPj4KUw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            腾讯打工8年：我为什么选择离开？
            <FiArrowRight className="w-3 h-3" />
          </a>
        </div>
      </section>
    </div>
  );
}
