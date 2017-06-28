import mockApi from './MockApi.json';

const apiCall = {
  get() {
    return Promise.resolve(mockApi);
  }
};

export default apiCall;
