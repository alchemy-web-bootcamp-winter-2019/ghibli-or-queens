export default function movieListTemplate(movie) {
    return `
    <li>
      <a href="${movie.url}">${movie.title}</a>
    </li>
    `;
}