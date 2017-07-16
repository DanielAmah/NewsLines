
import React from 'react';

import PropTypes from 'prop-types';
import articlesStore from '../store/NewsStore';
import * as NewsAction from '../Actions/NewsAction';
import NewsSort from './Body/NewsSort.jsx';
import DisplayNews from './Body/DisplayNews.jsx';

/**
 * @class NewsList
 * @extends {React.Component}
 * @constructor  set state for articles to empty array
 * @description get the list of news articles
 */
class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      name: 'articles',
      currentSort: ''
    };
    this.article = this.getArticle.bind(this);
    this.sortsBy = [];
    this.name = '';
    this.id = '';
    this.change = this.onChange.bind(this);
  }

  /**
   * @method componentDidMount - Runs after the page has been rendered
   * @return {string}
   * Retrieves query values from the props and assigns them to
   * instance variables
   * Makes an action call to get list of sources from the Api
   * Listens for a change event from the sourcesStore
   */

  componentDidMount() {
    const { location } = this.props;
    const { query } = location;
    this.sorts = query.sorts.split(',');
    this.sortsBy = this.sorts.map(sort => sort);
    this.name = query.name;
    this.id = query.id;
    NewsAction.getArticles(query.id, this.sorts[0]);
    articlesStore.on('changes', this.article);
  }

  /**
   * @method componentWillUnmount - Runs after component has been closed
   * @return {void}
   * Removes changes Listener from the articlesStore
   */
  componentWillUnmount() {
    articlesStore.removeListener('changes', this.article);
  }

  /**
   * @method onChange - Listens for an event and makes an action call to the Api
   * @param {string} event -Takes in an event parameter
   * @return {void}
   */
  onChange(event) {
    const value = event.target.value;
    NewsAction.getArticles(this.id, value);
    this.setState({ currentSort: value });
  }

  /**
   * @method getArticle - Sets the state of articles to
   * data retrieve from articlesStore
   * @return {void}
   */
  getArticle() {
    this.setState({
      articles: articlesStore.getArticles()
    });
  }
  /**
   * @description map through sortBy to get the sort values
   * @returns 
   * @memberof NewsList
   */
  render() {
    const sorted = this.sortsBy.map((sort, index) => (<NewsSort key={index} value={sort} text={sort} />));
    const singleArticles = this.state.articles.map(article => (
      <DisplayNews key={article.publishedAt + article.title} {...article} />
    ));
    return (
      <div>
        <div className="container" id={this.state.name}>
          <div className="row">
            <div>
              <h1>{this.name}</h1>
            </div>
            <div>
              <div>
                <div>
                  <h6 htmlFor="sortsBy">Sort By</h6>
                </div>
                <div className="form-group">
                  <select
                    onChange={this.change}
                    id="sortsBy"
                    className="form-control col-md-6"
                  >
                    {sorted}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
          <div>
            {singleArticles}
          </div>
        </div>
      </div>
    );
  }
}

/**
* @param  {object} NewsList.defaultProps = { { set default props}
* @return {object} {set default prop to top}
*/
NewsList.defaultProps = {
  location: {
    query: {
      sorts: 'top'
    }
  }
};

/**
* @param  {object} NewsList.propTypes = { {set proptypes}
* @return {object} {a key value pair showing proptypes of object for location}
*/
NewsList.propTypes = {
  location: PropTypes.object
};

export default NewsList;
