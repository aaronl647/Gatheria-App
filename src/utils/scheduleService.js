const BASE_URL = '/api/users';

function getAll() {
    return fetch(BASE_URL)  
    .then(res => res.json());
}

function createDate(date) {
    return fetch(BASE_URL + '/create',  {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(date)
    }).then(res => res.json());
}

export default {
    getAll,
    createDate,
}