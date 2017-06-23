import dispatcher from '../dispatcher';
import Constants from '../constants/constants';

/**
 * News Action to retrieve news from the server
 */
export default {
  receiveArticle(response) {
    dispatcher.handleServerAction({
      actionType: Constants.NEW_NEWS,
      response,
    });
  },
};
