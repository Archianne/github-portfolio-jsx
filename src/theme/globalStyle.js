import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  }

body {
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fontColor1};
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 14px;
  line-height: 1.5;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
}
  `;

export default GlobalStyle;
