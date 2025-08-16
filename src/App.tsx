import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Header,
  Footer,
  Hero,
  About,
  Expertise,
  Work,
  Projects,
  Experience,
  Contact,
  FloatingElements,
  CursorTrail
} from '@/components';
import '@/styles/base/globals.css';
import '@/styles/base/App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      disable: 'mobile'
    });
  }, []);

  return (
    <div className="App">
      <CursorTrail />
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;