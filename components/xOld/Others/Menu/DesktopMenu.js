import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { categories } from 'components/Others/defaultProjects.js';
import { OthersContext } from 'Others';

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

function DesktopMenu({ match }) {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  const classes = linkStyle();
  const { path } = match;

  return (
    <Box
      width={width.menu}
      position="fixed"
      left={window.innerWidth * width.main - padding.x}
      bottom={padding.y}
      boxSizing="border-box"
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
  );
}

export default DesktopMenu;
