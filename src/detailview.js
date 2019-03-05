export default function renderDetailItems(movie) {
    const html = `<dl> <dt>title</dt>

<dl>${movie.title}</dl>

<dt>description</dt>

<dl>${movie.description}</dl> 
<dt>director</dt> 
<dl>${movie.director}</dl>

<dt>producer</dt> 
<dl>${movie.producer}</dl> 
</dl>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function loadFields(filmObject) {
    const dom = renderDetailItems(filmObject);
    const fieldNode = document.getElementById('detail-description');
    fieldNode.appendChild(dom);
}