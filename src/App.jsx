import NavBar from "./components/1__NavBar";
import React, { useState } from "react";
import Main from "./components/2__Main";
import { ThemeProvider } from "styled-components";
import themes from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";


function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <NavBar changeTheme={changeTheme}/>
      <Main />
    </ThemeProvider>
  );
}

export default App;
