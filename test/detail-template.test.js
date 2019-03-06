import { makeFilmDetail } from '../src/detail-component.js';
const test = QUnit.test;

test('make detail page html', assert => {
    //arrange
    const film = {
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        'title': 'Castle in the Sky',
        'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95'
    };
    const expected = /*html*/
    `<dl>
    <dt>Title:</dt>
    <dd>Castle in the Sky</dd>
    <dt>Description:</dt>
    <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dd>
    <dt>Director:</dt>
    <dd>Hayao Miyazaki</dd>
    <dt>Producer:</dt>
    <dd>Isao Takahata</dd>
    <dt>Release:</dt>
    <dd>1986</dd>
    </dl>`;
    //act
    const filmDetail = makeFilmDetail(film);
    //assert
    assert.htmlEqual(filmDetail, expected);
});