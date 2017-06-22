import request from 'superagent';
import NewsServer from '../Actions/NewsServerAction';

export default {
  get(source, sort) {
    request.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=` + process.env.API_KEY)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          return (err);
        }
        return NewsServer.receiveArticle(response.body);
      });
  },
};

