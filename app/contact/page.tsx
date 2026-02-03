"use client";

import {
  FiGithub,
  FiMessageCircle,
  FiMail,
  FiLink,
  FiArrowRight,
} from "react-icons/fi";
import { SiZhihu, SiJuejin } from "react-icons/si";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const contactMethods = [
  {
    icon: <FiMessageCircle className="h-5 w-5" />,
    title: "微信公众号",
    description: "关注「孟健AI编程」，获取最新技术资讯和原创文章",
    action: "关注公众号",
    link: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog",
  },
  {
    icon: <FiMail className="h-5 w-5" />,
    title: "微信",
    description: "我的微信号：mjcoding3",
    action: "添加微信",
    link: null,
  },
  {
    icon: <SiZhihu className="h-5 w-5" />,
    title: "知乎",
    description: "关注我在知乎上的技术分享和行业思考",
    action: "访问知乎",
    link: "https://www.zhihu.com/people/meng-jian-39-32",
  },
  {
    icon: <SiJuejin className="h-5 w-5" />,
    title: "掘金",
    description: "阅读我在掘金平台发布的技术文章",
    action: "访问掘金",
    link: "https://juejin.cn/user/4212984287073895",
  },
  {
    icon: <FiGithub className="h-5 w-5" />,
    title: "GitHub",
    description: "查看我的开源项目和代码贡献",
    action: "访问 GitHub",
    link: "https://github.com/mengjian-github",
  },
  {
    icon: <FiLink className="h-5 w-5" />,
    title: "AI 编程陪伴群",
    description: "加入我的 AI 编程陪伴群，与志同道合的开发者交流学习",
    action: "加入社区",
    link: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog",
  },
];

export default function ContactPage() {
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
              Contact
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"
            >
              联系方式
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl"
            >
              通过以下方式与我取得联系，期待与您交流
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4 text-neutral-400 dark:text-neutral-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {method.icon}
                  </div>

                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {method.title}
                  </h2>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed flex-grow">
                    {method.description}
                  </p>

                  {method.link ? (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      {method.action}
                      <FiArrowRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 px-4 py-2.5 bg-neutral-100 dark:bg-white/[0.05] rounded-md text-center border border-neutral-200 dark:border-neutral-800">
                      {method.action}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-12 flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono">
                ✦
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                留言与合作
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-white/[0.02]"
            >
              <p className="text-lg font-medium text-neutral-900 dark:text-white mb-3">
                欢迎添加我的微信：mjcoding3
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                如果您有合作项目、演讲邀请或其他事宜，请在添加时注明来意，我会尽快回复您。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
