const test = QUnit.test;

QUnit.module('film detail');

import { filmDetailTemplate } from '../src/film-detail.js';

test('film details template', assert => {
    // arrange
    const film = {
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        'title': 'Castle in the Sky',
        'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95'
    };
    // act
    const results = filmDetailTemplate(film);
    // assert
    assert.htmlEqual(results, `
    <tbody>
        <tr>
            <th>Title</th>
            <td>Castle in the Sky</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</td>
        </tr>
        <tr>
            <th>Year</th>
            <td>1986</td>
        </tr>
        <tr>
            <th>Director</th>
            <td>Hayao Miyazaki</td>
        </tr>
        <tr>
            <th>Producer</th>
            <td>Isao Takahata</td>
        </tr>
        <tr>
            <th>RT_score</th>
            <td>95</td>
        </tr>
    </tbody>
    `);
});