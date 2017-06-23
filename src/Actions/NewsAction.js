import dispatcher from '../dispatcher';
import Constants from '../constants/constants';
import NewsAPI from '../utils/NewsAPI';

/**
 *  News Action to display news
 */

export default{
  receiveArticle(source, sort) {
    NewsAPI.get(source, sort);
    dispatcher.handleViewAction({
      actionType: Constants.NEW_NEWS,
    });
  },
};
