import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Metaverse from "./components/Metaverse";
import Subscribe from "./components/Subscribe";

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <main>
      <Hero />
      <Metaverse />
      <Gallery />
      <Experience />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
