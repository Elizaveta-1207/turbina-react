import React from 'react';
import AppContext from '../contexts/AppContext';
/* import PropTypes from 'prop-types'; */

export default function Background() {
  const { background } = React.useContext(AppContext);

  return background.isStatic && (
    <div className="background" style={background.customBackground ? background.style : {}} />
  );
}
