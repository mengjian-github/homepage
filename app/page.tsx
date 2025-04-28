"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiMessageCircle } from "react-icons/fi";
import { SiZhihu, SiJuejin } from "react-icons/si";
import JsonLd from "./components/JsonLd";
import GitHubStats from "./components/GitHubStats";
import { motion } from "framer-motion";

// 动画变体
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "孟健",
    "jobTitle": "前端开发专家，豆包Marscode官方讲师，技术作家",
    "description": "10年+前端开发经验，Flow-Parallel前端团队负责人，《DeepSeek极简入门与应用》作者（销量突破60万册）",
    "url": "https://mengjian.dev",
    "sameAs": [
      "https://github.com/mengjian-github",
      "https://www.zhihu.com/people/meng-jian-39-32",
      "https://juejin.cn/user/4212984287073895"
    ],
    "knowsAbout": ["前端开发", "React", "Next.js", "TypeScript", "AI", "D2C", "DeepSeek"]
  };

  return (
    <div className="relative overflow-hidden">
      <JsonLd data={personSchema} />
      
      {/* 现代化渐变背景 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* 精致装饰图案 */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'url("/images/pattern-grid.svg")', backgroundSize: '30px 30px' }}></div>
      
      {/* 更精致的背景效果 */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute -bottom-16 right-1/3 w-80 h-80 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* 英雄区域 */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 md:pt-32 md:pb-24 relative"
      >
        {/* 头图上方轻微波浪装饰 */}
        <div className="absolute top-0 inset-x-0 -z-5 h-20 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute h-20 w-full text-blue-100 dark:text-blue-900 opacity-20">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <motion.h1 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                <span className="block">你好，我是</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">孟健</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              >
                10年+前端开发经验，专注于大型互联网产品研发与技术。
                目前担任 Flow-Parallel 前端团队负责人，致力于推动 AI 与前端技术融合发展。
                同时也是<a href="https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">豆包Marscode官方讲师</a>，
                以及《DeepSeek极简入门与应用》一书的作者（销量已突破60万册）。
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Link
                  href="/about"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  了解更多
                  <FiArrowRight className="animate-pulse" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  联系我
                </Link>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
                className="flex justify-center md:justify-start space-x-6"
              >
                <a 
                  href="https://github.com/mengjian-github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.zhihu.com/people/meng-jian-39-32" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <SiZhihu className="w-6 h-6" />
                </a>
                <a 
                  href="https://juejin.cn/user/4212984287073895" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <SiJuejin className="w-6 h-6" />
                </a>
                <a 
                  href="https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <FiMessageCircle className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-all duration-300"
            >
              {/* 头像光晕效果 */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 dark:opacity-40 animate-pulse-slow"></div>
              <div className="relative rounded-full overflow-hidden w-full h-full border-2 border-white dark:border-gray-800">
                <Image
                  src="/images/avatar.png"
                  alt="孟健的照片"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 底部装饰波浪 */}
        <div className="absolute bottom-0 inset-x-0 -z-5 h-16 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 h-16 w-full text-white dark:text-gray-900">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V92.83C79.86,98.12,165.86,89.61,237.5,68.18,320.23,43.88,394.73,8.59,477.49,5.47,550.51,2.68,623.11,20,694,58,750.16,87.66,802.39,98,851.92,93.72,936,84.86,1027.5,28.19,1099.37,4.65,1143.14-8.82,1197.72,13.75,1200,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </motion.section>
      
      {/* 技术栈区域 */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
            >
              核心技能
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              深厚的前端技术积累和全栈开发经验
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">前端开发</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">精通 React、Vue、TypeScript 等现代前端技术栈，有大型应用架构设计经验。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm shadow-sm">React</span>
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm shadow-sm">Vue</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm shadow-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-sm shadow-sm">Next.js</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AI 技术融合</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">深入研究 AI 与前端技术融合，专注 D2C、Copilot 等前沿技术。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm shadow-sm">D2C</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full text-sm shadow-sm">GitHub Copilot</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm shadow-sm">智能代码生成</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">团队管理</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">丰富的技术团队管理经验，善于规划技术方向和推动团队创新。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm shadow-sm">技术规划</span>
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm shadow-sm">团队建设</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-sm shadow-sm">项目管理</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* GitHub 贡献统计 */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              GitHub 贡献
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              我的开源贡献记录
            </motion.p>
          </div>
          
          <GitHubStats username="mengjian-github" />
        </div>
      </motion.section>
      
      {/* 项目作品区域 */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              精选项目
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              我的部分开源项目和技术作品
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8 relative">
                {/* 装饰元素 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-bl-full -z-0 opacity-70"></div>
                
                {/* 项目图标 */}
                <div className="relative z-10 mb-6 w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white relative z-10">飞书文档转公众号排版工具</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 relative z-10">一个便捷的工具，帮助用户将飞书文档转换为适合公众号的排版格式。深受内容创作者喜爱的实用工具。</p>
                
                <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm shadow-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm">实用工具</span>
                </div>
                
                <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <span className="flex h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">活跃项目</span>
                  </div>
                  <a 
                    href="https://lark-to-markdown.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center group"
                  >
                    查看项目 
                    <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8 relative">
                {/* 装饰元素 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent dark:from-purple-900/20 dark:to-transparent rounded-bl-full -z-0 opacity-70"></div>
                
                {/* 项目图标 */}
                <div className="relative z-10 mb-6 w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white relative z-10">逆向分析 GitHub Copilot</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 relative z-10">深入剖析 GitHub Copilot 的工作原理，揭示其背后的技术架构与实现机制。该项目获得上千 star 的开源项目。</p>
                
                <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-sm">逆向工程</span>
                </div>
                
                <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-[10px] font-bold text-white ring-2 ring-white">★</span>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-[10px] font-bold text-white ring-2 ring-white">★</span>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-[10px] font-bold text-white ring-2 ring-white">★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">1000+ Stars</span>
                  </div>
                  <a 
                    href="https://github.com/mengjian-github/copilot-analysis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center group"
                  >
                    查看项目 
                    <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* 我的著作 */}
          <div className="mt-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8"
            >
              我的著作
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-48 h-64 relative overflow-hidden">
                  {/* 添加封面发光效果 */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md blur opacity-30 group-hover:opacity-40 animate-pulse-slow -z-10"></div>
                  <div className="absolute top-1 right-1 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm font-semibold py-1 px-2 rounded-bl-md rounded-tr-md text-purple-600 dark:text-purple-400">
                    2025年出版
                  </div>
                  <Image
                    src="/images/my-first-book.jpg"
                    alt="DeepSeek极简入门与应用"
                    fill
                    className="object-cover z-0 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">DeepSeek极简入门与应用</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">我的第一本著作，深入浅出地介绍DeepSeek大模型的入门知识与实际应用场景。适合AI爱好者与开发者阅读。</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">AI</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">DeepSeek</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">入门指南</span>
                  </div>
                  <div className="mt-4">
                    <a 
                      href="https://item.jd.com/14960026.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center group"
                    >
                      在京东购买 
                      <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium group"
            >
              查看更多项目 
              <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* 加入社区 */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden"
      >
        {/* 装饰元素 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
              <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5"></path>
              <path d="M0,30 Q25,70 50,30 T100,30" fill="none" stroke="white" strokeWidth="0.5"></path>
              <path d="M0,70 Q25,30 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.5"></path>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">加入我的 AI 编程陪伴群</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              与志同道合的开发者一起学习，交流前沿技术，共同成长。
            </p>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              href="https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              立即加入
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* 联系我 */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">联系我</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              无论是项目合作、技术交流还是职业机会，都欢迎与我联系。
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              查看联系方式
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
