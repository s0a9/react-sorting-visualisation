import React, { useState } from "react";
import NavBar from "./_components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [arr, 0] = useState([]);
  const [len, setLen] = useState(0);

  const getRandomArray = () => {
    return Math.floor(Math.random() * 400)
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
