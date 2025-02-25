import { 
  FiGithub, 
  FiMessageCircle, 
  FiMail, 
  FiLink
} from "react-icons/fi";
import { SiZhihu, SiJuejin } from "react-icons/si";

export const metadata = {
  title: "联系方式 - 孟健的个人网站",
  description: "如何联系孟健，查看社交媒体链接和联系渠道",
};

const contactMethods = [
  {
    icon: <FiMessageCircle className="h-10 w-10" />,
    title: "微信公众号",
    description: "关注「孟健的AI编程认知」，获取最新技术资讯和原创文章",
    action: "关注公众号",
    link: "https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg"
  },
  {
    icon: <FiMail className="h-10 w-10" />,
    title: "微信",
    description: "我的微信号：mjcoding",
    action: "添加微信",
    link: null
  },
  {
    icon: <SiZhihu className="h-10 w-10" />,
    title: "知乎",
    description: "关注我在知乎上的技术分享和行业思考",
    action: "访问知乎",
    link: "https://www.zhihu.com/people/meng-jian-39-32"
  },
  {
    icon: <SiJuejin className="h-10 w-10" />,
    title: "掘金",
    description: "阅读我在掘金平台发布的技术文章",
    action: "访问掘金",
    link: "https://juejin.cn/user/4212984287073895"
  },
  {
    icon: <FiGithub className="h-10 w-10" />,
    title: "GitHub",
    description: "查看我的开源项目和代码贡献",
    action: "访问 GitHub",
    link: "https://github.com/mengjian-github"
  },
  {
    icon: <FiLink className="h-10 w-10" />,
    title: "AI 编程陪伴群",
    description: "加入我的 AI 编程陪伴群，与志同道合的开发者交流学习",
    action: "加入社区",
    link: "https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg"
  }
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">联系方式</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            通过以下方式与我取得联系，期待与您交流
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8 flex flex-col"
            >
              <div className="mb-6 text-blue-600 dark:text-blue-400">
                {method.icon}
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {method.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {method.description}
              </p>
              
              {method.link ? (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  {method.action}
                </a>
              ) : (
                <div className="text-base font-medium text-gray-800 dark:text-gray-200 px-5 py-3 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  {method.action}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">留言与合作</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                如果您有合作项目、演讲邀请或其他事宜需要联系我，可通过以下方式留言
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                欢迎添加我的微信：mjcoding
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                请在添加时注明来意，我会尽快回复您。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 