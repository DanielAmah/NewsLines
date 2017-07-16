import React from 'react';

import sourcesStore from '../../store/SourceStore';
import * as NewsAction from '../../Actions/NewsAction';
import NewsSource from './NewsSource';

/**
* @class {SourceSort}
* @param  {function} export default class SourceSort extends React.Component { {sourcesort an extension of the react.component}
* @constructor set initial state of sources.
* @return {string} {return sources sort component with a filtering to filter through news sources}
*/
export default class SourceSort extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      name: 'sources',
      searchTerm: ''
    };
    this.sources = this.getSources.bind(this);
    this.filter = this.filterSources.bind(this);
  }

/**
* @method componentDidMount - runs after the component mounts
* @return {void} 
* executes NewsAction.getSources() function to get the sources from the source store
*/
  componentDidMount() {
    NewsAction.getSources();
    sourcesStore.on('changes', this.sources);
  }

  /**
   * @method componentWillUnmount - Runs after component has been closed
   * @return {void}
   * Removes changes Listener from the sourcesStore
   */
  componentWillUnmount() {
    sourcesStore.removeListener('changes', this.sources);
  }

  /**
   * @method getSources - Sets the state of Sources to data retrieve
   * from sourcesStore
   * @return {object}
   */
  getSources() {
    this.setState({
      sources: sourcesStore.getSources()
    });
  }

  /**
   * @method filterSources - Searches through available sources
   * @param {event} event - Takes in an onChange event
   * @return {void}
   * Maps through lists of articles retrieved from the sourcesStore
   * Sets the sources State to the search result
   */
  filterSources(event) {
    const searchList = [];
    sourcesStore.getSources().map((source) => {
      if (
        source.name.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      ) {
        searchList.push(source);
      }
    });
    this.setState({
      sources: searchList,
      searchTerm: event.target.value
    });
  }

/**
 * @description maps through the sources.
 * @return {string} returns an HTML input for filter through the news sources and the sources component
 * @memberof SourceSort
 */
  render() {
    const { sources } = this.state;
    const SourcesComponents = sources.map(source => (
      <NewsSource key={source.id} {...source} />
    ));
    return (
      <div className="container">
        <div className="row">
          <div className="form-group">
            <input
              id={this.state.name}
              type="text"
              placeholder="Search for sources"
              onChange={this.filter}
              className="form-control"
            />
          </div>
        </div>
        <div>
          <div>
            {SourcesComponents}
          </div>
        </div>
      </div>
    );
  }
}
