export function detailPageTemplate(filmObject) {
    const html = /*hml*/`
    <section id  ="film-info">
            <dl>Name:</dl>
            <dt>${filmObject.title}</dt>
            <dl>Description:</dl>
            <dt>${filmObject.description}</dt>
            <dl>Director:</dl>
            <dt>${filmObject.director}</dt>
            <dl>Release Date:</dl>
            <dt>${filmObject.release_date}</dt>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function buildFilmDetails(filmObject) {
    const filmInfoNode = document.getElementById('film-info');
    console.log(filmInfoNode); 
    const dom = detailPageTemplate(filmObject);
    filmInfoNode.appendChild(dom);
}