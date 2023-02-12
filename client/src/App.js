import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
