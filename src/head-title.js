function headTitleTemplate(film) {
    const template = document.createElement('template');
    template.innerHTML = `
    <title id="head-title">${film.title}</title>
    `;

    return template.content;
}

const head = document.getElementById('head');

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json())
    .then(results => {
        loadHead(results);
    });

export function loadHead(film) {
    const dom = headTitleTemplate(film);
    head.appendChild(dom);
}