export default function renderHtmlMovieList(movieName){
    const html = `<li>
    <a href="./film-details.html?id=${movieName.id}">${movieName.title}</a>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieList = document.getElementById('movie-list');

export function loadMovieList(movieArray){
    movieArray.forEach(oneMovie => {
        const displayMovie = renderHtmlMovieList(oneMovie);
        movieList.appendChild(displayMovie);
    });
}

