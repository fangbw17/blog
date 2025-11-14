import styled from "styled-components"

// Design tokens
export const colors = {
  background: "#ffffff",
  foreground: "#1d1d1f",
  card: "#ffffff",
  cardForeground: "#1d1d1f",
  primary: "#1d1d1f",
  primaryForeground: "#ffffff",
  secondary: "#f8f9fa",
  secondaryForeground: "#1d1d1f",
  muted: "#f1f3f4",
  mutedForeground: "#6e6e73",
  accent: "#007aff",
  accentForeground: "#ffffff",
  border: "#e5e5e7",
  input: "#f8f9fa",
  primaryHover: "#424245",
  secondaryHover: "#e8eaed",
}

export const shadows = {
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
  apple: "0 4px 16px rgba(0, 0, 0, 0.08)",
  appleHover: "0 8px 32px rgba(0, 0, 0, 0.12)",
}

export const fonts = {
  sans: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  serif: '"New York", "Times New Roman", Times, serif',
}

export const GlobalStyle = styled.div`
  * {
    border-color: ${colors.border};
    outline-color: rgba(0, 122, 255, 0.5);
  }

  body {
    background-color: ${colors.background};
    color: ${colors.foreground};
    font-family: ${fonts.sans};
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    letter-spacing: -0.01em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.sans};
    text-rendering: optimizeSpeed;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 600;
  }

  h1 {
    font-size: clamp(2rem, 8vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  h2 {
    font-size: clamp(1.875rem, 5vw, 2.25rem);
    font-weight: 600;
    letter-spacing: -0.03em;
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 1.875rem);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.0625rem;
    line-height: 1.7;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.mutedForeground};
    border-radius: 3px;

    &:hover {
      background: ${colors.accent};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
