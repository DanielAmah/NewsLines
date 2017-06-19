import API from '../../src/utils/NewsAPI';

describe('News API  Call', () => {
  it('should make a get request', () => {
    const spy = jest.spyOn(API, 'get');
    const data = API.get();
    expect(spy).toHaveBeenCalled();
    });
});

