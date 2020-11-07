import { quizApi } from '../config/conf';
import { httpClient } from './httpClient';

/**
 * @description Get All themes 
 */
const getThemes =  () => {
    const url = quizApi.themes;
    return  httpClient.get(url);
}

export {getThemes};