/* global expect jest describe it beforeEach */
import dispatcher from '../../src/dispatcher';
import mockApi from '../../__mocks__/MockApi.json';
import SourceStore from '../../src/store/SourceStore';

jest.mock('../../src/dispatcher');
describe('Sources Store', () => {
  let callback;

  const sources = {
    type: 'GET_SOURCES',
    sources: mockApi
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no sources', () => {
    expect(SourceStore.getSources().length).toBe(0);
  });

  it('should return the appropraite result', () => {
    callback(sources);
    expect(SourceStore.getSources().length).toBe(10);
    expect(SourceStore.getSources()).toEqual(mockApi);
  });
});
