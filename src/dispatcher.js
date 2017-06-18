const Dispatcher = require('flux').Dispatcher;

const dispatcher = new Dispatcher();

dispatcher.handleViewAction = function articles(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action,
  });
};

dispatcher.handleServerAction = function apiControl(action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action,
  });
};

dispatcher.handleServerAction = function auth(action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action,
  });
};

export default dispatcher;
