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
    name: "ShipSolo",
    domain: "shipsolo.cn",
    url: "https://shipsolo.cn",
    desc: "AI 编程出海领航",
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

const influenceShots = [
  {
    src: "/assets/influence/speaking-shenzhen.jpg",
    alt: "孟健在 AI 破局行动家大会主会场演讲",
    caption: "破局行动家大会 · 主会场",
  },
  {
    src: "/assets/influence/award-wenquxing.jpg",
    alt: "AI 破局行动家大会授予孟健AI编程破局文曲星",
    caption: "破局文曲星 · 深圳 2025.12",
  },
  {
    src: "/assets/influence/award-trae-bowen.jpg",
    alt: "TRAE 年度社区影响力奖与博文视点 2025 年度优秀作者",
    caption: "TRAE 影响力奖 · 博文视点",
  },
  {
    src: "/assets/influence/cert-gdec-judge.jpg",
    alt: "2025 GDEC · CSDN 代码生成分赛道评委聘书",
    caption: "GDEC / CSDN 评委聘书 · 2025.10",
  },
  {
    src: "/assets/influence/poster-openclaw-share.jpg",
    alt: "OpenClaw 华语区实战分享会嘉宾海报，孟健的身份是 AI 出海创业者",
    caption: "OpenClaw 华语区 · 实战分享",
  },
];

type InfluenceItem = {
  kicker: string;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
};

const influenceItems: InfluenceItem[] = [
  {
    kicker: "播客",
    title: "小宇宙《浪说》",
    text: "嘉宾对谈，主题是「腾讯到字节：AI 时代前端工程师孟健的突围」。",
    href: "https://www.xiaoyuzhoufm.com/episode/67e2c9b0a3dfefa31f12fbb3",
    linkLabel: "收听这期",
  },
  {
    kicker: "社区",
    title: "首批 TRAE Expert",
    text: "TRAE 团队正式邀请加入首批 TRAE Expert，并获得 TRAE Achievement Award 2025 年度社区影响力奖。",
  },
  {
    kicker: "出版",
    title: "博文视点 2025 优秀作者",
    text: "电子工业出版社博文视点授予 2025 年度优秀作者。",
  },
  {
    kicker: "奖项",
    title: "破局文曲星",
    text: "AI 破局行动家大会把「破局文曲星」授予「孟健AI编程」。深圳，2025.12.27–28。",
  },
  {
    kicker: "评委",
    title: "CSDN / GDEC 代码生成赛道评委",
    text: "2025 全球数字经济创新大赛 · AIGC 创作大赛 · 代码生成-CSDN 分赛道评委（GDEC / CSDN）。2025 年 10 月获聘，评审团与蒋涛等并列。",
  },
  {
    kicker: "教练",
    title: "破局精英教练",
    text: "破局行动第 09 期授予精英教练。破局俱乐部，2026 年 1 月。",
  },
  {
    kicker: "演讲",
    title: "破局上海 / 深圳",
    text: "AI 破局行动家交流会上海站嘉宾，分享 AI 时代的个人 IP 与副业；深圳主会场登台，席卡身份是 AI 编程出海创业者（2025.12.27–28）。",
  },
  {
    kicker: "演讲",
    title: "TRAE Shanghai · MCP 深度实践",
    text: "嘉宾分享「MCP 深度实践：解锁沉浸式 AI 编程体验」。2025-09-06，上海杨浦。",
  },
  {
    kicker: "分享",
    title: "OpenClaw 华语区实战分享",
    text: "「龙虾养殖手册」实战分享会嘉宾，身份为 AI 出海创业者。北京时间 3 月 5 日晚 8 点。",
  },
  {
    kicker: "邀约",
    title: "掘金 Coffee Talk 杭州 #001",
    text: "稀土掘金 X-Lab Coffee Talk 诚邀嘉宾。2026-11-07，西湖科学咖啡。",
    href: "https://juejin.cn/activity/hangzhouxlab01",
    linkLabel: "活动页",
  },
];

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "孟健",
    jobTitle: "AI 编程创业者 / 出海产品实践者 / 技术作者与演讲者",
    description:
      "前腾讯 T11 | 前字节跳动 3-1 | Nextfield Labs LLC 创始人 | 《DeepSeek极简入门与应用》突破百万册 | 首批 TRAE Expert | 公众号「孟健AI编程」",
    url: "https://mengjian.site",
    sameAs: [
      "https://github.com/mengjian-github",
      "https://www.zhihu.com/people/meng-jian-39-32",
      "https://juejin.cn/user/4212984287073895",
    ],
    knowsAbout: [
      "AI编程",
      "出海产品",
      "React",
      "Next.js",
      "TypeScript",
      "SEO",
      "MCP",
      "DeepSeek",
      "技术写作",
    ],
    award: [
      "《DeepSeek极简入门与应用》突破百万册",
      "首批 TRAE Expert",
      "TRAE Achievement Award 2025 年度社区影响力奖",
      "电子工业出版社博文视点 2025 年度优秀作者",
      "AI破局行动家大会 破局文曲星",
      "2025 GDEC · AIGC 代码生成-CSDN 分赛道评委",
      "破局行动第09期精英教练",
    ],
    subjectOf: {
      "@type": "PodcastEpisode",
      name: "腾讯到字节:AI时代前端工程师孟健的突围",
      url: "https://www.xiaoyuzhoufm.com/episode/67e2c9b0a3dfefa31f12fbb3",
      partOfSeries: {
        "@type": "PodcastSeries",
        name: "浪说播客",
      },
    },
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
            Ex-Tencent T11 · Ex-ByteDance 3-1 · Nextfield Labs LLC · Est. 2025
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
            AI 编程创业者
            <span className="text-neutral-300 dark:text-neutral-700 mx-3">/</span>
            出海产品实践者
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
              { num: "100万+", unit: "册", label: "《DeepSeek极简入门与应用》\n突破百万" },
              { num: "3万+", unit: "", label: "公众号粉丝" },
              { num: "30+", unit: "", label: "产品 / 站点实践" },
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
                <span className="block text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mt-1 tracking-wide whitespace-pre-line">
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
          {/* Lead magnet — X / 各平台主页链接点进来的人，第一屏就能领资料、加微信 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 max-w-3xl rounded-2xl border border-amber-500/30 bg-amber-50/60 dark:bg-amber-400/5 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center"
          >
            <img
              src="/images/wechat-qr.png"
              alt="孟健的微信二维码 mjcoding3"
              width={140}
              height={140}
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg bg-white p-1 shrink-0 self-center"
            />
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 font-mono">Free · 免费领取</p>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">AI 入门三件套</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                01 2026 年 AI 小白入门学习路线图 · 02 OpenClaw 私人助理资料包（152 页） · 03 Hermes Agent 实战资料包（160 页）
              </p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                扫码加微信 <span className="font-mono font-semibold">mjcoding3</span>，备注「资料」，三份 PDF 直接发你；学 AI 卡住了也可以直接问我。
              </p>
              <a
                href="https://pan.baidu.com/s/1G23yr-9LX3R6kRwPtSXWKw?pwd=r7xz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline"
              >
                不想加微信？网盘直接下载（提取码 r7xz） <FiArrowRight />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint sits in flow so it does not cover the lead card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
          className="relative z-10 pb-10 pt-6"
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
          02 — SPEAKING & HONORS
      ———————————————————————————————————————————— */}
      <section
        id="influence"
        className="py-24 bg-neutral-50 dark:bg-[#0d0d0d] border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-6 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                02
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                演讲与荣誉
              </h2>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="max-w-3xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12"
            >
              出版、社区和台上的公开记录。书的销量只记突破百万册；其余是播客、奖项、评委聘任，以及已经发生或已经确认的分享。
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
            >
              {influenceShots.map((shot) => (
                <figure key={shot.src} className="min-w-0">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-neutral-500 dark:text-neutral-500 leading-snug">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {influenceItems.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeIn}
                  className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-white/[0.03]"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-amber-700 dark:text-amber-400">
                    {item.kicker}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.text}
                  </p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      {item.linkLabel}
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>

            <motion.p
              variants={fadeIn}
              className="mt-8 text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed"
            >
              另：哥飞的朋友们 2025 年度网站比赛第 15 名，荣誉称号「中流砥柱·坚实力量」（2026-01-07）。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          03 — ACHIEVEMENTS & CAREER
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
                { year: "2024 – 2025.10", text: "字节跳动 Flow 部门 · 前端技术 Leader（3-1），负责猫箱 BagelBell —— AI 角色创建与互动平台" },
                { year: "2025", text: "《DeepSeek极简入门与应用》突破百万册，个人品牌从技术负责人升级为技术作者与创业者" },
                { year: "2025", text: "GIAC 全球互联网架构大会 2025 深圳站讲师" },
                { year: "2025", text: "破局AI行动家大会 2025 主会场分享嘉宾" },
                { year: "2015 – 2024", text: "腾讯 T11 · QQ 大技术五组负责人" },
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
          04 — BOOK
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
                04
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                著作 / 出版
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start"
            >
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-white/[0.02]">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative w-40 sm:w-44 aspect-[3/4] rounded-md overflow-hidden shadow-2xl dark:shadow-black/50 ring-1 ring-neutral-200 dark:ring-neutral-800">
                      <Image
                        src="/images/my-first-book.jpg"
                        alt="DeepSeek极简入门与应用"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
                      DeepSeek极简入门与应用
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">
                      代表作。围绕 AI 工具与大模型应用，发行已突破百万册，用来承接个人品牌里的技术作者身份。
                    </p>
                    <div className="mb-6 border-l-2 border-amber-500 pl-4">
                      <span className="block text-4xl sm:text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-tight leading-none">
                        100万<span className="text-amber-500">+</span>
                      </span>
                      <span className="block text-sm text-neutral-500 mt-2">突破百万册 · 京东有售</span>
                    </div>
                    <a
                      href="https://item.jd.com/14960026.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      京东购买
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-white/[0.02]">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative w-40 sm:w-44 aspect-[3/4] rounded-md overflow-hidden shadow-xl dark:shadow-black/40 ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                      <Image
                        src="/images/openclaw-book-poster.jpg"
                        alt="OpenClaw极简入门与应用"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
                      OpenClaw极简入门与应用
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">
                      出版方向延伸到 AI 助手与个人智能工作流，帮助一线开发者和创作者用更低门槛搭建自己的 AI 协作系统。
                    </p>
                    <div className="mb-6 border-l-2 border-amber-500 pl-4">
                      <span className="block text-4xl sm:text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-tight leading-none">
                        新<span className="text-amber-500">书</span><span className="text-2xl sm:text-3xl">已出</span>
                      </span>
                      <span className="block text-sm text-neutral-500 mt-2">AI 助手 / 工作流 / 团队协作主题</span>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">
                      这本书会让你的个人品牌叙事更完整：从 AI 大模型应用，延伸到 AI 助手、自动化工作流和个人 / 小团队的生产力升级。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          05 — OPEN SOURCE
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
                05
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
                ★ 2200+
              </div>
            </motion.a>

            {/* OpenClaw 101 */}
            <motion.a
              variants={fadeIn}
              href="https://github.com/mengjian-github/openclaw101"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 mb-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all bg-white dark:bg-white/[0.02]"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <FiGithub className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    OpenClaw 101
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  从零开始 7 天掌握 AI 私人助理，全网资源聚合站
                </p>
              </div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono font-bold text-2xl flex-shrink-0">
                ★ 2500+
              </div>
            </motion.a>

            {/* 小墨 Starter Kit */}
            <motion.a
              variants={fadeIn}
              href="https://github.com/mengjian-github/xiaomo-starter-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 mb-8 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all bg-white dark:bg-white/[0.02]"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <FiGithub className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    小墨 Starter Kit
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  OpenClaw 中文 AI 助手模板，5 分钟拥有你的 AI 私人助手
                </p>
              </div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono font-bold text-2xl flex-shrink-0">
                ★ 340+
              </div>
            </motion.a>

            <motion.div variants={fadeIn}>
              <GitHubStats username="mengjian-github" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ————————————————————————————————————————————
          06 — CONTACT & COMMUNITY
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
                06
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
                    { label: "小宇宙《浪说》", href: "https://www.xiaoyuzhoufm.com/episode/67e2c9b0a3dfefa31f12fbb3", icon: <FiExternalLink className="w-4 h-4" /> },
                    { label: "京东购书", href: "https://item.jd.com/14960026.html", icon: <FiExternalLink className="w-4 h-4" /> },
                    { label: "友链 · 吴少峰", href: "https://www.wushaofengai.com", icon: <FiExternalLink className="w-4 h-4" /> },
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
