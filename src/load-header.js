export default function loadHeaderContent() {
    const template = document.createElement('template');

    template.innerHTML = '<a href="./index.html"><h1>Ghibili Films</h1></a>';
    return template.content;
}

const header = document.getElementById('header');
export function loadHeader() {
    const dom = loadHeaderContent();
    header.appendChild(dom);
}