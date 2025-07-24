import { useState } from "react";

import "./App.css";
import FloatingParticlesCanvas from "./components/floating-particles-canvas";
import HeroSection from "./components/hero/hero-section";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-[#000018]'>
      <Header />
      <HeroSection />
      <FloatingParticlesCanvas />
    </div>
  );
}

export default App;
