export default function headerTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <h1><a href="index.html">Studio Ghibli</a></h1>
    `;
    
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export function loadHeader() {
    const dom = headerTemplate();
    headerContainer.appendChild(dom);
}