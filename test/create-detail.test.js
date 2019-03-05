const test = QUnit.test;

export function createDetail() {
    return `
    <span>
        <dt>Title:</dt>          
        <dd>Castle In The Sky</dd>
    </span>

    <span>
        <dt>Year Released</dt>
        <dd>1986</dd>
    </span>
    `;
}

test('create detail page dynamically', assert => {
//arrange
    const expected = `
    <span>
        <dt>Title:</dt>          
        <dd>Castle In The Sky</dd>
    </span>

    <span>
        <dt>Year Released</dt>
        <dd>1986</dd>
    </span>
    `;

//act
    const result = createDetail();

//assert
assert.equal(result, expected);
});