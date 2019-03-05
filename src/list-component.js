export function makeListTemplate(queen) {
    const html = /*html*/
    `<li><a href="queen-detail.html?id=${queen.id}">${queen.name}</a><img src="${queen.image_url}"></li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}