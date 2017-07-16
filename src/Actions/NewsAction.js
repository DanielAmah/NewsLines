/* global window */
import Dispatcher from '../dispatcher';
import NewsApi from '../utils/NewsApi';
import * as constants from '../constants/constants';


/**
* @function getFailed
* @param  {string} error {pass in an error argument as a parameter}
* @return {string} {returns a message 'Failed to Load Page, Please Try Again}
*/
export const getFailed = (error) => {
  Dispatcher.dispatch({
    type: constants.ERRORS,
    message: 'Failed to Load Page, Please Try Again',
    cause: error.message
  });
};

/**
* @function getSources
* @return {Promise} {return a promise, resolve the promise and dispatch it to the sources store}
*/
export const getSources = () => {
  const link = 'https://newsapi.org/v1/sources';
  NewsApi
    .get(link)
    .then((source) => {
      const sourcesList = source.sources;
      Dispatcher.dispatch({
        type: constants.SOURCES,
        sources: sourcesList
      });
    })
    .catch((error) => {
      getFailed(error);
    });
};

/**
* @function getArticles
* @param  {string} source {pass in the source as a parameter in the Api call}
* @param  {type} sortBy {pass in sortBy as a parameter in the Api call}
* @return {promise} {returns a promise that is resolved and dispatched to teh article store}
*/
export const getArticles = (source, sortBy) => {
  const api = 'https://newsapi.org/v1/articles?source=';
  const key = process.env.API_KEY;
  const link = `${api}${source}&sortBy=${sortBy}&apiKey=${key}`;
  NewsApi
    .get(link)
    .then((article) => {
      const articlesList = article.articles;
      Dispatcher.dispatch({
        type: constants.NEW_NEWS,
        articles: articlesList
      });
    })
    .catch((error) => {
      getFailed(error);
    });
};
