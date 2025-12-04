import React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
// import { Analytics } from '@vercel/analytics/react'; // Vercel 数据分析工具

import StyleRegistry from "@/components/style-registry";
// import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// 元数据配置（网站 seo 的相关信息），在 layout 或 page 中配置
export const metadata: Metadata = {
  title: {
    template: "%s | 分享技术与生活",
    default: "我的博客 - 分享技术与生活",
  },
  description: "一个专注于技术分享、生活感悟和创意思考的个人博客",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "bwfang" }],
  creator: "bwfang",
  publisher: "bwfang",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="light">
      <body className={`font-sans ${inter.className} antialiased`}>
        <StyleRegistry>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Navigation />
            </Suspense>
            <main style={{ flex: 1 }}>{children}</main>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </Suspense>
          </div>
        </StyleRegistry>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
