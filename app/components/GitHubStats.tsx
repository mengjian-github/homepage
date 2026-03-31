"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GitHubStatsProps {
  username: string;
}

interface StatsData {
  repos: number;
  followers: number;
  totalStars: number;
}

const FALLBACK: StatsData = { repos: 56, followers: 363, totalStars: 5100 };

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<StatsData>(FALLBACK);

  useEffect(() => {
    setMounted(true);

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stars`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("API error");

        const user = await userRes.json();
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum: number, r: { stargazers_count?: number }) => sum + (r.stargazers_count || 0), 0)
          : FALLBACK.totalStars;

        setStats({
          repos: user.public_repos || FALLBACK.repos,
          followers: user.followers || FALLBACK.followers,
          totalStars,
        });
      } catch {
        setStats(FALLBACK);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username]);

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
              { label: "开源项目", value: `${stats.repos}`, href: `https://github.com/${username}?tab=repositories` },
              { label: "开发者关注", value: `${stats.followers}`, href: `https://github.com/${username}?tab=followers` },
              { label: "获得 Stars", value: `${stats.totalStars.toLocaleString()}`, href: `https://github.com/${username}` },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">
                  {item.value}
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
