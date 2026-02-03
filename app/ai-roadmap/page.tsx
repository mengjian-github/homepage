"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AIRoadmapPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeIn}
              className="text-xs tracking-[0.2em] uppercase text-amber-600/60 dark:text-amber-400/40 font-mono mb-6"
            >
              Exclusive Learning Path · 2025 Edition
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"
            >
              「健·行」AI 系统学习路线图
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl"
            >
              从入门到精通，与孟健老师一起拥抱 AI 时代
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StageCard
                number={1}
                title="AI 启蒙与认知建立"
                level="入门级"
                description="消除神秘感，建立基本认知"
                skillLevel={20}
                features={["AI基础", "DeepSeek", "信息检索"]}
                resource={{
                  type: "free",
                  name: "「健·行」AI 学习社群",
                  desc: "知识星球免费社群",
                  value: "精选资讯 · 入门教程 · 互动答疑",
                  url: "https://wx.zsxq.com/group/28882842528281",
                }}
                isAvailable
              />
              <StageCard
                number={2}
                title="提示词基本掌握"
                level="基础级"
                description="掌握提示词工程核心技巧"
                skillLevel={40}
                features={["提示词", "角色扮演", "思维链"]}
                resource={{
                  type: "paid",
                  name: "DeepSeek 小报童",
                  desc: "超值课程",
                  price: "¥10",
                  value: "30节图文 · 视频讲解 · 实战案例",
                  url: "https://xiaobot.net/post/bb7670c2-fbec-4b85-94d6-31b7c272cbce",
                }}
                isAvailable
              />
              <StageCard
                number={3}
                title="AI 工具实战体系"
                level="进阶级"
                description="构建个人 AI 工具体系"
                skillLevel={60}
                features={["多工具", "工作流", "知识库"]}
                resource={{
                  type: "paid",
                  name: "AI 学习陪伴社群",
                  desc: "核心社群",
                  price: "¥129",
                  value: "深度内容 · 专属答疑 · 直播分享",
                  url: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog",
                }}
                isAvailable
              />
              <StageCard
                number={4}
                title="AI 编程思维跃迁"
                level="高阶级"
                description="成为规则制定者"
                skillLevel={80}
                features={["Python", "API", "计算思维"]}
                resource={{
                  type: "paid",
                  name: "AI 编程训练营",
                  desc: "深度技能",
                  price: "¥1999",
                  value: "体系化实战 · 项目驱动 · 技能跃迁",
                  comingSoon: "2025年8月 即将上线",
                }}
                isAvailable={false}
              />
              <StageCard
                number={5}
                title="AI 价值创造者"
                level="专家级"
                description="创造者与赋能者"
                skillLevel={100}
                features={["应用开发", "模型训练", "价值创造"]}
                resource={{
                  type: "paid",
                  name: "私享会",
                  desc: "顶级服务",
                  price: "高客单",
                  value: "定制服务 · 项目咨询 · 战略赋能",
                  comingSoon: "敬请期待",
                }}
                isAvailable={false}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0d0d0d] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-10">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                开启您的 AI 学习之旅
              </h3>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                选择适合您的学习路径，与万千学员共同成长
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3">
              <CTAButton
                href="https://wx.zsxq.com/group/28882842528281"
                text="加入免费社群"
                isActive
              />
              <CTAButton
                href="https://xiaobot.net/post/bb7670c2-fbec-4b85-94d6-31b7c272cbce"
                text="小报童课程"
                isActive
              />
              <CTAButton
                href="https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog"
                text="陪伴社群"
                isActive
              />
              <CTAButton href="#" text="编程训练营" isActive={false} comingSoon="8月上线" />
              <CTAButton href="#" text="私享会" isActive={false} comingSoon="敬请期待" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ———— Stage Card ———— */

interface StageCardProps {
  number: number;
  title: string;
  level: string;
  description: string;
  skillLevel: number;
  features: string[];
  resource: {
    type: "free" | "paid";
    name: string;
    desc: string;
    price?: string;
    url?: string;
    value: string;
    comingSoon?: string;
  };
  isAvailable: boolean;
}

function StageCard({
  number,
  title,
  level,
  description,
  skillLevel,
  features,
  resource,
  isAvailable,
}: StageCardProps) {
  const handleClick = () => {
    if (isAvailable && resource.url) window.open(resource.url, "_blank");
  };

  return (
    <motion.div
      variants={fadeIn}
      onClick={handleClick}
      className={`group relative p-6 rounded-lg border transition-all duration-300 flex flex-col ${
        isAvailable
          ? "border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/[0.02]"
          : "border-neutral-200 dark:border-neutral-800/60 opacity-70 cursor-default"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-xs font-mono tracking-wider ${
            isAvailable
              ? "text-amber-600 dark:text-amber-400/60"
              : "text-neutral-400 dark:text-neutral-600"
          }`}
        >
          STEP {number}
        </span>
        <span
          className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded font-mono ${
            isAvailable
              ? "bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400"
              : "bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-600"
          }`}
        >
          {level}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
        {description}
      </p>

      {/* Skill bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-neutral-400 dark:text-neutral-600 font-mono">
            技能掌握
          </span>
          <span
            className={`text-[10px] font-mono font-bold ${
              isAvailable
                ? "text-amber-600 dark:text-amber-400"
                : "text-neutral-400 dark:text-neutral-600"
            }`}
          >
            {skillLevel}%
          </span>
        </div>
        <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              isAvailable ? "bg-amber-500 dark:bg-amber-400" : "bg-neutral-400 dark:bg-neutral-700"
            }`}
            style={{ width: `${skillLevel}%` }}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {features.map((f, i) => (
          <span
            key={i}
            className={`px-2 py-0.5 text-[10px] font-mono tracking-wide rounded border ${
              isAvailable
                ? "bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-500 border-neutral-200 dark:border-neutral-800"
                : "bg-neutral-100 dark:bg-white/[0.02] text-neutral-400 dark:text-neutral-600 border-neutral-200 dark:border-neutral-800/60"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Resource */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 mt-auto">
        {resource.comingSoon ? (
          <div className="text-center py-2">
            <span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono">
              {resource.comingSoon}
            </span>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                  resource.type === "free"
                    ? "bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400"
                    : "bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400"
                }`}
              >
                {resource.type === "free" ? "免费" : resource.price}
              </span>
              <span className="text-sm font-medium text-neutral-900 dark:text-white">
                {resource.name}
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-500">
              {resource.value}
            </p>
            {isAvailable && (
              <div className="mt-2.5">
                <span className="inline-flex items-center text-xs font-mono text-neutral-400 dark:text-neutral-600 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  查看详情 →
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ———— CTA Button ———— */

interface CTAButtonProps {
  href: string;
  text: string;
  isActive: boolean;
  comingSoon?: string;
}

function CTAButton({ href, text, isActive, comingSoon }: CTAButtonProps) {
  if (!isActive) {
    return (
      <div className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium border border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed">
        {text}
        {comingSoon && (
          <span className="ml-1.5 text-xs opacity-60">({comingSoon})</span>
        )}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
    >
      {text}
    </a>
  );
}
