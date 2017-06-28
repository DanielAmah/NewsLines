import React from 'react';
import PropTypes from 'prop-types';

import Share from './Share';

/**
 * @param {any} props
 * @returns
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

// Set Default Props
DisplayNews.defaultProps = {
  urlToImage: '',
  description: '',
  title: '',
  url: ''
};
// Set Props
DisplayNews.propTypes = {
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
};

export default DisplayNews;
