import React from 'react';
import Header from 'components/Header';
import Installations from 'components/Installations';

import { Box } from '@material-ui/core';
export const AppContext = React.createContext();

const defaultColumn = {
  left: '60%',
  center: '30%',
  right: '10%',
  title: '90%',
};

function App() {
  const calcPadding = () => {
    if (window.innerWidth < 600) return 5;
    else if (window.innerWidth < 1400) return 10;
    else return 15;
  };

  const calcColumn = () => {
    if (window.innerWidth < 600)
      return {
        left: '60%',
        center: '30%',
        right: '10%',
        title: '90%',
      };
    else
      return {
        left: '100%',
        center: '100%',
        right: '100%',
        title: '100%',
      };
  };

  const [column, setColumn] = React.useState(calcColumn);
  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
    });
  });

  return (
    <AppContext.Provider
      value={{
        state: { column, mobile, padding },
        actions: {},
      }}
    >
      <Header />

      <Installations />
    </AppContext.Provider>
  );
}

export default App;
