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
                    throw new Error(`Request failed with statuts code ${response.status}`);
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
    let header = token ? ({'Authorization': 'Bearer ' + token}) : '';

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

export async function fetchPostData (url, data=null, token=null) {
    let options;
    if(token !== null && data !== null){
        options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
                mode: 'cors',
            };
    }else if(token !== null) {
        options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            mode: 'cors',
        };
    }else if(data !== null) {
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
        };
    }else{
        console.error("data=null && token=null");
    }

    return fetchData(url, options);
}

/**
 * fetch data en methode PUT
 * @param {String} url
 * @param {Object} data
 * @param {String} token
 * @return {Promise<Response|{error}>} data or error
 */

export async function fetchPutData(url, data=null, token=null) {
    console.log(data);
    let options;
    if(token !== null && data !== null){
        options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
                mode: 'cors',
            };
    }else if(token !== null) {
        options = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            mode: 'cors',
        };
    }else if(data !== null) {
        options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
        };
    }else{
        console.error("data=null && token=null");
    }

    return fetchData(url, options);
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