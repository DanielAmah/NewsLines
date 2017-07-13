import React from 'react';
import errorStore from '../store/ErrorStore';

/**
 * @export
 * @class Error
 * @extends {React.Component}
 */
export default class Error extends React.Component {
  constructor() {
    super();
    this.state = {
      error: ''
    };
    this.error = this.getError.bind(this);
  }

  /**
   * @method componentDidMount - Runs after the page has been rendered
   * @return {void}
   * Makes an action call to get list of sources from the Api
   * Listens for a change event from the sourcesStore
   */

  componentDidMount() {
    errorStore.on('errors', this.error);
  }

  /**
   * @method componentWillUnmount - Runs after component has been closed
   * @return {void}
   * Removes changes Listener from the errorStore
   */

  componentWillUnmount() {
    errorStore.removeListener('error', this.error);
  }

  /**
   * @method getSources - Sets the state of Error component to data retrieve
   * from errorStore
   * @return {void}
   */

  getError() {
    this.setState({
      error: errorStore.getErrors()
    });
  }

  render() {
    return <h2> {this.state.error} </h2>;
  }
}
