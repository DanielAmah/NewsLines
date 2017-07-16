import axios from 'axios';
/**
 * @description  make api calls using axios
 * @class NewsApi
 * @returns {Promise} a promise
 */
class NewsApi {
  /**
   * @static
   * @param {string} link - Takes in a link parameter
   * @memberof NewsApi
   * @return {Promise} - Returns a promise
   */
  static get(link) {
    return axios
      .get(link)
      .then(response => response.data);
  }
}

export default NewsApi;
