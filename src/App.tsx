import { createTheme, ThemeProvider } from "@mui/material";
import AppLayout from "layout/AppLayout";
import NotFound from "pages/NotFound";
import Subreddit from "pages/Subreddit";
import ThreadPage from "pages/ThreadPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Subreddit />} />
            <Route path="/thread/:id" element={<ThreadPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
