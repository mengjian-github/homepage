import Image from "next/image";
import { FiArrowRight, FiAward } from "react-icons/fi";

export const metadata = {
  title: "关于我 - 孟健的个人网站",
  description: "了解孟健的职业经历、技术背景和个人成长历程",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">关于我</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            10 年+前端开发经验，专注于大型互联网产品研发与技术
          </p>
        </div>
        
        {/* 个人简介 */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/avatar.png"
                    alt="孟健的照片"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  个人简介
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  全栈开发工程师 / 技术管理者
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  目前担任字节跳动 Flow-Parallel 前端团队负责人，致力于推动 AI 与前端技术融合发展。拥有丰富的大型互联网产品研发经验，曾在腾讯负责过 QQ、腾讯课堂等多个核心产品的前端开发工作。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  专注于 AI 领域深耕 D2C（Design To Code）、Github Copilot 等前沿技术研究。具备全栈开发能力，包括设计、后台、客户端等全栈研发经验。同时也是<a href="https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">豆包Marscode官方讲师</a>，以及《DeepSeek极简入门与应用》一书的作者。
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  近期开发了多个备受关注的开源项目，包括<a href="https://www.wechatdaily.online/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">微信群聊日报生成器</a>（基于AI的群聊分析工具）和<a href="https://www.larkmd.online/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">飞书文档转公众号排版工具</a>（专业的内容创作工具），致力于用技术提升工作效率。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 盖洛普优势 */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">我的盖洛普优势</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">了解我的核心优势和工作风格</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
            <div className="flex flex-col items-center space-y-8">
              <FiAward className="w-20 h-20 text-blue-500 dark:text-blue-400" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
                {[
                  { name: "战略思考", bg: "from-blue-500 to-blue-700" },
                  { name: "责任感", bg: "from-green-500 to-green-700" },
                  { name: "成就导向", bg: "from-purple-500 to-purple-700" },
                  { name: "学习", bg: "from-red-500 to-red-700" },
                  { name: "分析思维", bg: "from-indigo-500 to-indigo-700" }
                ].map((strength, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg bg-gradient-to-r ${strength.bg} text-white text-center flex items-center justify-center min-h-[80px]`}
                  >
                    <span className="font-bold">{strength.name}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                盖洛普优势是我的核心工作风格，帮助我在面对挑战时发挥最大的潜力。
                我的前五项优势展示了我擅长战略分析、高度负责、追求成就、持续学习和系统思考的特点。
              </p>
            </div>
          </div>
        </div>
      
        {/* 工作经历 */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">工作经历</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">我的职业发展历程</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">字节跳动</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Flow-Parallel 前端团队负责人</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2024年至今</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                <li>负责推动 AI 与前端技术融合发展，探索前沿技术在实际业务中的应用</li>
                <li>全栈开发设计、后台、客户端等全栈研发，具备完整的产品开发能力</li>
                <li>AI 领域深耕 D2C（Design To Code）、Github Copilot 等前沿技术研究</li>
                <li>担任<a href="https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">豆包Marscode官方讲师</a>，分享AI编程相关知识</li>
                <li>出版《DeepSeek极简入门与应用》技术书籍，销量突破60万册，成为AI领域畅销书</li>
                <li>开发<a href="https://www.wechatdaily.online/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">微信群聊日报生成器</a>，基于AI技术的群聊分析工具，支持跨平台使用</li>
                <li>开发<a href="https://www.larkmd.online/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">飞书文档转公众号排版工具</a>，专业的内容创作工具，显著提升创作效率</li>
                <li>开源项目<a href="https://github.com/mengjian-github/copilot-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">逆向分析Copilot</a>获得GitHub 1000+ stars，在技术社区产生广泛影响</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">腾讯</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">QQ 大前端五组负责人（T11）</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2022.12 - 2023</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                <li>负责 QQ 群基础、QQ 群视频、QQ 群课堂、QQ 桌面端、QQ 频道、QQ 动态广场等相关前端业务</li>
                <li>负责 QQ 桌面端基于 Electron 框架的持续性能优化</li>
                <li>负责大前端 AI 方向建设落地，结合 QPilot 落地 D2C、P2C 两大方向，整体提效 30%以上</li>
                <li>建设智能代码生成平台 Ultron Smartcode</li>
                <li>负责主导 2 个公司级前端 OTeam</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">腾讯</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">腾讯课堂运营前端负责人</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2018.03 - 2022.11</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                <li>负责课堂 C 侧业务的前端预审、技术方案、上线交付</li>
                <li>多端实现拉通优化，涉及 PC Web、PC 客户端、H5、APP、IPad、小程序等多端业务的跨端需求</li>
                <li>聚焦运营侧招、选、搭、投、玩法沉淀，保质保量高效达成业务 KPI</li>
                <li>负责部门研发效能建设，自研效能工具 Thanos 与 Coding 的共建与落地</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">腾讯</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">厘米秀产品中心 前端开发</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2016.07 - 2018.03</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                2016.07 入职腾讯，在厘米秀团队负责前端开发工作。2018.03 转岗腾讯课堂，离开团队时绩效考核 4 星。
              </p>
            </div>
          </div>
        </div>
        
        {/* 教育背景 */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">教育背景</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">西安交通大学</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">自动化科学与技术 本科</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2012 - 2016</span>
            </div>
          </div>
        </div>
        
        {/* 我的著作 */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">我的著作</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">我的技术书籍和出版作品</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex h-full">
                <div className="md:flex-shrink-0 md:w-1/3 relative">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/images/my-first-book.jpg"
                      alt="DeepSeek极简入门与应用"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DeepSeek极简入门与应用</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    我的第一本出版书籍，深入浅出地介绍DeepSeek大模型的入门知识与实际应用场景。
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://item.jd.com/14960026.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      在京东购买 <FiArrowRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">React 源码全解</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  开源电子书，深入解析React源码的核心原理和实现机制，帮助开发者更好地理解React框架。
                </p>
                <div className="mt-auto">
                  <a 
                    href="https://github.com/mengjian-github" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    查看项目 <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 荣誉奖项 */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">荣誉奖项</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">我获得的行业认可和成就</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-4">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">公司荣誉：</span> 
                获得十二项公司级荣誉，3 项专业级荣誉。包括优秀员工、开源协同、自研上云等多项公司级奖项。
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">技术影响力：</span> 
                KM 技术文章 7 级影响力，分享达人，7 篇技术文章获 KM 总榜。
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">开源贡献：</span> 
                逆向分析 Copilot（Github 已获得上千 star）。
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">行业演讲：</span> 
                腾讯云专场 AI 分享交流、GMTC 全球大前端技术大会演讲嘉宾。
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">AI领域：</span> 
                担任<a href="https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">豆包Marscode官方讲师</a>，教授AI编程技能。
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">技术著作：</span> 
                开源书籍《React 源码全解》作者，以及出版书籍《DeepSeek极简入门与应用》作者。
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">社区影响：</span> 
                知乎前端话题高赞回答者、云加社区特邀专栏作者、掘金社区和微信公众号作者。
              </li>
            </ul>
          </div>
        </div>
        
        {/* 了解更多 */}
        <div className="mt-16 text-center">
          <a 
            href="https://mp.weixin.qq.com/s/fenUVm-ucssdflenPj4KUw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            腾讯打工8年：我为什么选择离开？ <FiArrowRight className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
} 