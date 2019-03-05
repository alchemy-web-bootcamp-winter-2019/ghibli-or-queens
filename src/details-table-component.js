export function makeQueenDetails(queen) {
   const template = document.createElement('template');
   const html = `
   <dl>
      <dt>Name:</dt>
      <dd>${queen.name}</dd>
      <dt>Quote:</dt>
      <dd>${queen.quote}</dd>
      <dt>Winner:</dt>
      <dd>${queen.winner ? 'Yes' : 'No'}</dd>
      <dt>Number of Episodes:</dt>
      <dd>${queen.episodes.length}</dd>
   </dl>
   `;
   template.innerHTML = html;
   return template.content;
}


export default function loadQueenDetails(queen) {
   const queenDetailsNode = document.getElementById('queen-details');
   const queenDetails = makeQueenDetails(queen);
   queenDetailsNode.appendChild(queenDetails);
}