import React from 'react';
import classnames from 'classnames';
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
  button: {
    backgroundColor: '#fff',
    color: '#000',
    transition: 'all .2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  buttonActive: {
    backgroundColor: '#000',
    color: '#fff',
  },
});

function MobileMenu({ match }) {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  const [category, showCategory] = React.useState();

  const classes = linkStyle();
  const { path } = match;

  const handleCategory = (i) => {
    if (i === category) showCategory();
    else showCategory(i);
  };

  return (
    <>
      <Box flexWrap="nowrap" display="flex">
        {categories &&
          categories.map(({ group, projects }, i) => (
            <Box
              key={i}
              display="flex"
              width={1 / categories.length}
              height={32}
              border="1px solid grey"
              className={classnames({
                [classes.button]: true,
                [classes.buttonActive]: i === category,
              })}
              onClick={() => handleCategory(i)}
            >
              <Box m={'auto'} p={0.5} style={{ whiteSpace: 'nowrap' }}>
                <Typography variant="body1">{group}</Typography>
              </Box>
            </Box>
          ))}
      </Box>

      {category !== undefined && (
        <Box border="1px solid grey" p={1}>
          <Typography variant="body2" className={classes.title}>
            {categories[category].projects.map(({ link, name }, j) => (
              <React.Fragment key={j}>
                <Link to={`${path}/${link}`} className={classes.link} key={j}>
                  {name}
                </Link>
                {j < categories[category].projects.length - 1 && ' | '}
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default MobileMenu;
