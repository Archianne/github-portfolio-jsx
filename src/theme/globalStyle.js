import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor1};
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 14px;
  line-height: 1.5;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html::-webkit-scrollbar {
  width: 20px;
}

html::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.navBg};
}

html::-webkit-scrollbar-thumb {
  border: 5px solid transparent;
  background-clip: content-box;
  background-color: ${(props) => props.theme.numBg};
}

@media (max-width: 768px) {
  html:-webkit-scrollbar {
  scrollbar-width: none;  
  display: none;
  }
  body {
  overflow-x: hidden; 
}
}

#fallback {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.navBg};
}
`;

export default GlobalStyle;
