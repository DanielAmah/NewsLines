import dispatcher from '../dispatcher';
import Constants from '../constants/constants';

/**
 *  Logout acion creator
 */
export default{
  logout(info) {
    dispatcher.handleServerAction({
      actionType: Constants.LOGOUT,
      info,
    });
  },
};
