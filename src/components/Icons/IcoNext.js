import React from 'react';
import PropTypes from 'prop-types';

const IcoNext = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <title>ic_chevron_right_48px</title>
      <g className="nc-icon-wrapper" fill={color}>
        <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
      </g>
    </svg>
  );
};

IcoNext.propTypes = {
  color: PropTypes.string,
};

IcoNext.defaultTypes = {
  color: '#4a4a4a',
};

export default IcoNext;
