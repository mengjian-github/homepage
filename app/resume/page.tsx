"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMessageCircle, FiMail, FiLink, FiDownload } from "react-icons/fi";
import { SiZhihu, SiJuejin, SiWechat } from "react-icons/si";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import DownloadResumeButton from '@/app/components/DownloadResumeButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">个人简历</h1>
          <DownloadResumeButton />
        </div>
        
        {/* 头部个人信息 */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="relative w-40 h-40 mx-auto mb-8"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 dark:opacity-40 animate-pulse-slow"></div>
            <div className="relative rounded-full overflow-hidden w-full h-full border-2 border-white dark:border-gray-800">
              <Image
                src="/images/avatar.png"
                alt="孟健的照片"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold mb-4"
          >
            孟健
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Flow-Parallel 前端团队负责人 | 豆包Marscode官方讲师 | 技术作家
          </motion.p>
        </motion.div>

        {/* 主要内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧栏 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* 联系方式 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                联系方式
              </h2>
              <div className="space-y-4">
                <a href="https://mengjian.site" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FiLink className="mr-2" />
                  mengjian.site
                </a>
                <a href="https://github.com/mengjian-github" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FiGithub className="mr-2" />
                  GitHub
                </a>
                <a href="https://www.zhihu.com/people/meng-jian-39-32" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <SiZhihu className="mr-2" />
                  知乎
                </a>
                <a href="https://juejin.cn/user/4212984287073895" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <SiJuejin className="mr-2" />
                  掘金
                </a>
                <button 
                  onClick={() => window.alert('微信号：mjcoding')}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
                >
                  <SiWechat className="mr-2" />
                  微信：mjcoding
                </button>
              </div>
            </div>

            {/* 技术专长 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                技术专长
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">前端开发</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Vue</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Electron</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI 技术融合</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">D2C</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">P2C</span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Copilot</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">MCP</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">DeepSeek</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 教育背景 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                教育背景
              </h2>
              <div className="space-y-2">
                <h3 className="font-semibold">西安交通大学</h3>
                <p className="text-gray-600 dark:text-gray-300">自动化科学与技术 · 本科</p>
                <p className="text-gray-500 dark:text-gray-400">2012 - 2016</p>
              </div>
            </div>
          </motion.div>

          {/* 右侧主要内容 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* 工作经历 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                工作经历
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-bold text-lg">字节跳动</h3>
                  <p className="text-gray-600 dark:text-gray-300">Flow-Parallel 前端团队负责人</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2024 - 至今</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>负责猫箱AI产品的研发工作</li>
                    <li>担任豆包Marscode官方讲师</li>
                    <li>致力于推动 AI 与前端技术融合发展</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-bold text-lg">腾讯</h3>
                  <p className="text-gray-600 dark:text-gray-300">QQ 大前端五组负责人（T11）</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2022.12 - 2023</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>负责 QQ 群基础、QQ 群视频等多个核心业务</li>
                    <li>负责大前端 AI 方向建设落地，整体提效 30%以上</li>
                    <li>建设智能代码生成平台 Ultron Smartcode</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-bold text-lg">腾讯</h3>
                  <p className="text-gray-600 dark:text-gray-300">腾讯课堂运营前端负责人</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2018.03 - 2022.11</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>负责课堂 C 侧业务的前端预审、技术方案</li>
                    <li>多端实现拉通优化，涉及 PC、H5、APP 等</li>
                    <li>负责部门研发效能建设</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-bold text-lg">腾讯</h3>
                  <p className="text-gray-600 dark:text-gray-300">厘米秀前端开发</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2016.07 - 2018.03</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>负责厘米秀团队前端开发工作</li>
                    <li>转岗腾讯课堂，离开团队时绩效考核 4 星</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 著作与出版 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                著作与出版
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-bold mb-2">《DeepSeek极简入门与应用》</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">出版书籍</p>
                  <p className="text-green-600 dark:text-green-400">全网销量突破50万册</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-bold mb-2">《React 源码全解》</h3>
                  <p className="text-gray-600 dark:text-gray-300">开源电子书</p>
                  <p className="text-gray-500 dark:text-gray-400">深入解析React源码</p>
                </div>
              </div>
            </div>

            {/* 项目经历 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                重点项目
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">AI 大前端落地专项</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2022.06 - 2023</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>基于 PB 解析与 TDesign 场景化抽象，构建智能后台 P2C 方案</li>
                    <li>对于有设计稿的业务场景，搭建整套 D2C 方案，开发 Figma 插件</li>
                    <li>D2C 对标业界的 locofy、codefun 等产品，目前还原度已达到 95%以上</li>
                    <li>P2C 和 D2C 已经落地到整个 QQ 团队的前端业务开发中</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">QQ NT 版本性能优化专项</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2022.03 - 2022.05</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>负责 QQ 启动性能优化、图片查看器大图性能优化的相关工作</li>
                    <li>对 QQ 启动流程做了单文件打包、异步拆包等优化工作</li>
                    <li>对托盘图标进行了内存性能优化，对图片查看器使用高精度图片进行 canvas 渲染</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">前端统一监控看板项目</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2021.09 - 2022.03</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>独立部署 Grafana 镜像，打通内部权限系统</li>
                    <li>前端集成 lmlog-aegis 方案，中转打通 RUM 上报监控 API</li>
                    <li>建立业务统一看板，包含业务测速、白屏、性能资源等监控</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 荣誉奖项 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                荣誉奖项
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">公司荣誉</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>前端工程化 Teflow Oteam PMC</li>
                    <li>智能代码生成 TIC Oteam PMC</li>
                    <li>获得十二项公司级荣誉，3 项专业级荣誉</li>
                    <li>KM 技术文章 7 级影响力，7 篇技术文章获 KM 总榜</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">业界影响力</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>逆向分析 Copilot（Github 已获得上千 star）</li>
                    <li>GMTC 全球大前端技术大会演讲嘉宾</li>
                    <li>开源书籍《React 源码全解》作者</li>
                    <li>知乎前端话题高赞回答者</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 