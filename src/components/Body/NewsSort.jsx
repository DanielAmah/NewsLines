import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function NewsSort
 * @param {any} props
 * @returns{option} - Option value
 */

const NewsSort = (props) => {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
};

/**
 * Default Props
 */
NewsSort.defaultProps = {
  value: '',
  text: ''
};

/**
 * Set props
 */
NewsSort.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string
};

export default NewsSort;
