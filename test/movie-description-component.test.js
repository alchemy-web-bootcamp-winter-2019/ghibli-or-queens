import renderHtmlMovieInfo from '../src/film-description-component.js';
const test = QUnit.test;

QUnit.module('make template for movie description');

test('make template literal for movie description html', function(assert){
    //arrange
    const movieName = {
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        'title': 'Castle in the Sky',
        'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95',
    };
    //act
    const result = renderHtmlMovieInfo(movieName);
    const expected = /*html*/`<section>
        <dt>Title:</dt>
        <dd>Castle in the Sky</dd>
        <dt class="info">Description:</dt>
        <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dd>
        <dt class="info">Director:</dt>
        <dd>Hayao Miyazaki</dd>
        <dt class="info">Producer:</dt>
        <dd>Isao Takahata</dd>
        <dt class="info">Release Date:</dt>
        <dd>1986</dd>
        <dt class="info">RT Score:</dt>
        <dd>95</dd>
        </section>`;
    //assert
    assert.htmlEqual(result, expected);
});