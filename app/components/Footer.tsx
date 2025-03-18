"use client";

import Link from 'next/link';
import { FiGithub, FiMessageCircle } from 'react-icons/fi';
import { SiZhihu, SiJuejin } from 'react-icons/si';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    { label: '主页', href: '/' },
    { label: '关于我', href: '/about' },
    { label: '项目经验', href: '/projects' },
    { label: '博客文章', href: '/blog' },
    { label: '联系方式', href: '/contact' },
  ];
  
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
      label: '微信公众号'
    },
  ];
  
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="block text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  孟健
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                  10年+前端开发经验，Flow-Parallel前端团队负责人，致力于推动 AI 与前端技术融合发展。
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label={link.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">快速导航</h3>
                <ul className="space-y-2">
                  {footerLinks.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link 
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">联系我</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">有问题? 发送邮件给我。</p>
                <a 
                  href="mailto:mjcoding@example.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  mjcoding@example.com
                </a>
                <p className="text-gray-600 dark:text-gray-300 mt-4 mb-2">或者扫描我的微信二维码</p>
                <Link 
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  查看联系方式
                </Link>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>© {year} 孟健. 保留所有权利.</p>
            <p className="mt-2">由 Next.js 强力驱动</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 