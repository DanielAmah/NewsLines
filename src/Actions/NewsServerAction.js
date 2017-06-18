import dispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default {
  receiveArticle(response) {
    dispatcher.handleServerAction({
      actionType: Constants.NEW_NEWS,
      response,
    });
  },
};
