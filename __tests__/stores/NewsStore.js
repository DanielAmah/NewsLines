/* global expect jest describe it beforeEach */
import dispatcher from '../../src/dispatcher';
import mockApi from '../../__mocks__/MockApi.json';
import NewsStore from '../../src/store/NewsStore';

jest.mock('../../src/dispatcher');
describe('News Store', () => {
  let callback;

  const articles = {
    type: 'NEW_NEWS',
    articles: mockApi
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no article', () => {
    expect(NewsStore.articles.length).toBe(0);
  });

  it('should return the appropraite result', () => {
    callback(articles);
    expect(NewsStore.getArticles().length).toBe(10);
    expect(NewsStore.getArticles()).toEqual(mockApi);
  });
});
