export default function makeDetailTemplate(queen) {
    const template = document.createElement('template');

    template.innerHTML = `
    <div id="queen-detail-container">
        <h3 id="name">${queen.name}</h3>
        <img src=${queen.image_url}>
        <table>
            <tbody>
                <tr>
                    <th>Quote:</th>
                    <td>'${queen.quote}'</td>
                </tr>
                <tr>
                    <th>Season:</th>
                    <td>${queen.seasons[0].id}</td>
                </tr>
                <tr>
                    <th>Place:</th>
                    <td>${queen.seasons[0].place}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    return template.content;
}
