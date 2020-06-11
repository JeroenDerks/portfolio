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

function MobileMenu({ match }) {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  const classes = linkStyle();
  const { path } = match;

  return (
    <Box width={1} left={0} boxSizing="border-box" p={1}>
      {categories &&
        categories.map(({ group, projects }, i) => (
          <Box
            key={i}
            py={0.5}
            style={{
              borderBottom: i < projects.length - 1 && '1px solid grey',
            }}
          >
            <Typography variant="body2" className={classes.title}>
              <span style={categoryHeader}>{group}</span>
              {': '}
              {projects &&
                projects.map(({ link, name }, j) => (
                  <>
                    <Link
                      to={`${path}/${link}`}
                      className={classes.link}
                      key={j}
                    >
                      {name}
                    </Link>
                    {j < projects.length - 1 && ' - '}
                  </>
                ))}
            </Typography>
          </Box>
        ))}
    </Box>
  );
}

export default MobileMenu;
