import { makeListTemplate } from '../src/display-component.js';
const test = QUnit.test;

QUnit.module('List template');


test('List template test: Aatrox', assert => {
    // Arrange
    const expected = `
        <li>
            <a href="./champion-details.html?champion=Aatrox">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png">
                <h2>Aatrox</h2>
            </a>
        </li>
    `;
    const champion = {
        "id": "Aatrox",
        "name": "Aatrox",
    };
    // Act
    const result = makeListTemplate(champion);

    // Assert
    assert.htmlEqual(result, expected);
});

test('List template test: Cho\'Gath', assert => {
    // Arrange
    const expected = `
        <li>
            <a href="./champion-details.html?champion=Chogath">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Chogath.png">
                <h2>Cho'Gath</h2>
            </a>
        </li>
    `;
    const champion = {
        "id": "Chogath",
        "name": "Cho'Gath",
    };
    // Act
    const result = makeListTemplate(champion);

    // Assert
    assert.htmlEqual(result, expected);
});