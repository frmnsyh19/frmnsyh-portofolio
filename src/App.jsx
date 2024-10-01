import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import './style.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam milidetik
    });
  }, []);
  return (
    <div className="w-full flex flex-col container-font scroll-smooth ">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

