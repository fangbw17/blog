# Next.js 16 中的 Styled-Components 详细设置指南

## 1. 安装依赖

```bash
# npm
npm install styled-components
npm install @types/styled-components --save-dev

# pnpm
pnpm add styled-components
pnpm add @types/styled-components --save-dev
```

## 2. Next.js 设置（next.config.ts）

在 `next.config.ts` 中配置 styled-components 编译器选项

```typescript
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
```

### 配置选项说明：

- **displayName**: 在浏览器 DevTools 中显示有意义的类名（如 `StyledButton` 而不是 `sc-1234`）
- **ssr**: 必须启用，确保样式在服务端正确注入
- **fileName**: 包含源文件名，便于定位样式来源
- **transpileTemplateLiterals**: 提升性能，在构建时优化模板字符串
- **minify**: 生产环境下压缩样式
- **pure**: 允许树摇优化未使用的样式

## 3. 主题配置（lib/theme.ts）

定义全局设计令牌：

```typescript
export const theme = {
  colors: {
    primary: "#ffffff",
    background: "#ffffff",
    text: "#000000",
    textSecondary: "#666666",
    border: "#e5e5e5",
    shadow: "rgba(0,0,0,0.1)",
    hover: "#f5f5f5",
  },
  fonts: {
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    secondary:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    monospace:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  sizes: {
    maxWidth: "1200px",
    navHeight: "64px",
    borderRadius: "8px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 5px -1px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
```

## 4. 全局样式（lib/global-styles.ts）

使用 `createGlobalStyle` 定义全局样式：

```typescript
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`
```

## 5. StyleRegistry 组件 (components/style-registry.tsx)

这是一个 Client Component，用于提供主题和全局样式：

```typescript
'use client'

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/lib/theme'
import { GlobalStyles } from '@/lib/global-styles'

export default function StyleRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
```

## 6. 根布局整合 (app/layout.tsx)

在根布局中包装 StyleRegistry：

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <StyleRegistry>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </StyleRegistry>
      </body>
    </html>
  )
}
```

## 7. TypeScript 类型定义 (lib/styled.d.ts)

为 styled-components 添加主题类型：

```typescript
import 'styled-components'
import { theme } from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

## 8. 在组件中使用 Styled-Components

### 基础用法

```typescript
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`
```

### 接收 Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case 'sm': return '8px 16px'
      case 'lg': return '16px 32px'
      default: return '12px 24px'
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case 'secondary': return props.theme.colors.secondary
      default: return props.theme.colors.primary
    }
  }};
`
```

### 组件组合

```typescript
const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
`

const Card = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 24px;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`
```

## 9. SSR 注意事项

在 Next.js 中使用 styled-components 时：

- **启用 SSR**: 确保在 `next.config.mjs` 中 `ssr: true`
- **Style Flush**: Next.js 会自动处理样式注入，无需手动处理
- **文件拆分**: 在需要动态样式时使用服务端组件
- **性能**: styled-components 会生成唯一的类名，避免样式冲突

## 10. 最佳实践

1. **集中管理主题**: 所有设计令牌都在 `lib/theme.ts` 中
2. **使用 TypeScript**: 为 styled-components 添加类型支持
3. **避免内联样式**: 使用 styled-components 替代 inline styles
4. **性能优化**: 使用 `memoization` 缓存复杂样式计算
5. **代码组织**: 
   - 小样式在组件文件中
   - 大型或共享样式提取到 `lib/styles` 目录
6. **调试**: 在开发环境中启用 `displayName: true` 便于调试

## 11. 常见问题

### Q: 为什么样式没有应用？
A: 确保 `StyleRegistry` 组件包装了应用的顶层，并且 `ThemeProvider` 正确配置。

### Q: 如何在服务端组件中使用 styled-components？
A: 不能直接在服务端组件中使用，需要将 styled-components 代码放在 Client Components (`'use client'`) 中。

### Q: 样式冲突怎么解决？
A: styled-components 会自动生成唯一的类名，避免全局冲突。如需命名空间隔离，可使用 CSS-in-JS 的 scoping 特性。

### Q: 如何实现暗黑模式？
A: 创建多个主题对象，使用 Context 或状态管理切换主题。

## 12. 调试技巧

```typescript
// 在浏览器 DevTools 中查看生成的类名
const StyledDiv = styled.div`
  /* 在 displayName: true 时，会显示 sc-StyledDiv-xxx */
  color: red;
`
```

使用 React DevTools 检查 styled-components 生成的类名和样式规则。

