import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects  from "./components/Projects";
import Contact from "./components/Contact";
import Engineering from "./components/Engineering";
import FeaturedProject from "./components/FeaturedProject";


import {useState} from "react";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Engineering />
      <FeaturedProject />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;