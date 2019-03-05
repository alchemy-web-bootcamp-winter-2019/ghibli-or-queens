export function movieDetailsTemplate(movie) {
    const html = `
  <dl>
    <span>
      <dt>Title:</dt>
      <dd>${movie.title}</dd>
    </span>
    <span>
      <dt>Description:</dt>
      <dd>${movie.description}</dd>
    </span>
    <span>
      <dt>Release Date:</dt>
      <dd>${movie.release_date}</dd>
    </span>
    <span>
      <dt>Producer:</dt>
      <dd>${movie.producer}</dd>
    </span>
  </dl>
  `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
