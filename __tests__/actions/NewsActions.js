import dispatcher from '../../src/dispatcher';
import NewsAction from '../../src/Actions/NewsAction';
import NewsServerAction from '../../src/Actions/NewsServerAction';
import AuthAction from '../../src/Actions/AuthAction';
import LogoutAction from '../../src/Actions/LogoutAction';

import API from '../../src/utils/NewsAPI';

jest.mock('../../src/dispatcher');
jest.mock('../../src/utils/NewsAPI');

const NewsAPIGet = API.get;

NewsAPIGet.mockReturnValue(Promise.resolve({ data: 'info from API' }));

describe('Receive info Action', () => {
  test('', () => {
    NewsAction.receiveArticle();
    expect(NewsAPIGet.mock.calls.length).toBe(1);
  });
  test('', () => {
    NewsServerAction.receiveArticle();
    expect(NewsAPIGet.mock.calls.length).toBe(1);
  });
});

describe('Auth Action', () => {
  test('gets a user', () => {
    expect(AuthAction.getUser());
  });
});


describe('Logout Action', () => {
  it('gets a user', () => {
    expect(LogoutAction.logout());
  });
});
