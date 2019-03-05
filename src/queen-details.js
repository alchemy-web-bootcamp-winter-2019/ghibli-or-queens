import loadQueenDetails from './details-table-component.js';

const searchParams = new URLSearchParams(window.location.search);
const queenID = searchParams.get('id');

URL = `http://www.nokeynoshade.party/api/queens/${queenID}`;

fetch(URL)
   .then(response => response.json())
   .then(queen => {
      loadQueenDetails(queen);
   })
   .catch(err => {
      window.location = './';
      console.log('fetch error', err);
   });