import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  bio150,
  bio50,
  bioEn,
  headshot,
  mediaCoverage,
  pressProducts,
  wechatId,
} from "@/lib/press";

export const metadata: Metadata = {
  title: "媒体资料 — 孟健",
  description:
    "孟健的媒体资料。Nextfield Labs LLC 创始人，ShipSolo 与字流。《DeepSeek极简入门与应用》突破百万册。",
  alternates: { canonical: "/media-kit" },
};

export default function MediaKitPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-6">
            Media Kit
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6">
            媒体资料
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            前腾讯 T11 · 前字节跳动 3-1 · Nextfield Labs LLC 创始人。《DeepSeek极简入门与应用》突破百万册。
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-14 items-start">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={headshot.src}
                alt={headshot.alt}
                fill
                sizes="220px"
                className="object-cover object-top"
              />
            </div>
            <a
              href={headshot.src}
              className="mt-3 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline"
            >
              下载头像
              <FiArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-amber-700 dark:text-amber-400">
                50 字
              </p>
              <p className="mt-2 text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {bio50}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-amber-700 dark:text-amber-400">
                150 字
              </p>
              <p className="mt-2 text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {bio150}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-amber-700 dark:text-amber-400">
                English
              </p>
              <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {bioEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            产品
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pressProducts.map((product) => (
              <a
                key={product.href}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 dark:hover:border-amber-400/30"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm font-mono text-neutral-500 dark:text-neutral-400">
                  {product.note}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-[#0d0d0d] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            媒体报道
          </h2>
          <div className="space-y-4">
            {mediaCoverage.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-white/[0.03]"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-amber-700 dark:text-amber-400">
                  {item.kicker}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.text}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline break-all"
                  >
                    {item.linkLabel}
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            联系
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            微信：{wechatId}
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline"
          >
            网站联系方式
            <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
