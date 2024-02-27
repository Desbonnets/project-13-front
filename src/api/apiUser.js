import {fetchPostData} from "./fetch";
/**
 * Permet de nous connecter
 * @param {Object} userCredentials {email: 'test@test.com', password: 'test'}
 * @returns {any} Retourne la reponse de l'api
 */
export async function fetchUserLogin(userCredentials) {

    try {
        const data = await fetchPostData('http://localhost:3001/api/v1/user/login',userCredentials);

        if(data.error !== undefined){
            throw new Error(data.error);
        }else {
            return data;
        }

    } catch (error) {
        throw new Error(error.message || 'An error occurred during the request' );
    }
}