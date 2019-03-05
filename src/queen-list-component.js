export function makeQueenItem(queen) {
   const template = document.createElement('template');
   const html = `<li><a href="queen-details.html?id=${queen.id}">${queen.name}</a></li>`;
   template.innerHTML = html;
   return template.content;
}

export default function loadQueenList(queenList) {
   const queenListNode = document.getElementById('queen-list');
   queenList.forEach(queen => {
      const queenLI = makeQueenItem(queen);
      queenListNode.appendChild(queenLI);
   });
}
