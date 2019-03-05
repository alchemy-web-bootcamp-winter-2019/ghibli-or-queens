import loadDetail from './detail-component.js';

const URL = 'http://www.nokeynoshade.party/api/queens/all';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

if(!id) {
    window.location = './';
}

fetch(URL + id)
    .then(response => response.json())
    .then(queen => {
        loadDetail(queen);
    })
    .catch(err => {
        console.error('fetch error', err)
    });