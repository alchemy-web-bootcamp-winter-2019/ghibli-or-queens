import loadQueenList from './queen-list-component.js';

const URL = 'http://www.nokeynoshade.party/api/queens/all';

fetch(URL)
   .then(response => response.json())
   .then(queenList => {
      loadQueenList(queenList);
   })
   .catch(err => {
      console.log('fetch error', err);
   });

