export default function renderListItem(movie) {
    const template = document.createElement('template');
    const html = `<li class = "card">
    <a href="../detailview.html?id=${movie.id}">${movie.title}</a></li>`;
    template.innerHTML = html;
    return template.content;
}    