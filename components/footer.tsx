"use client";

import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 1px solid ${(props) => props.theme.borderg};
  background-color: ${(props) => props.theme.bg};

  font-size: 1rem;
  line-height: 1.2;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const theme = {
  fg: "red",
  bg: "white",
  borderg: "red"
};

const fn = ({ fg, bg }: { fg: string; bg: string }) => {
  return {
    fg: bg,
    bg: fg,
    borderg: fg
  };
};

export default function Footer() {
  return (
    <h1>
      Footer
      <ThemeProvider theme={theme}>
        <Button>正常</Button>

        <ThemeProvider theme={fn}>
          <Button>嵌套按钮</Button>
        </ThemeProvider>
      </ThemeProvider>
    </h1>
  );
}
