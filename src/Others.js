import React from 'react';
import Cursors from 'components/Others/Web/Cursors';
import { Box } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { categories } from 'components/Others/defaultProjects.js';
import DhiOverview from 'components/Others/DHIGRAS/DhiOverview';
import DesktopMenu from 'components/Others/Menu/DesktopMenu';
import MobileMenu from 'components/Others/Menu/MobileMenu';

export const OthersContext = React.createContext();

function Others({ match }) {
  const calcPadding = () => {
    if (window.innerWidth < 900) return { y: 20, x: 20, between: 20 };
    else if (window.innerWidth < 1400) return { y: 80, x: 80, between: 80 };
    else return { y: 80, x: 80, between: 80 };
  };

  const calcWidth = () => {
    if (window.innerWidth < 900) return { main: 1, menu: 1 };
    else if (window.innerWidth < 1400) return { main: 0.8, menu: 0.2 };
    else return { main: 0.85, menu: 0.15 };
  };

  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);
  const [width, setWidth] = React.useState(calcWidth);

  const { path } = match;

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
      setWidth(calcWidth);
    });
  });

  return (
    <OthersContext.Provider
      value={{
        state: { mobile, padding, width },
        actions: {},
      }}
    >
      {mobile ? <MobileMenu match={match} /> : <DesktopMenu match={match} />}

      <Box
        width={width.main}
        display="flex"
        alignItems="flex-end"
        style={{
          padding: padding.y,
          paddingRight: padding.x * 2,
          paddingBottom: padding.y,
          paddingLeft: padding.x,
          boxSizing: 'border-box',
          minHeight: !mobile && '100vh',
        }}
      >
        <Route exact path={`${path}`} component={Cursors} />
        <Route exact path={`${path}/dhi-overview`} component={DhiOverview} />

        {categories &&
          categories.map(({ projects }) =>
            projects.map(({ comp, comp: Component, link }, i) => (
              <Route
                key={i}
                path={`${path}/${link}`}
                render={() => (comp !== null ? <Component /> : 'WIP')}
              ></Route>
            ))
          )}
      </Box>
    </OthersContext.Provider>
  );
}

export default Others;
