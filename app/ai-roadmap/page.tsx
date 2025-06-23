'use client';

import { useEffect, useState } from 'react';

export default function AIRoadmapPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* 高级背景装饰 */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-7xl">
          {/* 主卡片 - 增强质感 */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            {/* 头部 - 尊贵的黑金配色 */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-white p-16 text-center overflow-hidden">
              {/* 金色光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

              <div className="relative z-10">
                <div className="text-amber-400/80 text-sm font-medium tracking-widest mb-4">EXCLUSIVE LEARNING PATH</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                  「健·行」AI 系统学习路线图
                </h1>
                <p className="text-xl md:text-2xl opacity-90 font-light">
                  从入门到精通，与孟健老师一起拥抱 AI 时代
                </p>
                <div className="mt-4 text-amber-400/60 text-sm">2025 EDITION</div>
              </div>
            </div>

            {/* 内容区域 - 优化排版 */}
            <div className="p-8 md:p-16 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-950/50 dark:to-gray-900/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
                {/* 优雅的连接线 */}
                <div className="hidden lg:block absolute top-[45%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

                {/* 阶段卡片 */}
                <StageCard
                  number={1}
                  icon="🎯"
                  title="AI 启蒙与认知建立"
                  level="入门级"
                  description="消除神秘感，建立基本认知"
                  skillLevel={20}
                  features={["AI基础", "DeepSeek", "信息检索"]}
                  resources={[{
                    type: "free",
                    name: "「健·行」AI 学习社群",
                    description: "知识星球免费社群",
                    url: "https://wx.zsxq.com/group/28882842528281",
                    value: "精选资讯 · 入门教程 · 互动答疑"
                  }]}
                  isClickable={true}
                  isAvailable={true}
                />

                <StageCard
                  number={2}
                  icon="🚀"
                  title="提示词基本掌握"
                  level="基础级"
                  description="掌握提示词工程核心技巧"
                  skillLevel={40}
                  features={["提示词", "角色扮演", "思维链"]}
                  resources={[{
                    type: "paid",
                    name: "DeepSeek 小报童",
                    description: "超值课程",
                    price: "¥10",
                    url: "https://xiaobot.net/post/bb7670c2-fbec-4b85-94d6-31b7c272cbce",
                    value: "30节图文 · 视频讲解 · 实战案例"
                  }]}
                  isClickable={true}
                  isAvailable={true}
                />

                <StageCard
                  number={3}
                  icon="🛠️"
                  title="AI 工具实战体系"
                  level="进阶级"
                  description="构建个人AI工具体系"
                  skillLevel={60}
                  features={["多工具", "工作流", "知识库"]}
                  resources={[{
                    type: "paid",
                    name: "AI 学习陪伴社群",
                    description: "核心社群",
                    price: "¥129",
                    url: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog",
                    value: "深度内容 · 专属答疑 · 直播分享"
                  }]}
                  isClickable={true}
                  isAvailable={true}
                />

                <StageCard
                  number={4}
                  icon="💻"
                  title="AI 编程思维跃迁"
                  level="高阶级"
                  description="成为规则制定者"
                  skillLevel={80}
                  features={["Python", "API", "计算思维"]}
                  resources={[
                    {
                      type: "paid",
                      name: "AI 编程训练营",
                      description: "深度技能",
                      price: "¥1999",
                      value: "体系化实战 · 项目驱动 · 技能跃迁",
                      comingSoon: "2025年8月 即将上线"
                    }
                  ]}
                  isClickable={false}
                  isAvailable={false}
                />

                <StageCard
                  number={5}
                  icon="👑"
                  title="AI 价值创造者"
                  level="专家级"
                  description="创造者与赋能者"
                  skillLevel={100}
                  features={["应用开发", "模型训练", "价值创造"]}
                  resources={[
                    {
                      type: "paid",
                      name: "私享会",
                      description: "顶级服务",
                      price: "高客单",
                      value: "定制服务 · 项目咨询 · 战略赋能",
                      comingSoon: "敬请期待"
                    }
                  ]}
                  isClickable={false}
                  isAvailable={false}
                />
              </div>
            </div>

            {/* 底部 - 尊贵的行动区域 */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black p-12">
              <div className="text-center mb-8">
                <h3 className="text-white text-2xl font-bold mb-2">开启您的 AI 学习之旅</h3>
                <p className="text-gray-400">选择适合您的学习路径，与万千学员共同成长</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton href="https://wx.zsxq.com/group/28882842528281" text="加入免费社群" isActive={true} />
                <CTAButton href="https://xiaobot.net/post/bb7670c2-fbec-4b85-94d6-31b7c272cbce" text="小报童课程" isActive={true} />
                <CTAButton href="https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog" text="陪伴社群" isActive={true} />
                <CTAButton href="#" text="编程训练营" isActive={false} comingSoon="8月上线" />
                <CTAButton href="#" text="私享会" isActive={false} comingSoon="敬请期待" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StageCardProps {
  number: number;
  icon: string;
  title: string;
  level: string;
  description: string;
  skillLevel: number;
  features: string[];
  resources: Array<{
    type: 'free' | 'paid';
    name: string;
    description: string;
    price?: string;
    url?: string;
    value: string;
    comingSoon?: string;
  }>;
  isClickable: boolean;
  isAvailable: boolean;
}

function StageCard({
  number,
  icon,
  title,
  level,
  description,
  skillLevel,
  features,
  resources,
  isClickable,
  isAvailable
}: StageCardProps) {
  const handleCardClick = () => {
    if (isClickable && isAvailable && resources[0]?.url) {
      window.open(resources[0].url, '_blank');
    }
  };

  return (
    <div
      className={`group relative ${
        isAvailable
          ? 'bg-white dark:bg-gray-900 hover:shadow-2xl'
          : 'bg-gray-50 dark:bg-gray-900/50'
      } rounded-2xl overflow-hidden transition-all duration-500 ${
        isAvailable ? 'hover:scale-105 hover:-translate-y-2' : ''
      } shadow-xl border border-gray-200 dark:border-gray-800 ${
        isClickable && isAvailable ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={handleCardClick}
    >
      {/* 顶部渐变条 */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        isAvailable
          ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
          : 'bg-gray-300 dark:bg-gray-700'
      }`}></div>

      {/* 卡片内容 */}
      <div className="p-6">
        {/* 头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
            isAvailable
              ? 'bg-gradient-to-br from-purple-500 to-indigo-600'
              : 'bg-gray-300 dark:bg-gray-700'
          } ${!isAvailable ? 'grayscale' : ''}`}>
            {icon}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            isAvailable
              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
          }`}>
            STEP {number}
          </div>
        </div>

        {/* 标题和描述 */}
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{title}</h3>
        <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-3 ${
          isAvailable
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
        }`}>
          {level}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        {/* 技能进度 */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500 dark:text-gray-500">技能掌握</span>
            <span className={`text-xs font-bold ${
              isAvailable ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500'
            }`}>{skillLevel}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1500 ease-out ${
                isAvailable
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
                  : 'bg-gray-400'
              }`}
              style={{ width: `${skillLevel}%` }}
            />
          </div>
        </div>

        {/* 核心技能标签 */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.map((feature, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-md text-xs font-medium ${
                isAvailable
                  ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
              }`}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 资源信息 */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          {resources.map((resource, index) => (
            <div key={index}>
              {resource.comingSoon ? (
                <div className="text-center py-3">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <span className="text-sm font-medium">{resource.comingSoon}</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        resource.type === 'free'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      }`}>
                        {resource.type === 'free' ? '免费' : resource.price}
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                        {resource.name}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{resource.description}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{resource.value}</p>
                  {isClickable && isAvailable && (
                    <div className="mt-3 text-center">
                      <span className="inline-flex items-center text-xs font-medium text-purple-600 dark:text-purple-400">
                        查看详情 →
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CTAButtonProps {
  href: string;
  text: string;
  isActive: boolean;
  comingSoon?: string;
}

function CTAButton({ href, text, isActive, comingSoon }: CTAButtonProps) {
  if (!isActive) {
    return (
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-700 text-gray-400 font-medium cursor-not-allowed">
        <span>{text}</span>
        {comingSoon && (
          <span className="ml-2 text-xs opacity-70">({comingSoon})</span>
        )}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <span>{text}</span>
    </a>
  );
}
