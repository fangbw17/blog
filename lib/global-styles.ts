import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: ${({ theme }) => theme.colors.border};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.1;
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
  }

  p {
    font-size: 1.0625rem;
    line-height: 1.7;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${({ theme }) => theme.transitions.normal};

    &:hover {
      color: ${({ theme }) => theme.colors.accent}; 
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    transition: all ${({ theme }) => theme.transitions.normal};

    &:hover {
      background: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
