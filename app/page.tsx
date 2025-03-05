import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiMessageCircle } from "react-icons/fi";
import { SiZhihu, SiJuejin } from "react-icons/si";
import JsonLd from "./components/JsonLd";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "孟健",
    "jobTitle": "前端开发专家，豆包Marscode官方讲师，技术作家",
    "description": "10年+前端开发经验，Flow-Parallel前端团队负责人，《DeepSeek极简入门与应用》作者",
    "url": "https://mengjian.dev",
    "sameAs": [
      "https://github.com/mengjian-github",
      "https://www.zhihu.com/people/meng-jian-39-32",
      "https://juejin.cn/user/4212984287073895"
    ],
    "knowsAbout": ["前端开发", "React", "Next.js", "TypeScript", "AI", "D2C", "DeepSeek"]
  };

  return (
    <div className="relative">
      <JsonLd data={personSchema} />
      
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* 英雄区域 */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="block">你好，我是</span>
                <span className="block text-blue-600 dark:text-blue-400">孟健</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                10年+前端开发经验，专注于大型互联网产品研发与技术。
                目前担任 Flow-Parallel 前端团队负责人，致力于推动 AI 与前端技术融合发展。
                同时也是<a href="https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">豆包Marscode官方讲师</a>，
                以及《DeepSeek极简入门与应用》一书的作者。
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  了解更多
                  <FiArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
                >
                  联系我
                </Link>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-6">
                <a 
                  href="https://github.com/mengjian-github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.zhihu.com/people/meng-jian-39-32" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                >
                  <SiZhihu className="w-6 h-6" />
                </a>
                <a 
                  href="https://juejin.cn/user/4212984287073895" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                >
                  <SiJuejin className="w-6 h-6" />
                </a>
                <a 
                  href="https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                >
                  <FiMessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <Image
                src="/images/avatar.png"
                alt="孟健的照片"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* 技术栈区域 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">核心技能</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">深厚的前端技术积累和全栈开发经验</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">前端开发</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">精通 React、Vue、TypeScript 等现代前端技术栈，有大型应用架构设计经验。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">Vue</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm">Next.js</span>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AI 技术融合</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">深入研究 AI 与前端技术融合，专注 D2C、Copilot 等前沿技术。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-sm">D2C</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-sm">GitHub Copilot</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">智能代码生成</span>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">团队管理</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">丰富的技术团队管理经验，善于规划技术方向和推动团队创新。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full text-sm">技术规划</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-sm">团队建设</span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 rounded-full text-sm">项目管理</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 项目作品区域 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">精选项目</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">我的部分开源项目和技术作品</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">飞书文档转公众号排版工具</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">一个便捷的工具，帮助用户将飞书文档转换为适合公众号的排版格式。</p>
                <div className="mt-4">
                  <a 
                    href="https://lark-to-markdown.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center"
                  >
                    查看项目 <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">逆向分析 Copilot</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">深入剖析 GitHub Copilot 的工作原理，获得上千 star 的开源项目。</p>
                <div className="mt-4">
                  <a 
                    href="https://github.com/mengjian-github/copilot-analysis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center"
                  >
                    查看项目 <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* 我的著作 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">我的著作</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-48 h-64 relative">
                  <Image
                    src="/images/my-first-book.jpg"
                    alt="DeepSeek极简入门与应用"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">DeepSeek极简入门与应用</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">我的第一本著作，深入浅出地介绍DeepSeek大模型的入门知识与实际应用场景。</p>
                  <div className="mt-4">
                    <a 
                      href="https://item.jd.com/14960026.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center"
                    >
                      在京东购买 <FiArrowRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/projects" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-center"
            >
              查看更多项目 <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* 加入社区 */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">加入我的 AI 编程陪伴群</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              与志同道合的开发者一起学习，交流前沿技术，共同成长。
            </p>
            <a 
              href="https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              点击加入
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
