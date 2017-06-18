import dispatcher from '../dispatcher';
import Constants from '../constants/constants';
import NewsAPI from '../utils/NewsAPI';

export default{
  receiveArticle(source, sort) {
    NewsAPI.get(source, sort);
    dispatcher.handleViewAction({
      actionType: Constants.NEW_NEWS,
    });
  },
};
