"use client";

import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight, FiMessageCircle } from "react-icons/fi";
import { SiZhihu, SiJuejin } from "react-icons/si";
import JsonLd from "./components/JsonLd";
import GitHubStats from "./components/GitHubStats";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const products = [
  {
    name: "字流",
    domain: "ziliu.online",
    url: "https://ziliu.online",
    desc: "14 平台一键发布工具",
    tag: "主产品",
  },
  {
    name: "MCP Hub 中国",
    domain: "mcp-cn.com",
    url: "https://mcp-cn.com",
    desc: "MCP 服务综合平台",
  },
  {
    name: "OpenClaw 101",
    domain: "openclaw101.dev",
    url: "https://openclaw101.dev",
    desc: "AI 助手入门导航站",
  },
  {
    name: "飞书转公众号",
    domain: "larkmd.online",
    url: "https://larkmd.online",
    desc: "格式转换工具",
  },
  {
    name: "出海产品矩阵",
    domain: "9+ SEO 站点",
    url: "/projects",
    desc: "SEO 驱动的全球化产品集群",
    internal: true,
  },
];

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "孟健",
    jobTitle: "AI 编程实战专家 / 出海创业者",
    description:
      "前腾讯 T11 | Nextfield Labs LLC 创始人 | 公众号「孟健AI编程」3万+ 粉丝 | 《DeepSeek极简入门与应用》累计销量 93 万册",
    url: "https://mengjian.site",
    sameAs: [
      "https://github.com/mengjian-github",
      "https://www.zhihu.com/people/meng-jian-39-32",
      "https://juejin.cn/user/4212984287073895",
    ],
    knowsAbout: [
      "AI编程",
      "React",
      "Next.js",
      "TypeScript",
      "SEO",
      "出海创业",
      "DeepSeek",
    ],
  };

  return (
    <div className="relative bg-white dark:bg-[#0a0a0a] min-h-screen">
      <JsonLd data={personSchema} />

      {/* ————————————————————————————————————————————
          HERO
      ———————————————————————————————————————————— */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Subtle editorial grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(120,120,120,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
          {/* Kicker */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-8"
          >
            Ex-Tencent T11 · Nextfield Labs LLC · Est. 2025
          </motion.p>

          {/* Name — massive editorial type */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] font-extrabold tracking-tighter text-neutral-900 dark:text-white leading-[0.85] mb-6 select-none"
          >
            孟健
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 max-w-2xl mb-14 leading-relaxed"
          >
            AI 编程实战专家
            <span className="text-neutral-300 dark:text-neutral-700 mx-3">/</span>
            出海创业者
            <span className="text-neutral-300 dark:text-neutral-700 mx-3">/</span>
            技术作者 &amp; 演讲者
          </motion.p>

          {/* Key Stats — the "wow" numbers */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-10 mb-14"
          >
            {[
              { num: "93万+", unit: "册", label: "书籍累计销量" },
              { num: "3万+", unit: "", label: "公众号粉丝" },
              { num: "1000+", unit: "", label: "GitHub Stars" },
              { num: "T11", unit: "", label: "腾讯最高职级" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="border-l-2 border-amber-500/70 dark:border-amber-400/50 pl-4"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-neutral-900 dark:text-white">
                  {s.num}
                  {s.unit && (
                    <span className="text-amber-600 dark:text-amber-400">{s.unit}</span>
                  )}
                </span>
                <span className="block text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mt-1 tracking-wide">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-5"
          >
            {[
              { href: "https://github.com/mengjian-github", icon: <FiGithub className="w-5 h-5" />, label: "GitHub" },
              { href: "https://www.zhihu.com/people/meng-jian-39-32", icon: <SiZhihu className="w-5 h-5" />, label: "知乎" },
              { href: "https://juejin.cn/user/4212984287073895", icon: <SiJuejin className="w-5 h-5" />, label: "掘金" },
              { href: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog", icon: <FiMessageCircle className="w-5 h-5" />, label: "公众号" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={l.label}
                className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-white transition-colors duration-200"
              >
                {l.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600 font-mono">
              Scroll
            </span>
            <div className="w-px h-8 bg-neutral-300 dark:bg-neutral-700" />
          </div>
        </motion.div>
      </section>

      {/* ————————————————————————————————————————————
          01 — PRODUCTS
      ———————————————————————————————————————————— */}
      <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-16 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                01
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                产品矩阵
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p, i) => (
                <motion.a
                  key={i}
                  variants={fadeIn}
                  href={p.url}
                  target={p.internal ? undefined : "_blank"}
                  rel={p.internal ? undefined : "noopener noreferrer"}
                  className="group block p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.02]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {p.name}
                    </h3>
                    {p.tag && (
                      <span className="text-[10px] uppercase tracking-widest bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded font-mono flex-shrink-0 ml-2">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center text-xs font-mono text-neutral-400 dark:text-neutral-600 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {p.domain}
                    <FiArrowRight className="ml-1.5 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          02 — ACHIEVEMENTS & CAREER
      ———————————————————————————————————————————— */}
      <section className="py-24 bg-neutral-50 dark:bg-[#0d0d0d] border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-16 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                02
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                里程碑
              </h2>
            </motion.div>

            {/* Achievement stat blocks */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { num: "10", suffix: "年", desc: "腾讯技术管理经验" },
                { num: "15", suffix: "项", desc: "荣誉奖项（含 12 项公司级）" },
                { num: "3+", suffix: "", desc: "大会演讲" },
                { num: "KM 7", suffix: "级", desc: "知识影响力" },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-lg bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-neutral-800"
                >
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-neutral-900 dark:text-white">
                    {a.num}
                    {a.suffix && (
                      <span className="text-amber-600 dark:text-amber-400 text-xl sm:text-2xl">{a.suffix}</span>
                    )}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">{a.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {[
                { year: "2025.10", text: "全职创业，创办 Nextfield Labs LLC" },
                { year: "2025", text: "《DeepSeek极简入门与应用》出版，累计销量 93 万册" },
                { year: "2025", text: "GIAC 全球互联网架构大会 2025 深圳站讲师" },
                { year: "2025", text: "破局AI行动家大会 2025 主会场分享嘉宾" },
                { year: "2015 – 2025", text: "腾讯 T11 · QQ 大技术五组负责人" },
                { year: "", text: "GMTC 全球大前端技术大会演讲嘉宾" },
                { year: "", text: "盖洛普优势：战略思考、责任感、成就导向" },
                { year: "本科", text: "西安交通大学 · 自动化科学与技术" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-4 sm:gap-8 py-4 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0"
                >
                  <span className="w-24 sm:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-400 dark:text-neutral-600 pt-0.5 text-right">
                    {m.year}
                  </span>
                  <span className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {m.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          03 — BOOK
      ———————————————————————————————————————————— */}
      <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-16 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                03
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                著作
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            >
              {/* Cover */}
              <div className="flex-shrink-0">
                <div className="relative w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-md overflow-hidden shadow-2xl dark:shadow-black/50 ring-1 ring-neutral-200 dark:ring-neutral-800">
                  <Image
                    src="/images/my-first-book.jpg"
                    alt="DeepSeek极简入门与应用"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
                  DeepSeek极简入门与应用
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  深入浅出地介绍 DeepSeek 大模型的入门知识与实际应用场景。面向 AI 爱好者与开发者，从零开始掌握 DeepSeek 的核心能力。
                </p>

                {/* Sales callout */}
                <div className="mb-10 border-l-2 border-amber-500 pl-5">
                  <span className="block text-5xl sm:text-6xl md:text-7xl font-bold font-mono text-neutral-900 dark:text-white tracking-tight leading-none">
                    93<span className="text-amber-500">万</span><span className="text-3xl sm:text-4xl md:text-5xl">册</span>
                  </span>
                  <span className="block text-sm text-neutral-500 mt-2">累计销量 · 京东有售</span>
                </div>

                <a
                  href="https://item.jd.com/14960026.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  京东购买
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          04 — OPEN SOURCE
      ———————————————————————————————————————————— */}
      <section className="py-24 bg-neutral-50 dark:bg-[#0d0d0d] border-t border-neutral-200 dark:border-neutral-800">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                开源贡献
              </h2>
            </motion.div>

            {/* Copilot callout */}
            <motion.a
              variants={fadeIn}
              href="https://github.com/mengjian-github/copilot-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 mb-8 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all bg-white dark:bg-white/[0.02]"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <FiGithub className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    逆向分析 GitHub Copilot
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  深入剖析 GitHub Copilot 的工作原理，揭示其背后的技术架构与实现机制
                </p>
              </div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono font-bold text-2xl flex-shrink-0">
                ★ 1000+
              </div>
            </motion.a>

            <motion.div variants={fadeIn}>
              <GitHubStats username="mengjian-github" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          05 — CONTACT & COMMUNITY
      ———————————————————————————————————————————— */}
      <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-16 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                05
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                联系 &amp; 社群
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* QR code */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                  公众号「孟健AI编程」
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                  3 万+ 粉丝 · 关注获取 AI 编程最新动态
                </p>
                <div className="inline-block rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
                  <Image
                    src="/images/wx.jpg"
                    alt="公众号二维码"
                    width={200}
                    height={200}
                    className="block"
                  />
                </div>
              </motion.div>

              {/* Links */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                  更多链接
                </h3>
                <nav className="space-y-4 mb-10">
                  {[
                    { label: "GitHub @mengjian-github", href: "https://github.com/mengjian-github", icon: <FiGithub className="w-4 h-4" /> },
                    { label: "知乎", href: "https://www.zhihu.com/people/meng-jian-39-32", icon: <SiZhihu className="w-4 h-4" /> },
                    { label: "掘金", href: "https://juejin.cn/user/4212984287073895", icon: <SiJuejin className="w-4 h-4" /> },
                    { label: "公众号文章", href: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog", icon: <FiMessageCircle className="w-4 h-4" /> },
                    { label: "京东购书", href: "https://item.jd.com/14960026.html", icon: <FiExternalLink className="w-4 h-4" /> },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                        {link.icon}
                      </span>
                      <span className="text-sm">{link.label}</span>
                      <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </nav>

                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  {[
                    { label: "关于我", href: "/about" },
                    { label: "所有项目", href: "/projects" },
                    { label: "联系方式", href: "/contact" },
                  ].map((nav) => (
                    <Link
                      key={nav.label}
                      href={nav.href}
                      className="text-sm text-neutral-400 hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-white transition-colors"
                    >
                      {nav.label} →
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
