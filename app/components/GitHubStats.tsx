"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GitHubStatsProps {
  username: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 仅用于触发加载状态动画
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-center h-32 bg-gray-50 dark:bg-gray-800">
          <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
    >
      {loading ? (
        <div className="flex items-center justify-center h-32 bg-gray-50 dark:bg-gray-800">
          <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-full">
          {/* GitHub贡献图 */}
          <div className="p-4 bg-white dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">贡献活动</h3>
            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-1">
              <img 
                src={`https://ghchart.rshah.org/${username}`} 
                alt="GitHub贡献图" 
                className="w-full dark:invert dark:hue-rotate-180"
              />
            </div>
          </div>
          
          {/* GitHub统计 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700">
            <a 
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Repos</span>
              <span className="text-gray-600 dark:text-gray-300">开源项目</span>
            </a>
            
            <a 
              href={`https://github.com/${username}?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">关注者</span>
              <span className="text-gray-600 dark:text-gray-300">开发者社区</span>
            </a>
            
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">Stars</span>
              <span className="text-gray-600 dark:text-gray-300">获得认可</span>
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GitHubStats; 