import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';
/**
 * @class SourcesStore
 * @extends {EventEmitter}
 */
class SourcesStore extends EventEmitter {
  /**
    * Creates an instance of SourcesStore.
     * @memberof SourcesStore
     */
  constructor() {
    super();
    this.sources = [];
    this.getSources = this.getSources.bind(this);
  }

  /**
  * @method getSources
  * @return {array} returns an array of  sources
  */
  getSources() {
    return this.sources;
  }

  /**
  * @method updateSources
  * @param {any} action
  * @return {void}
  * Listens to actions from the dispatcher
  * runs actions relevant to NewsStore
  * Emits a change event
  */
  updateSources(action) {
    switch (action.type) {
      case constants.SOURCES:
        this.sources = action.sources;
        this.emit('changes');
        break;
      default:
        break;
    }
  }
}

// Creates an instance of SourcesStore
const sourcesStore = new SourcesStore();
// Registers the store to recieve actions from the dispatcher
Dispatcher.register(sourcesStore.updateSources.bind(sourcesStore));
export default sourcesStore;
