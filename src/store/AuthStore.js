import ObjectAssign from 'object-assign';
import dispatcher from '../dispatcher';
import Constants from '../constants/constants';
/**
 * emit an event to change the user state
 * Check if user is authenticated.
 */

const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

const store = {
  user: null,
};

const AuthStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getUser() {
    return store;
  },
  removeUser() {
    return store;
  },
});

dispatcher.register((payload) => {
  const action = payload.action;
  const newUser = action;
  switch (action.actionType) {
  case Constants.AUTH:
    store.user = newUser;
    AuthStore.emit(CHANGE_EVENT);
    break;
  case Constants.LOGOUT:
    window.location.href = '/';
    if (action) {
      store.user = null;
      AuthStore.emit(CHANGE_EVENT);
    }
    break;
  default:
    return true;
  }
});

export default AuthStore;
