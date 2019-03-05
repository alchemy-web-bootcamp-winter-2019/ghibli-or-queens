import './html-equal.js';
import makeListTemplate from '../src/make-list-template.js';

const test = QUnit.test;

test('template for list item matches hard coded HTML', assert => {
    //arrange
    const film = {
        'id': '12345',
        'title': 'Castle in the Sky',
        'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95'
    };

    //act
    const result = makeListTemplate(film);

    //assert
    assert.htmlEqual(result, `<li><a href="detail.html?id=12345">Castle in the Sky</a> <span>(1986)</span></li>`);
});

function makeDetailTemplate(film) {
    const dom = `            
    <dl>
        <dt>Title:</dt>
        <dd>${film.title}</dd>
        <dt>Summary:</dt>
        <dd>${film.description}</dd>
        <dt>Director:</dt>
        <dd>${film.director}</dd>
        <dt>Producer:</dt>
        <dd>${film.producer}</dd>
        <dt>Release Date:</dt>
        <dd>${film.release_date}</dd>
        <dt>RT Score:</dt>
        <dd>${film.rt_score}</dd>
    </dl>`;

    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

test('template for film detail matches hard coded HTML', assert => {
    //arrange

    const film = {
        'id': '12345',
        'title': 'Castle in the Sky',
        'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95'
    };
    //act
    const result = makeDetailTemplate(film);

    //assert
    assert.htmlEqual(result, `            
    <dl>
        <dt>Title:</dt>
        <dd>Castle in the Sky</dd>
        <dt>Summary:</dt>
        <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.</dd>
        <dt>Director:</dt>
        <dd>Hayao Miyazaki</dd>
        <dt>Producer:</dt>
        <dd>Isao Takahata</dd>
        <dt>Release Date:</dt>
        <dd>1986</dd>
        <dt>RT Score:</dt>
        <dd>95</dd>
    </dl>`);
});