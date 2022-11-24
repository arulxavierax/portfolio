import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import LetsConnect from "./Components/LetsConnect";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import GithubCalendar from "./Components/GithubCalendar";
import SoftSkills from "./Components/SoftSkills";
import Statistics from "./Components/Statistics";
import Navbars from "./Components/Navbar";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
      return () => clearInterval(timer);
    }, 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <Navbars />
      <Header />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Statistics />
      <GithubCalendar />
      <LetsConnect />
      {/* <Footer /> */})
    </div>
  );
}

export default App;
