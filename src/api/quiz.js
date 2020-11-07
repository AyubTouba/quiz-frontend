import { quizApi } from '../config/conf';
import { httpClient,RequestConfig } from './httpClient';


/**
 * @description Get list of quizes by theme id 
 * @param {number} idTheme
 */
const getListQuizByTheme =  (idTheme) => {
    const url = quizApi.quiz + "?theme_id=" + idTheme;
    return  httpClient.get(url,RequestConfig);
}
/**
 * @description Get Quiz by Id 
 * @param {number } idQuiz
 */
const getQuizById =  (idQuiz) => {
    const url = quizApi.quiz + "/" + idQuiz;
    return  httpClient.get(url,RequestConfig);
}

export {getListQuizByTheme,getQuizById};