export function makeListOfFilms(film) {
    const html = /*html*/ `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}