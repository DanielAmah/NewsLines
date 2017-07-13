import React from 'react';

import sourcesStore from '../../store/SourceStore';
import * as NewsAction from '../../Actions/NewsAction';
import NewsSource from './NewsSource';

/**
 * @class SourceSort
 * @extends {React.Component}
 * @description renders and filter sources
 * @returns {input} a search input and renders the sources components
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
   * @method componentDidMount - Runs after the page has been rendered
   * @return {void}
   * Makes an action call to get list of sources from the Api
   * Listens for a change event from the sourcesStore
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
   * @return {void}
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
 * 
 * @description maps through the sources.
 * @returns 
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
