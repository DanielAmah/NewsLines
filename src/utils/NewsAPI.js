import request from 'superagent';
import NewsServer from '../Actions/NewsServerAction';
/**
 * API call to retrieve news from news end point
 */
export default {
  get(source, sort) {
    request.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${process.env.API_KEY}`)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          document.write('No news here');
          return (err);
        }
        return NewsServer.receiveArticle(response.body);
      });
  },
};

