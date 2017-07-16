import React from 'react';
import PropTypes from 'prop-types';

import Share from './Share';

/**
* @function DisplayNews
* @param  {string} props {pass in a props which is the url to the image, description, title and url}
* @return {string} { a list of of title, description and url from the news Api}
*/
const DisplayNews = (props) => {
  const { urlToImage, description, title, url } = props;
  return (
      <div>
      <div className="col-md-6" id="singleArticle"> 
        <div className="ArticleImg">  
          <img src={urlToImage} alt="Headline" />
        </div>
        <div className="ArticleTitle"><h1><span>{title.slice(0, 20)}...</span></h1></div>
        <div>
          <p className="truncate">{description.slice(0, 70)}...</p>
        </div>
        <div>
          <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-danger">View More</button>
            </a>
          </div>
           <hr />
          <div>
            <Share share={url} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
* @function {DisplayNews}
* @param  {string} DisplayNews.defaultProps = { {set default props}
* @return {string} {empty string}
*/
DisplayNews.defaultProps = {
  urlToImage: '',
  description: '',
  title: '',
  url: ''
};

/**
* @function {DisplayNews}
* @param  {string} DisplayNews.propTypes = { {set display news props types}
* @return {string} {an object referencing the property types}
*/
DisplayNews.propTypes = {
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
};

export default DisplayNews;
