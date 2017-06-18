import dispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  logout(info) {
    dispatcher.handleServerAction({
      actionType: Constants.LOGOUT,
      info,
    });
  },
};
