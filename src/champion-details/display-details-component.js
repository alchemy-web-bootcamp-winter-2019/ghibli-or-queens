export function makeDetailsHeaderTemplate(champion) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div>
            <h1>${champion.name}</h1>
            <h2>${champion.title}</h2>
            <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg">
        </div>
    `;
    return template.content;
}

export function makeDetailsMainTemplate(champion) {
    const template = document.createElement('template');
    template.innerHTML = `
        <section id="lore">
            <h3>Lore</h3>
            <p>
                ${champion.lore}
            </p>
        </section>
    `;
    return template.content;
}

const header = document.getElementById('header');
const main = document.getElementById('main');

export default function loadDetails(champion) {
    header.appendChild(makeDetailsHeaderTemplate(champion));
    main.appendChild(makeDetailsMainTemplate(champion));
}