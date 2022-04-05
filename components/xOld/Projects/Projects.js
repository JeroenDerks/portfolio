import React from 'react';
import Product from 'components/Product';
import ProductMobile from 'components/ProductMobile';

import { AppContext } from 'pages/_app';

function Projects({ projects }) {
  const {
    state: { mobile, padding, projectRef },
  } = React.useContext(AppContext);

  const paddingStyle = {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: padding.x * 8,
    paddingRight: padding.x * 8,
    boxSizing: 'border-box',
  };

  return (
    <div ref={projectRef} style={paddingStyle}>
      {projects &&
        projects.map((project, i) => (
          <div key={i}>
            {mobile ? (
              <ProductMobile props={project} />
            ) : (
              <Product props={project} />
            )}
          </div>
        ))}
    </div>
  );
}

export default Projects;
