import './App.css';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { MenuTab } from './Components/MenuTab';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    // const homeTop = homeRef.current?.offsetTop || 0;
    const aboutTop = aboutRef.current?.offsetTop || 0;
    const projectsTop = projectsRef.current?.offsetTop || 0;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Determinar qué sección está en la vista actual
    if (scrollPosition < aboutTop) {
      setActiveSection('home');
    } else if (scrollPosition < projectsTop) {
      setActiveSection('about');
    } else {
      setActiveSection('projects');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <nav className='nav-menu'>
          <MenuTab activeSection={activeSection} />
        </nav>
        <main className='main-content' ref={homeRef} id="home-section">
          <Home />
        </main>
        <section className='about-me' ref={aboutRef} id="about-section">
          <About />
        </section>
        <section className='projects-container' ref={projectsRef} id="projects-section">
          <Projects />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
