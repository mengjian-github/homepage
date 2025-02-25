import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./output.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "孟健 - 前端开发专家",
  description: "孟健的个人网站 - 10年+前端开发经验，Flow-Parallel前端团队负责人，AI与前端融合技术专家",
  keywords: "孟健, 前端开发, 技术专家, React, AI, GitHub Copilot, D2C, 腾讯, 字节跳动, Flow-Parallel",
  authors: [{ name: "孟健", url: "https://github.com/mengjian-github" }],
  creator: "孟健",
  publisher: "孟健",
  metadataBase: new URL("https://mengjian.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://mengjian.dev",
    title: "孟健 - 前端开发专家",
    description: "孟健的个人网站 - 10年+前端开发经验，Flow-Parallel前端团队负责人，AI与前端融合技术专家",
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
    title: "孟健 - 前端开发专家",
    description: "孟健的个人网站 - 10年+前端开发经验，Flow-Parallel前端团队负责人，AI与前端融合技术专家",
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
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a202c" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
