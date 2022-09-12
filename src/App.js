import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import LetsConnect from './Components/LetsConnect';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <LetsConnect />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
