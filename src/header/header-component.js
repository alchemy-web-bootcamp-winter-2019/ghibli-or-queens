export function makeHeader(isLink) {
    const html = /*html*/
    `<section id="header-section">
        <img src="../../assets/ghibli-logo.png">
        <h1>Films</h1>
        ${isLink ? `<a href="index.html" id="all-films-link">
        All Films</a>` : ''}
    </section>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const header = document.getElementById('header');

export default function loadHeader(isLink) {
    const dom = makeHeader(isLink);
    header.appendChild(dom);
}