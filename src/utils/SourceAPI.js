import request from 'superagent';

const get = () => {
  request.get('https://newsapi.org/v1/sources?language=en')
    .end((error, response) => {
      if (error) {
        return error;
      }
      return (response.body);
    });
};

export default get;
