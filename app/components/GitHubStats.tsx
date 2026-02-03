"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GitHubStatsProps {
  username: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-center h-32 bg-neutral-50 dark:bg-white/[0.02]">
          <div className="w-6 h-6 border-t-2 border-b-2 border-amber-500 dark:border-amber-400 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
      {loading ? (
        <div className="flex items-center justify-center h-32 bg-neutral-50 dark:bg-white/[0.02]">
          <div className="w-6 h-6 border-t-2 border-b-2 border-amber-500 dark:border-amber-400 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="w-full">
          {/* Contribution chart */}
          <div className="p-4 bg-white dark:bg-white/[0.02]">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
              贡献活动
            </h3>
            <div className="overflow-hidden rounded bg-white dark:bg-[#0a0a0a] p-1">
              <img
                src={`https://ghchart.rshah.org/${username}`}
                alt="GitHub贡献图"
                className="w-full dark:invert dark:hue-rotate-180"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800">
            {[
              { label: "开源项目", stat: "Repos", href: `https://github.com/${username}?tab=repositories` },
              { label: "开发者社区", stat: "关注者", href: `https://github.com/${username}?tab=followers` },
              { label: "获得认可", stat: "Stars", href: `https://github.com/${username}` },
            ].map((item) => (
              <a
                key={item.stat}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-base font-bold font-mono text-amber-600 dark:text-amber-400">
                  {item.stat}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GitHubStats;
