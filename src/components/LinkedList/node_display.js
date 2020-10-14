import React from 'react';
import PropTypes from 'prop-types';

const NodeDisplay = ({ node }) => {
  const val = node.getValue();
  const display = node.getNext() ? `${val} ${'-->'} ` : `${val}`;
  return (
    <React.Fragment>
      <p>{display}</p>
    </React.Fragment>
  )
}

NodeDisplay.propTypes = {
  node: PropTypes.object
}

export default NodeDisplay;