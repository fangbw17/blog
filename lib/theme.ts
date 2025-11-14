// 设计令牌和主题配置
export const theme = {
  colors: {
    primary: "#ffffff",
    secondary: "#0f172a",
    background: "#ffffff",
    text: "#000000",
    textSecondary: "#666666",
    border: "#e5e5e5",
    shadow: "rgba(0, 0, 0, 0.1)",
    hover: "#f5f5f5",
  },
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Menlo, monospace',
  },
  sizes: {
    maxWidth: "1200px",
    navHeight: "64px",
    borderRadius: "8px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const

export type Theme = typeof theme
