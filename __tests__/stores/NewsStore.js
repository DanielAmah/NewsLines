import expects from 'expect';

import NewsStore from '../../src/store/NewsStore';
import dispatcher from '../../src/dispatcher';
import constants from '../../src/constants/constants';

jest.dontMock('../../src/store/NewsStore.js');

describe('', () => {
  it('should exist', () => {
    expects(NewsStore).toExist();
  });
  it('should return an empty array when instance is created', () => {
    expect(NewsStore.getList().list).toBe(null);
  });
  it('should respond to a dispatch call', () => {
    dispatcher.handleViewAction({
      type: constants.NEW_NEWS,
    });
  });
});
