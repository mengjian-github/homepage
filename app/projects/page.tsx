import Image from "next/image";
import { FiExternalLink, FiGithub, FiCode, FiBook, FiCpu, FiPackage, FiLayout, FiMessageSquare } from "react-icons/fi";

export const metadata = {
  title: "项目经验 - 孟健的个人网站",
  description: "查看孟健的项目经验和作品集",
};

const projects = [
  {
    title: "微信群聊日报生成器",
    description: "基于 AI 的微信群聊分析工具，自动提取话题精华、群友金句和跟进事项，一键生成美观的图片日报。支持 macOS、Windows、Linux 三大平台。",
    link: "https://www.wechatdaily.online/",
    github: "https://github.com/mengjian-github/wechat-daily-report",
    image: null,
    color: "from-green-500 to-emerald-400",
    icon: <FiMessageSquare className="w-12 h-12" />,
    tags: ["Electron", "React", "TypeScript", "AI", "跨平台"],
    featured: true
  },
  {
    title: "飞书文档转公众号排版工具",
    description: "专业的在线工具，帮助用户快速将飞书文档转换为美观的微信公众号文章，支持一键转换、实时预览和完整样式保留。",
    link: "https://www.larkmd.online/",
    github: "https://github.com/mengjian-github/lark-to-markdown",
    image: null,
    color: "from-blue-500 to-cyan-400",
    icon: <FiLayout className="w-12 h-12" />,
    tags: ["Next.js", "TailwindCSS", "React Markdown", "内容创作"],
    featured: true
  },
  {
    title: "逆向分析Copilot",
    description: "深入剖析 GitHub Copilot 的工作原理，研究其实现机制和功能设计，GitHub 上已获得上千 star，在技术社区产生广泛影响。",
    link: null,
    github: "https://github.com/mengjian-github/copilot-analysis",
    image: null,
    color: "from-gray-700 to-gray-900",
    icon: <FiGithub className="w-12 h-12" />,
    tags: ["GitHub Copilot", "逆向工程", "AI", "VSCode 插件"],
    featured: true
  },
  {
    title: "React学习指南",
    description: "一个面向初学者和进阶开发者的 React 教程网站，涵盖从基础到高级的 React 知识点和最佳实践。",
    link: "https://r-learn.vercel.app/",
    github: null,
    image: null,
    color: "from-blue-400 to-indigo-500",
    icon: <FiCode className="w-12 h-12" />,
    tags: ["React", "教程", "Next.js", "MDX"]
  },
  {
    title: "开源书籍《React源码全解》",
    description: "深入解析 React 源码的开源电子书，从源码角度解析 React 的设计思想和实现细节，帮助开发者深入理解 React。",
    link: "https://meng-jian.gitbook.io/react-yuan-ma-quan-jie/",
    github: null,
    image: null,
    color: "from-red-400 to-pink-500",
    icon: <FiBook className="w-12 h-12" />,
    tags: ["React", "源码分析", "电子书", "开源"]
  },
  {
    title: "DeepSeek R1最佳实践指南",
    description: "提供 DeepSeek R1 大模型的最佳实践指南，包括如何有效使用 AI 大模型进行编程和日常助手工作。",
    link: "https://wvehg9sdj2q.feishu.cn/wiki/Rq0EwcY4WiWp0ok1lh3cqohsngf?fromScene=spaceOverview",
    github: null,
    image: null,
    color: "from-purple-500 to-indigo-600",
    icon: <FiCpu className="w-12 h-12" />,
    tags: ["DeepSeek", "AI", "大模型", "实践指南"]
  },
  {
    title: "D2C 智能代码生成平台",
    description: "基于 AI 的设计稿转代码平台，通过分析设计稿自动生成前端代码，大幅提升开发效率。",
    link: null,
    github: null,
    image: null,
    color: "from-orange-400 to-red-500",
    icon: <FiPackage className="w-12 h-12" />,
    tags: ["AI", "D2C", "Figma", "前端"]
  }
];

// 分离精选项目和其他项目
const featuredProjects = projects.filter(project => project.featured);
const otherProjects = projects.filter(project => !project.featured);

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">项目经验</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            我的开源项目和技术作品
          </p>
        </div>
        
        {/* 精选项目 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🌟 精选项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-yellow-200 dark:border-yellow-600"
              >
                <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className={`flex items-center justify-center h-full w-full bg-gradient-to-r ${project.color}`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-2 mt-auto border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium"
                      >
                        <FiExternalLink className="mr-1" /> 访问项目
                      </a>
                    )}
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center text-sm font-medium"
                      >
                        <FiGithub className="mr-1" /> GitHub
                      </a>
                    )}
                    
                    {!project.link && !project.github && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        项目进行中
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 其他项目 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">📚 其他项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className={`flex items-center justify-center h-full w-full bg-gradient-to-r ${project.color}`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-2 mt-auto border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium"
                      >
                        <FiExternalLink className="mr-1" /> 访问项目
                      </a>
                    )}
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center text-sm font-medium"
                      >
                        <FiGithub className="mr-1" /> GitHub
                      </a>
                    )}
                    
                    {!project.link && !project.github && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        项目进行中
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">更多项目</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            我还有更多进行中和已完成的项目，包括企业内部项目和开源贡献。
            如果您对特定领域的项目感兴趣，或希望了解更多详情，欢迎通过&quot;联系方式&quot;页面与我联系。
          </p>
        </div>
      </div>
    </div>
  );
} 