import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <header>头部</header>
        <main>{children}</main>
        <footer>尾部</footer>
      </body>
    </html>
  );
}
