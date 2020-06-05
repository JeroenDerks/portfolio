import React from 'react';
import Header from 'components/Header';
export const AppContext = React.createContext();

const column = {
  left: '60',
  center: '30',
  right: '10%',
};
function App() {
  const calcPadding = () => {
    if (window.innerWidth < 600) return 40;
    else return 80;
  };
  const [padding, setPadding] = React.useState(calcPadding);

  React.useEffect(() => {
    window.addEventListener('resize', () => setPadding(calcPadding));
  });

  return (
    <AppContext.Provider
      value={{
        state: { column, padding },
        actions: {},
      }}
    >
      <Header />
    </AppContext.Provider>
  );
}

export default App;
