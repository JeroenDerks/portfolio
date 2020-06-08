import React from 'react';
import About from 'components/About';
import Header from 'components/Header';
import Projects from 'components/Projects';

export const AppContext = React.createContext();

function App() {
  const calcPadding = () => {
    if (window.innerWidth < 600) return { y: 5, x: 5 };
    else if (window.innerWidth < 1400) return { y: 10, x: 10 };
    else return { y: 10, x: 17 };
  };

  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
    });
  });

  const installationRef = React.createRef();
  const aboutRef = React.createRef();

  const scrollTo = (ref) => {
    console.log('scroll');
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppContext.Provider
      value={{
        state: { aboutRef, installationRef, mobile, padding },
        actions: { scrollTo },
      }}
    >
      <Header />
      <Projects />
      <About />
    </AppContext.Provider>
  );
}

export default App;
