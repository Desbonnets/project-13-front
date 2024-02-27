import {fetchPostData, fetchPutData} from "./fetch";

/**
 * Permet de récupérer la liste des utilisateurs
 * @param {String} token JWT Token
 * @returns {any} Retourne la reponse de l'api
 */
export async function fetchProfil(token) {

    try {
        const data = await fetchPostData('http://localhost:3001/api/v1/user/profile', null, token);

        if(data.error !== undefined){
            throw new Error(data.error);
        }else {
            return data;
        }

    } catch (error) {
        throw new Error(error.message || 'An error occurred during the request' );
    }
}

/**
 * Permet de récupérer la liste des utilisateurs
 * @param {Object} newProfile
 * @param {String} token JWT Token
 * @returns {any} Retourne la reponse de l'api
 */
export async function fetchEditProfil(newProfile, token) {
    try {
        const data = await fetchPutData('http://localhost:3001/api/v1/user/profile', newProfile, token);

        if(data.error !== undefined){
            throw new Error(data.error);
        }else {
            return data;
        }

    } catch (error) {
        throw new Error(error.message || 'An error occurred during the request' );
    }
}