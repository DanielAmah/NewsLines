import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} props
 * @returns
 */

const NewsSort = (props) => {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
};

NewsSort.defaultProps = {
  value: '',
  text: ''
};

NewsSort.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string
};

export default NewsSort;
