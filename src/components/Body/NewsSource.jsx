import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class Sources
 * @extends {React.Component}
 * @param {string}
 * @returns {sources} a div with source title and sources description
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
 * Default props
 */
NewsSource.defaultProps = {
  name: '',
  description: '',
  id: '',
  sortBysAvailable: []
};

/**
 * Default props 
 */
NewsSource.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  sortBysAvailable: PropTypes.array
};

/**
 * Set Props
 */
NewsSource.contextTypes = {
  router: PropTypes.object
};

export default NewsSource;
