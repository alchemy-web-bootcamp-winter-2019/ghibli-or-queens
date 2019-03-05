import loadList from './display-component.js';

const URL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';

fetch(URL)
    .then(response => response.json())
    .then(result => result.data)
    .then(championsObjs => {
        const championsArr = Object.keys(championsObjs);
        loadList(championsArr, championsObjs);
    });