import ObjectAssign from 'object-assign';
import dispatcher from '../dispatcher';
import Constants from '../constants/constants';

/**
 * emit an event and update the article state.
 */
const EventEmitter = require('events').EventEmitter;


const CHANGE_EVENT = 'change';

const store = {
  list: null,
};


const NewsStore = ObjectAssign({}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList() {
    return store;
  },
  listInfo() {
    return store.list;
  },
});

dispatcher.register((payload) => {
  const action = payload.action;
  const newArticle = action.response;
  switch (action.actionType) {
    case Constants.NEW_NEWS:
      store.list = newArticle;
      NewsStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default NewsStore;
