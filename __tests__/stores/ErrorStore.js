/* global expect jest describe it beforeEach */
import dispatcher from '../../src/dispatcher';
import errorStore from '../../src/store/ErrorStore';

jest.mock('../../src/dispatcher');
describe('Errors Store', () => {
  let callback;

  const errors = {
    type: 'GET_ERRORS',
    message: 'Failed to Load Page, Please try again'
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no errors', () => {
    expect(errorStore.errorMessage.length).toBe(0);
  });

  it('should return the appropraite result', () => {
    callback(errors);
    expect(errorStore.getErrors().length).toBe(37);
    expect(errorStore.getErrors()).toEqual(
      'Failed to Load Page, Please try again'
    );
  });
});
