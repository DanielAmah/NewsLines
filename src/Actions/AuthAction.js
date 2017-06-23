import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

/**
 * Action creator to handle authentication action
 */

export default{
  getUser(info) {
    AppDispatcher.handleServerAction({
      actionType: Constants.AUTH,
      info,
    });
  },
};

