import Image from "next/image";
import { FiClock, FiTag, FiExternalLink, FiFileText, FiMonitor, FiPackage, FiCode, FiCpu, FiUsers } from "react-icons/fi";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "博客文章 - 孟健的个人网站",
  description: "孟健的技术博客文章和分享",
};

const articles = [
  {
    title: "腾讯打工8年：我为什么选择离开？",
    description: "我在腾讯工作8年的心路历程，为什么最终选择离开？分享我的成长、思考和决策过程。",
    date: "2022-12-15",
    link: "https://mp.weixin.qq.com/s/fenUVm-ucssdflenPj4KUw",
    image: null,
    color: "from-blue-500 to-blue-700",
    icon: <FiFileText className="w-12 h-12" />,
    readTime: "15 分钟",
    categories: ["职业发展", "经验分享"]
  },
  {
    title: "新 QQ NT 桌面版如何实现内存优化探索",
    description: "深入解析新版 QQ NT 桌面版在内存优化方面的技术探索和实践经验。",
    date: "2022-06-20",
    link: "https://mp.weixin.qq.com/s/STqlp2eMdeoixedCEhYJgQ",
    image: null,
    color: "from-teal-400 to-green-500",
    icon: <FiMonitor className="w-12 h-12" />,
    readTime: "12 分钟",
    categories: ["技术", "前端", "性能优化"]
  },
  {
    title: "对 Electron 相关质疑的回答",
    description: "针对业界对 Electron 框架的常见质疑，从技术角度进行分析和回应。",
    date: "2022-05-10",
    link: "https://mp.weixin.qq.com/s/m3Y-m_nMp1vWQD4w8ndArQ",
    image: null,
    color: "from-gray-500 to-gray-700",
    icon: <FiPackage className="w-12 h-12" />,
    readTime: "10 分钟",
    categories: ["技术", "Electron", "桌面应用"]
  },
  {
    title: "深入解析 GitHub Copilot 工作原理",
    description: "通过逆向分析，探索 GitHub Copilot 的底层实现机制和工作原理。",
    date: "2023-03-05",
    link: "https://juejin.cn/post/7127612045822255135",
    image: null,
    color: "from-indigo-500 to-purple-600",
    icon: <FiCode className="w-12 h-12" />,
    readTime: "20 分钟",
    categories: ["AI", "GitHub Copilot", "技术研究"]
  },
  {
    title: "DeepSeek R1 最佳实践指南发布",
    description: "我编写的 DeepSeek R1 大模型最佳实践指南正式发布，帮助开发者更高效地使用 AI 辅助编程。",
    date: "2023-10-12",
    link: "https://wvehg9sdj2q.feishu.cn/wiki/Rq0EwcY4WiWp0ok1lh3cqohsngf?fromScene=spaceOverview",
    image: null,
    color: "from-purple-500 to-purple-700",
    icon: <FiCpu className="w-12 h-12" />,
    readTime: "系列文章",
    categories: ["AI", "DeepSeek", "最佳实践"]
  },
  {
    title: "加入孟健的AI编程陪伴群",
    description: "邀请你加入我创建的AI编程陪伴群，共同学习、交流AI与编程技术，分享前沿资讯。",
    date: "2023-12-01",
    link: "https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg",
    image: null,
    color: "from-blue-400 to-indigo-500",
    icon: <FiUsers className="w-12 h-12" />,
    readTime: "5 分钟",
    categories: ["社区", "AI", "学习"]
  }
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "孟健的技术博客",
    "description": "分享前端开发、AI技术融合和团队管理的专业文章",
    "author": {
      "@type": "Person",
      "name": "孟健",
      "url": "https://mengjian.dev"
    },
    "publisher": {
      "@type": "Person",
      "name": "孟健",
      "url": "https://mengjian.dev"
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <JsonLd data={blogSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">博客文章</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            分享我的技术见解、项目经验和行业思考
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className={`flex items-center justify-center h-full w-full bg-gradient-to-r ${article.color}`}>
                    <div className="text-white">
                      {article.icon}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" /> {article.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-2 items-center mt-auto">
                  <FiTag className="text-gray-500 dark:text-gray-400" />
                  {article.categories.map((category, catIndex) => (
                    <span 
                      key={catIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                <span className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium">
                  阅读全文 <FiExternalLink className="ml-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">订阅我的公众号</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              关注&quot;孟健AI编程&quot;公众号，获取更多前端、AI、技术管理等方面的原创内容。
            </p>
            <div className="flex justify-center">
              <a 
                href="https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-flex items-center"
              >
                立即关注 <FiExternalLink className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 