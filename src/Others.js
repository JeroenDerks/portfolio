import React from 'react';
import Cursors from 'components/Others/Web/Cursors';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import { categories } from 'components/Others/defaultProjects.js';
import DhiOverview from 'components/Others/DHI GRAS/DhiOverview';
export const OthersContext = React.createContext();

const categoryHeader = {
  fontWeight: 700,
  padding: '0px 2px',
};

const linkStyle = makeStyles({
  link: {
    color: '#000',
    textDecoration: 'none',
    padding: '1px',
    '&:hover': { backgroundColor: '#000', color: '#fff' },
  },
});

function Others({ match }) {
  const calcPadding = () => {
    if (window.innerWidth < 600) return { y: 40, x: 40, between: 40 };
    else if (window.innerWidth < 1400) return { y: 80, x: 80, between: 80 };
    else return { y: 80, x: 80, between: 80 };
  };

  const calcWidth = () => {
    if (window.innerWidth < 600) return { main: 1, menu: 1 };
    else if (window.innerWidth < 1400) return { main: 0.8, menu: 0.2 };
    else return { main: 0.85, menu: 0.15 };
  };

  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);
  const [width, setWidth] = React.useState(calcWidth);

  const classes = linkStyle();
  const { path } = match;

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
      setWidth(calcWidth);
    });
  });

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
      <Route exact path={`${path}`} component={Cursors} />
      <Box
        width={width.main}
        minHeight="100vh"
        display="flex"
        alignItems="flex-end"
        style={{
          padding: padding.y,
          paddingRight: padding.x * 2,
          paddingBottom: padding.y,
          paddingLeft: padding.x,
          boxSizing: 'border-box',
        }}
      >
        <Route exact path={`${path}/dhioverview`} component={DhiOverview} />

        {categories &&
          categories.map(({ projects }) =>
            projects.map(({ comp: Component, link }, i) => (
              <Route
                key={i}
                path={`${path}/${link}`}
                render={() => <Component />}
              ></Route>
            ))
          )}
      </Box>

      <Box
        width={width.menu}
        position="fixed"
        left={window.innerWidth * width.main - padding.x}
        bottom={padding.y}
        boxSizing="border-box"
        style={{ border: '1px solid red' }}
      >
        {categories &&
          categories.map(({ group, projects }, i) => (
            <Box pt={2} key={i}>
              <Typography variant="body2" style={categoryHeader}>
                {group}
              </Typography>
              {projects &&
                projects.map(({ link, name }, j) => (
                  <Typography variant="body2" key={j} className={classes.title}>
                    <Link to={`${path}/${link}`} className={classes.link}>
                      {name}
                    </Link>
                  </Typography>
                ))}
            </Box>
          ))}
      </Box>
    </OthersContext.Provider>
  );
}

export default Others;
