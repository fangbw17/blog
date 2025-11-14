import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: {
      displayName: true, // 开发环境中显示组件名称
      topLevelImportPaths: [], // 指定顶级导入路径
      ssr: true, // 启用服务端渲染
      fileName: true, // 生成的类名中包含文件名
      minify: true, // 生产压缩
      pure: true, // 移除未使用的样式
    },
  },
};

export default nextConfig;
