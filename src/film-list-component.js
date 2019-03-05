export default function renderHtmlMovieList(movieName){
    const html = `<li>
    <a href="./film-details.html">${movieName.title}</a>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}