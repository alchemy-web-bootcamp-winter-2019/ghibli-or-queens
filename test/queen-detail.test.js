const test = QUnit.test;

QUnit.module('Queen Detail');

import makeDetailTemplate from '../src/queen-detail.js';

test('does the hardcoded html match the dynamically created html for the queen detail page', assert => {
    //arrange
    const queen = {
        id: '89',
        name: 'Trixie Mattel',
        quote: 'Okay, calm down there public school.',
        image_url: 'https://pbs.twimg.com/profile_images/969470926235492352/afGetjal_400x400.jpg',
        seasons: [
            {
               "id": 7,
               "place": 6
             },
            ]
    }

    //act
    const results = makeDetailTemplate(queen);

    //assert
    assert.htmlEqual(results, `
    <div id="queen-detail-container">
        <h3 id="name">Trixie Mattel</h3>
        <img src="https://pbs.twimg.com/profile_images/969470926235492352/afGetjal_400x400.jpg">
        <table>
            <tbody>
                <tr>
                    <th>Quote:</th>
                    <td>'Okay, calm down there public school.'</td>
                </tr>
                <tr>
                    <th>Season:</th>
                    <td>7</td>
                </tr>
                <tr>
                    <th>Place:</th>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    </div>
    `);
})
        
        