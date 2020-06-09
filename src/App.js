import React from 'react';
import About from 'components/About';
import Header from 'components/Header';
import Projects from 'components/Projects';
import { projects } from 'components/Projects/projectList';

export const AppContext = React.createContext();

function App() {
  const calcPadding = () => {
    if (window.innerWidth < 600) return { y: 5, x: 5, text: 2 };
    else if (window.innerWidth < 1400) return { y: 10, x: 10, text: 4 };
    else return { y: 10, x: 17, text: 8 };
  };

  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
    });
  });

  const projectRef = React.createRef();
  const aboutRef = React.createRef();

  const scrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <AppContext.Provider
      value={{
        state: { aboutRef, mobile, padding, projectRef },
        actions: { scrollTo },
      }}
    >
      <Header />
      <Projects projects={projects} />
      <About />
    </AppContext.Provider>
  );
}

export default App;
