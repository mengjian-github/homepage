"use client";

import Link from "next/link";
import { FiGithub, FiMessageCircle, FiMail, FiArrowRight } from "react-icons/fi";
import { SiZhihu, SiJuejin } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: "主页", href: "/" },
    { label: "关于我", href: "/about" },
    { label: "项目经验", href: "/projects" },
    { label: "博客文章", href: "/blog" },
    { label: "联系方式", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-4 h-4" />,
      href: "https://github.com/mengjian-github",
      label: "GitHub",
    },
    {
      icon: <SiZhihu className="w-4 h-4" />,
      href: "https://www.zhihu.com/people/meng-jian-39-32",
      label: "知乎",
    },
    {
      icon: <SiJuejin className="w-4 h-4" />,
      href: "https://juejin.cn/user/4212984287073895",
      label: "掘金",
    },
    {
      icon: <FiMessageCircle className="w-4 h-4" />,
      href: "https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog",
      label: "微信公众号",
    },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-[#080808] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand + Socials */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-lg font-bold text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              孟健
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3 max-w-sm leading-relaxed">
              AI 编程实战专家 / 出海创业者。前腾讯 T11，Nextfield Labs LLC 创始人。
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 mb-4">
              导航
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 mb-4">
              联系
            </h3>
            <a
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              href="mailto:384709054@qq.com"
            >
              <FiMail className="w-4 h-4" />
              384709054@qq.com
            </a>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
              微信：mjcoding3
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors mt-4"
            >
              查看所有联系方式
              <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 mt-10 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            © {year} 孟健. All rights reserved. Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
