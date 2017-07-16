import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';

/**
 * @class NewsStore
 * @extends {EventEmitter}
 * @constructor set initial state of article to an empty array
 * @return {void}
 * @description Store news list and pass them to the display news component
 */
class NewsStore extends EventEmitter {
  /**
   * Creates an instance of NewsStore.
   * @memberof NewsStore
   */
  constructor() {
    super();
    this.articles = [];
  }

  /**
  * @method getArticle
  * @return {array} - returns an array of articles
  */
  getArticles() {
    return this.articles;
  }

  /**
  * @method updateArticles
  * @param {string} action
  * @return {void}
  * Listens to actions from the dispatcher
  * runs actions relevant to NewsStore
  * Emits a change event
  */
  updateArticles(action) {
    switch (action.type) {
      case constants.NEW_NEWS:
        this.articles = action.articles;
        this.emit('changes');
        break;
      default:
        break;
    }
  }
}

/**
 * Register newsstore to dispatcher
 */
const newsStore = new NewsStore();
Dispatcher.register(newsStore.updateArticles.bind(newsStore));
export default newsStore;
