/**
 * fetch data
 * @param {String} url
 * @param {Object} option
 * @return {Promise<Response|{error}>}
 */
async function fetchData(url, options){

    return await fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                if (response.status === 400) {
                    throw new Error('Request failed with statuts code 400');
                } else {
                    throw new Error(`Request failed with status code ${response.status}`);
                }
            }
        })
        .catch(error => ({ error: error.message || 'An error occurred during the request' }));
}

/**
 * fetch data en methode GET
 * @param {String} url
 * @param {String} token
 * @return {Promise<Response|{error}>} data or error
 */

export async function fetchGetData (url, token) {
    let header = token ? ({'authorization': 'Bearer ' + token}) : '';

    let options = {
        method: 'GET',
        headers: header,
        mode: 'cors',
    };

    return fetchData(url, options);
}

/**
 * fetch data en methode POST
 * @param {String} url
 * @param {FormData} formData
 * @param {String} token
 * @return {Promise<Response|{error}>} data or error
 */

export async function fetchPostData (url, data, token=null) {
    let options;
    if(token !== null){
        options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
                mode: 'cors',
            };
    }else {
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
        };
    }

    return fetchData(url, options);
}

/**
 * fetch data en methode PUT
 * @param {String} url
 * @param {String} token
 * @return {Promise<Response|{error}>} data or error
 */

export async function fetchPutData (url, token) {
    // options à faire et la requête a envoyé
}

/**
 * fetch data en methode DELETE
 * @param {String} url
 * @param {String} token
 * @return {Promise<Response|{error}>} data or error
 */

export async function fetchDeleteData (url, token) {
    // options à faire et la requête a envoyé
}