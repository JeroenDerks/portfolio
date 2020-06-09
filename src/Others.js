import React from 'react';
import { Box } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';

export const OthersContext = React.createContext();

const projects = [
  {
    link: 'rebekkaborum',
    title: 'rebekka borum',
    comp: <>'rebekka borum' </>,
  },
  {
    link: 'urbanplanen',
    title: 'urbanplanen',
    comp: <>'urbanplanen' </>,
  },
  {
    link: 'aalborgsurreal',
    title: 'aalborg surreal',
    comp: <>'aalborg surreal' </>,
  },
  {
    link: 'informationage',
    title: 'information age',
    comp: <>'information age' </>,
  },
  {
    link: 'stopmotionmachine',
    title: 'stop motion machine',
    comp: <>'stop motion machine'</>,
  },
];

function Others({ match }) {
  const calcPadding = () => {
    if (window.innerWidth < 600) return { y: 5, x: 5, text: 2 };
    else if (window.innerWidth < 1400) return { y: 10, x: 10, text: 4 };
    else return { y: 10, x: 17, text: 8 };
  };

  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);

  const { path } = match;

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
    });
  });

  return (
    <OthersContext.Provider
      value={{
        state: { mobile, padding },
        actions: {},
      }}
    >
      <div>hello</div>
      <Switch>
        {projects &&
          projects.map(({ comp, link, title }) => (
            <Route path={`${path}/${link}`}>{comp}</Route>
          ))}

        <Route path="/test2">test2</Route>
      </Switch>

      <Box
        width={'20%'}
        height={500}
        position="fixed"
        right={padding.y * 8}
        bottom={padding.y * 8}
        style={{ border: '1px solid red' }}
      >
        {projects &&
          projects.map(({ comp: Comp, link, title }) => (
            <Link to={`/others/${link}`}>{title}</Link>
          ))}
      </Box>
    </OthersContext.Provider>
  );
}

export default Others;
