export default function filmDetailTemplate(film) {
    const template = document.createElement('template');
    template.innerHTML = `
    <tbody>
        <tr>
            <th>Title</th>
            <td>${film.title}</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>${film.description}</td>
        </tr>
        <tr>
            <th>Director</th>
            <td>${film.director}</td>
        </tr>
        <tr>
            <th>Producer</th>
            <td>${film.producer}</td>
        </tr>
        <tr>
            <th>Release Date</th>
            <td>${film.release_date}</td>
        </tr>
        <tr>
            <th>RT Score</th>
            <td>${film.rt_score}</td>
        </tr>
    </tbody>
    `;

    return template.content;
}