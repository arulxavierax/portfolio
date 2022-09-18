import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import LetsConnect from './Components/LetsConnect';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import GithubCalendar from './Components/GithubCalendar';
import SoftSkills from './Components/SoftSkills';

function App() {
  return (
    <div>
      <Header />
      <About/>
      <LetsConnect />
      <Skills />
      <SoftSkills />
      <Projects />
      <GithubCalendar />
      <Footer />
    </div>
  );
}

export default App;
