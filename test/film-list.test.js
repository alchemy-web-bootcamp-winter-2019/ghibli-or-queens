const test = QUnit.test;

QUnit.module('film list template');

function filmListTemplate(film) {
    const template = document.createElement('template');

    template.innerHTML = `
        <li>
            <a href="./film-detail.html?id=${film.id}">${film.title}</a>
            (${film.release_date})
        </li>
    `;

    return template.content;
}


const film = {
    'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    'title': 'Castle in the Sky',
    'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
    'director': 'Hayao Miyazaki',
    'producer': 'Isao Takahata',
    'release_date': '1986',
    'rt_score': '95'
};

test('make html template for film list item', assert => {
    const result = filmListTemplate(film);
    const expected = `
    <li>
        <a href="./film-detail.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a>
        (1986)
    </li>
    `;

    assert.htmlEqual(result, expected);
});