"use client";

// import type { ReactNode } from "react";
// import { ThemeProvider } from "styled-components";
// import { theme } from "@/lib/theme";
// import { GlobalStyle } from "@/lib/global-styles";

// export default function StyleRegistry({ children }: { children: ReactNode }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       {children}
//     </ThemeProvider>
//   );
// }

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/theme";
import { GlobalStyle } from "@/lib/global-styles";

export default function StyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}><GlobalStyle />{children}</ThemeProvider>;
}