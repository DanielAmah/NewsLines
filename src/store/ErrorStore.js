import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';
/**
 * @class ErrorStore
 * @extends {EventEmitter}
 */
class ErrorStore extends EventEmitter {
  /**
     * Creates an instance of ErrorStore.
     * @memberof ErrorStore
     */
  constructor() {
    super();
    this.errorMessage = '';
  }

  /**
  * @method getErrors
  * @return {string} returns the error message
  */
  getErrors() {
    return this.errorMessage;
  }

  /**
  * @method updateErrors
  * @param {any} action
  * @return {void}
  * Listens to actions from the dispatcher
  * runs actions relevant to ErrorStore
  * Emits a error event
  */
  updateErrors(action) {
    switch (action.type) {
      case constants.ERRORS:
        this.errorMessage = action.message;
        this.emit('errors');
        break;
      default:
    }
  }
}

// Creates an instance of ErrorStore
const errorStore = new ErrorStore();
// Registers the store to recieve actions from the dispatcher
Dispatcher.register(errorStore.updateErrors.bind(errorStore));
export default errorStore;
