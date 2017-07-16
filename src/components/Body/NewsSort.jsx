import React from 'react';
import PropTypes from 'prop-types';


/**
* @function NewsSort
* @param  {string} props {pass value and text as props in the  HTML option element}
* @return {string} {the option HTML element with props value and text}
*/
const NewsSort = (props) => {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
};

/**
* @function {NewsSort}
* @param  {object} NewsSort.defaultProps = { {set default props}
* @return {object} {empty default prop values}
*/
NewsSort.defaultProps = {
  value: '',
  text: ''
};

/**
* @function {NewsSort}
* @param  {object} NewsSort.propTypes = { {set props type}
* @return {object} {set props and prop type}
*/
NewsSort.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string
};

export default NewsSort;
