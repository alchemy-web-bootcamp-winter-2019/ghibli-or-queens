export default function renderHtmlMovieInfo(movieName){
    const html = /*html*/ `<dl>
        <dt>Title:</dt>
        <dd>${movieName.title}</dd>
        <dt class="info">Description:</dt>
        <dd>${movieName.description}</dd>
        <dt class="info">Director:</dt>
        <dd>${movieName.director}</dd>
        <dt class="info">Producer:</dt>
        <dd>${movieName.producer}</dd>
        <dt class="info">Release Date:</dt>
        <dd>${movieName.release_date}</dd>
        <dt class="info">RT Score:</dt>
        <dd>${movieName.rt_score}</dd>
        </dl>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}


export function loadMovieDescription(movieNode){
    const filmDescription = document.getElementById('film-description');
    const dom = renderHtmlMovieInfo(movieNode);
    filmDescription.appendChild(dom);
}

