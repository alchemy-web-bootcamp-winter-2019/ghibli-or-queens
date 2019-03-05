const template = document.createElement('template');

export function makeListItem(filmObject) {
    const html = `<li>${filmObject.title}</li>`;
    template.innerHTML = html;
    return template.content;
}