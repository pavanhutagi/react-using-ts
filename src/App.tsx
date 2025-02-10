import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "./hooks/useTheme";

import NavBar from "./components/nav-bar/NavBar";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const About = lazy(() => import("./pages/about/About"));

function ThemedApp() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container">
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
      <h1 className="title">Hello World</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <div className={"app-container"}>
        <BrowserRouter>
          <Routes>
            <Route path="/pages/home" element={<Home />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/about" element={<About />} />
          </Routes>

          <NavBar />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
