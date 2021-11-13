import AppLayout from "layout/AppLayout";
import Subreddit from "pages/Subreddit";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const App: React.FC = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subreddit />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
