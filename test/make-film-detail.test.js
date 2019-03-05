import { makeFilmDetail } from '../src/film-detail/film-detail-component.js';

const test = QUnit.test;

QUnit.module('generate film detail');

const film = {
    title: 'Castle in the Sky',
    description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
    director: 'Hayao Miyazaki',
    producer: 'Isao Takahata',
    release_date: '1986',
    rt_score: 95
};

test('make template for details on each film', assert => {
    const result = makeFilmDetail(film);
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
        <dt>Release Date:</dt>
            <dd>1986</dd>
        <dt>RT Score:</dt>
            <dd>95</dd>
    </dl>`;

    assert.htmlEqual(result, expected);
});