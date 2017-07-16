import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';
/**
 * @class SourcesStore
 * @extends {EventEmitter}
 * @constructor
 * @return {void}
 * @description store news sources from the api call.
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
  * @param {string} action
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

/**
 * register sources store to dispatcher
 */
const sourcesStore = new SourcesStore();
Dispatcher.register(sourcesStore.updateSources.bind(sourcesStore));
export default sourcesStore;
