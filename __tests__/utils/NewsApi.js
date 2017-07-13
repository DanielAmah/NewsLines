/* global expect jest test */
import newsApi from '../../src/utils/NewsApi';

describe('News Api Axios Call', () => {
  test('should returns a promise resolve from the Api', () => {
    const spy = jest.spyOn(newsApi, 'get');
    const articles = newsApi.get();

    expect(spy).toHaveBeenCalled();
    expect(articles).toEqual(Promise.resolve());
  });
});
