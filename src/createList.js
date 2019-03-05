export function createList(movie) {
    const html = `
    <span>
        <li>
        <a href=${movie.url}>${movie.title} (${movie.release_date})</a>
        </li>
    </span>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const listContainer = document.getElementById('list-container');
export default function loadList(movieList){
    movieList.forEach((movie) => {
        const dom = createList(movie);
        listContainer.appendChild(dom);
    });        
}
