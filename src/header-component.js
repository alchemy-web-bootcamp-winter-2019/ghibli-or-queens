export function makeHeader(isLink) {
    const html = /*html*/
    `<section id="header-section">
        <img src="assets/logo.png">
        <h1>Studio Ghibli Films</h1>
        ${isLink ? `<a id="index-link" href="index.html">Back to All Films</a>
        </section>` : ''} </section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const header = document.getElementById('header');

export default function loadHeader(isLink) {
    const dom = makeHeader(isLink);
    header.appendChild(dom);
}
