import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "孟健 — AI 编程创业者 / 技术作者 / 演讲者",
  description:
    "前腾讯 T11 | 前字节跳动 3-1 | Nextfield Labs LLC 创始人 | AI 编程、出海产品与技术写作实践者",
  keywords:
    "孟健, AI编程, OpenClaw, 出海创业, Next.js, TypeScript, Cloudflare, SEO, GitHub Copilot",
  authors: [{ name: "孟健", url: "https://github.com/mengjian-github" }],
  creator: "孟健",
  publisher: "孟健",
  metadataBase: new URL("https://mengjian.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://mengjian.site",
    title: "孟健 — AI 编程创业者 / 技术作者 / 演讲者",
    description:
      "前腾讯 T11 | 前字节跳动 3-1 | Nextfield Labs LLC 创始人 | AI 编程、出海产品与技术写作实践者",
    siteName: "孟健的个人网站",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "孟健的个人网站",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "孟健 — AI 编程创业者 / 技术作者 / 演讲者",
    description:
      "前腾讯 T11 | 前字节跳动 3-1 | Nextfield Labs LLC 创始人 | AI 编程、出海产品与技术写作实践者",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col font-sans bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
