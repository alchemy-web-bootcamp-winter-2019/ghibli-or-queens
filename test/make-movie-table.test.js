import { makeMovieTable } from '../src/movie-detail-component.js';
const test = QUnit.test;

const movie = 
    {
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: 1986,
        rt_score: 95,
    };

test('make movie detail table from template', assert => {
    const expected = `
    <dl>
    <dt>Title:</dt>
    <dd>Castle in the Sky</dd>
    <dt>Director:</dt>
    <dd>Hayao Miyazaki</dd>
    <dt>Producer:</dt>
    <dd>Isao Takahata</dd>
    <dt>Description:</dt>
    <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dd>
    <dt>Release Date:</dt>
    <dd>1986</dd>
    <dt>Rotten Tomatoes Score</dt>
    <dd>95</dd>
</dl>`;

    const result = makeMovieTable(movie);

    assert.htmlEqual(result, expected);
});