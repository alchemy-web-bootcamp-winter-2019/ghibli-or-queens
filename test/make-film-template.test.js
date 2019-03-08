const test = QUnit.test;

QUnit.module('Making tests for the film template');

const film = {
    title: 'Castle in the Sky',
    released: 1986,
    description: 'Lorem ipsum blah Lorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blah',
    director: 'Hayao Miyazaki',
    producer: 'Isao Takahata',
    rt_score: 95
};

function makeFilmTemplate(film) {
    const html = /*html*/ `
    <dl id="film-detail">
        <dt>Title:</dt>
        <dd>${film.title}</dd>
        <dt>Released:</dt>
        <dd>${film.released}</dd>
        <dt>Description:</dt>
        <dd>${film.description}</dd>
        <dt>Director:</dt>
        <dd>${film.director}</dd>
        <dt>Producer:</dt>
        <dd>${film.producer}</dd>
        <dt>RT Score:</dt>
        <dd>${film.rt_score}</dd>
    </dl>
    `; 
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make film list template', assert => {
    //Arrange

    //Act
    const result = makeFilmTemplate(film);
    const expected = /*html*/ `
    <dl id="film-detail">
        <dt>Title:</dt>
        <dd>Castle in the Sky</dd>
        <dt>Released:</dt>
        <dd>1986</dd>
        <dt>Description:</dt>
        <dd>Lorem ipsum blah Lorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blah</dd>
        <dt>Director:</dt>
        <dd>Hayao Miyazaki</dd>
        <dt>Producer:</dt>
        <dd>Isao Takahata</dd>
        <dt>RT Score:</dt>
        <dd>95</dd>
    </dl>
    `;
    //Assert
    assert.htmlEqual(result, expected);
});