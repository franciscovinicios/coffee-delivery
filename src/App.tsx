import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyles } from "./styles/global";
import { Router } from "./Routes";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CardContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
