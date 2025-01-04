import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Metaverse from "./components/Metaverse";
import Subscribe from "./components/Subscribe";

function App() {
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
