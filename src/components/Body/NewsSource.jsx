import React from 'react';
import PropTypes from 'prop-types';

/**
* @function
* @param  {function} class NewsSource extends React.Component { {a class that displays the news sources}
* @return {string} {a list of news sources with source title and description}
*/
class NewsSource extends React.Component {
  handleQueryValue(href) {
    this.context.router.push(href);
  }
  render() {
    const { name, description, id, sortBysAvailable } = this.props;
    const link = `/news?name=${name}&id=${id}&sorts=${sortBysAvailable}`;
    return (
      <div className="col-md-3" id="source">
        <center><h3 className="sourceTitle">{name}</h3></center>
        <center><p>{description.slice(0, 50)}...</p></center>
        <center>
        <button
          className="btn btn-danger"
          onClick={this.handleQueryValue.bind(this, link)}
        >
          View Headlines
        </button>
        </center>
      </div>
    );
  }
}
/**
* 
* @param  {object} NewsSource.defaultProps = { {set default props}
* @return {object} {a key value pair showing empty value props}
*/
NewsSource.defaultProps = {
  name: '',
  description: '',
  id: '',
  sortBysAvailable: []
};

/**
* @param  {object} NewsSource.propTypes = { {set datatype for props}
* @return {object} {a key value pair showing the datatype for props}
*/
NewsSource.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  sortBysAvailable: PropTypes.array
};

/**
* @param  {object} NewsSource.contextTypes = { {use router value of object}
* @return {object} {shows router datatype of object}
*/
NewsSource.contextTypes = {
  router: PropTypes.object
};

export default NewsSource;
