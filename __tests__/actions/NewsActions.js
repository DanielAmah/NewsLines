/* global expect jest test */
import dispatcher from '../../src/dispatcher';
import * as NewsAction from '../../src/Actions/NewsAction';
import newsApi from '../../src/utils/NewsApi';

// Mock the dispatcher and NewsApi.
jest.mock('../../src/dispatcher');
jest.mock('../../src/utils/NewsApi');

// Setup the actual mock functions for the relevant functions.
// const dispatch = dispatcher.dispatch.mock;

const newsApiGet = newsApi.get;

newsApiGet.mockReturnValue(Promise.resolve({ data: 'This is the data' }));
const dispatchSpy = jest.spyOn(dispatcher, 'dispatch');

describe('NewsActions', () => {
  test('should call newsActions.getSources() on getSources', () => {
    NewsAction.getSources();
    expect(newsApiGet.mock.calls.length).toBe(1);
  });

  test('should call newsActions.getArticles()', () => {
    NewsAction.getArticles();
    expect(newsApiGet.mock.calls.length).toBe(2);
  });

  test('should dispatch appropriate action type when called', () => {
    NewsAction.getSources();
    const action = dispatchSpy.mock.calls[0][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual('GET_SOURCES');
  });

  test('should dispatch appropriate action type when called', () => {
    NewsAction.getArticles();
    const action = dispatchSpy.mock.calls[0][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual('GET_SOURCES');
  });
});
