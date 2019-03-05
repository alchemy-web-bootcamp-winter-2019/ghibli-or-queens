export function makeDetailHtml(movieObject) {
    const html = `
    <tbody>
        <tr>
            <th>Title:</td> <td>${movieObject.title}</td>
        </tr>
        <tr>
            <th>Description:</th>
            <td id="description">${movieObject.description}</td>
        </tr>
        <tr>
            <th>Director:</th>
            <td>${movieObject.director}</td>
        </tr>
        <tr>
            <th>Producer:</th>
            <td>${movieObject.producer}</td>
        </tr>
        <tr>
            <th>Release Date:</th>
            <td>${movieObject.release_date}</td>
        </tr>
        <tr>
            <th>Rotten Tomato:</th>
            <td>${movieObject.rt_score}</td>
        </tr> 
    </tbody>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function buildFilmDetails(idMovieObject) {
    const detailTableNode = document.getElementById('detail-table');
    const dom = makeDetailHtml(idMovieObject);
    detailTableNode.appendChild(dom);
}