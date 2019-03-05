import loadDetails from './display-details-component.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('champion');
const URL = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${id}.json`;
console.log(id);

fetch(URL)
    .then(response => response.json())
    .then(result => result.data[id])
    .then(loadDetails);