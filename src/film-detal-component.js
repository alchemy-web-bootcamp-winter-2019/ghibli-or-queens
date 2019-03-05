export function createTable(movieObject) {
    const template = document.createElement('template');
    const html = 
    `
    <dl>
    <dt>Title:</dt>
    <dd>${movieObject.title}</dd>
    <dt>Producer:</dt>
    <dd>${movieObject.producer}</dd>
    <dt>Description:</dt>
    <dd>${movieObject.description}</dd>
    </dl>
    `;
    template.innerHTML = html;
    return template.content;
   
}