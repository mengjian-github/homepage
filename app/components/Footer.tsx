"use client";

import Link from 'next/link';
import { 
  FiGithub, 
  FiMessageCircle,
  FiMail 
} from 'react-icons/fi';
import { SiZhihu, SiJuejin } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <FiGithub className="w-5 h-5" />, 
      href: 'https://github.com/mengjian-github', 
      label: 'GitHub' 
    },
    { 
      icon: <SiZhihu className="w-5 h-5" />, 
      href: 'https://www.zhihu.com/people/meng-jian-39-32', 
      label: '知乎' 
    },
    { 
      icon: <SiJuejin className="w-5 h-5" />, 
      href: 'https://juejin.cn/user/4212984287073895', 
      label: '掘金' 
    },
    { 
      icon: <FiMessageCircle className="w-5 h-5" />, 
      href: 'https://mp.weixin.qq.com/s/IkluVSLTf4nvlOJbLfZyGg', 
      label: '公众号' 
    },
    { 
      icon: <FiMail className="w-5 h-5" />, 
      href: 'mailto:mjcoding@example.com', 
      label: '邮箱' 
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-sm text-center">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              主页
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              关于我
            </Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              项目经验
            </Link>
            <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              博客文章
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              联系方式
            </Link>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            &copy; {currentYear} 孟健. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 