export function makeListTemplate(champion) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <a href="./champion-details.html?champion=${champion.id}">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.id}.png">
                <h2>${champion.name}</h2>
            </a>
        </li>
    `;
    return template.content;
}

const championsDisplay = document.getElementById('champions-display');
export default function loadList(championsArr, championsObjs) {
    championsArr.forEach(champion => {
        const dom = makeListTemplate(championsObjs[champion]);
        championsDisplay.appendChild(dom);
    });
}
 