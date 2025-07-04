import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import ParticlesBackground from "./components/ParticlesBackground";

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
  title: "孟健 - 技术开发专家",
  description: "孟健的个人网站 - 10年+技术开发经验，技术负责人，AI与技术融合专家",
  keywords: "孟健, 技术开发, 技术专家, React, AI, GitHub Copilot, D2C, 腾讯, 大厂",
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
          title: "孟健 - 技术开发专家",
      description: "孟健的个人网站 - 10年+技术开发经验，技术负责人，AI与技术融合专家",
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
    title: "孟健 - 技术开发专家",
    description: "孟健的个人网站 - 10年+技术开发经验，技术负责人，AI与技术融合专家",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a202c" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col font-sans bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-0">
            <ParticlesBackground />
          </div>
          <div className="relative z-10">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
