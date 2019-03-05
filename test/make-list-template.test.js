const test = QUnit.test;

QUnit.module('List template');

function makeListTemplate() {
    
}

test('List template test', assert => {
    // Arrange
    const expected = `
        <li>
            <a href="champion-details.html/?id=Aatrox">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png">
                <h2>Aatrox</h2>
            </a>
        </li>
    `;

    // Act
    const result = makeListTemplate();

    // Assert
    assert.equal(result, expected);
});