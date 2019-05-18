import React from 'react';
import PropTypes from 'prop-types';

const IcoPrevious = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <title>ic_chevron_left_48px</title>
      <g className="nc-icon-wrapper" fill={color}>
        <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
      </g>
    </svg>
  );
};

IcoPrevious.propTypes = {
  color: PropTypes.string,
};

IcoPrevious.defaultTypes = {
  color: '#4a4a4a',
};

export default IcoPrevious;
