import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  audienceAsOf,
  audienceTotal,
  socials,
  bio150,
  bio50,
  bioEn,
  email,
  honors,
  mediaCoverage,
  pressPhotos,
  pressProducts,
  talks,
  wechatId,
} from "@/lib/press";

export const metadata: Metadata = {
  title: "媒体资料 — 孟健",
  description:
    "孟健的媒体与演讲资料：简介、照片、可邀约讲题、过往演讲与媒体报道。Nextfield Labs LLC 创始人，《DeepSeek极简入门与应用》突破百万册。",
  alternates: { canonical: "/media-kit" },
};

const label =
  "text-[10px] uppercase tracking-[0.22em] font-mono text-amber-700 dark:text-amber-400";
const h2 = "text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-8";

const pastTalks = honors.filter((h) => ["演讲", "分享", "出品人"].includes(h.kicker));

export default function MediaKitPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-mono mb-6">
            Media Kit
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6">
            媒体与演讲资料
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            采访、演讲邀约和活动介绍需要的简介、照片和讲题都在这里，可以直接取用。
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
          >
            联系邀约 <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Bios */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className={h2}>简介</h2>
          <div className="space-y-8 max-w-3xl">
            <div>
              <p className={label}>一句话（50 字内）</p>
              <p className="mt-2 text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">{bio50}</p>
            </div>
            <div>
              <p className={label}>标准版（150 字内）</p>
              <p className="mt-2 text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">{bio150}</p>
            </div>
            <div>
              <p className={label}>English</p>
              <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{bioEn}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">全网关注</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            合计 {audienceTotal}（{audienceAsOf}），账号名统一为「孟健AI编程」，海外平台为 Kian Meng。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {socials.map((s) => {
              const body = (
                <>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{s.name}</p>
                  <p className="mt-1 text-xl font-bold font-mono text-neutral-900 dark:text-white">{s.followers || "—"}</p>
                </>
              );
              const cls = "block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800";
              return s.href ? (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-amber-400/50`}>
                  {body}
                </a>
              ) : (
                <div key={s.name} className={cls} title={s.note}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className={h2}>照片</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {pressPhotos.map((p) => (
              <figure key={p.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 360px, 90vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 flex items-center justify-between text-sm text-neutral-500">
                  {p.label}
                  <a
                    href={p.src}
                    download
                    className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    <FiDownload className="w-3.5 h-3.5" /> 原图
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className={h2}>可邀约讲题</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {talks.map((t) => (
              <div
                key={t.title}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-white/[0.03]"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.text}</p>
                <p className="mt-3 text-xs font-mono text-amber-700 dark:text-amber-400">讲过：{t.past}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 mb-4 text-sm font-semibold text-neutral-900 dark:text-white">过往演讲与出品</h3>
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
            {pastTalks.map((t) => (
              <li key={`${t.date}-${t.title}`} className="flex gap-4 sm:gap-8 py-3 text-sm">
                <span className="w-24 shrink-0 font-mono text-neutral-400">{t.date}</span>
                <span className="text-neutral-800 dark:text-neutral-200">
                  {t.title}
                  {t.kicker === "出品人" && <span className="ml-2 text-amber-700 dark:text-amber-400">（出品人）</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className={h2}>产品</h2>
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
                <p className="mt-2 text-sm font-mono text-neutral-500 dark:text-neutral-400">{product.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-neutral-50 dark:bg-[#0d0d0d] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className={h2}>媒体报道</h2>
          <div className="space-y-4">
            {mediaCoverage.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-white/[0.03]"
              >
                <p className={label}>{item.kicker}</p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.text}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline"
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

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">联系</h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            采访、演讲和合作邀约：微信 <span className="font-mono text-neutral-900 dark:text-white">{wechatId}</span>
            （备注来意），或邮件{" "}
            <a href={`mailto:${email}`} className="font-mono text-amber-700 dark:text-amber-400 hover:underline">
              {email}
            </a>
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 hover:underline"
          >
            全部联系方式
            <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
