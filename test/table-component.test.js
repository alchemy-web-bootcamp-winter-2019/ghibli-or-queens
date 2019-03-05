const test = QUnit.test;

QUnit.module('Table component');

function makeQueenTable() {
    return /*html*/`
        <dl>
            <dt>Name:</dt>
            <dd>Victoria 'Porkchop' Parker</dd>
            <dt>Winner:</dt>
            <dd>No</dd>
            <dt>Miss Congeniality:</dt>
            <dd>No</dd>
            <dt>Quote:</dt>
            <dd>Would you fuck me? I'd fuck me.</dd>
        </dl>
    `;
}

test('make table', function(assert) {
    // arrange
    const expected = /*html*/`
        <dl>
            <dt>Name:</dt>
            <dd>Victoria 'Porkchop' Parker</dd>
            <dt>Winner:</dt>
            <dd>No</dd>
            <dt>Miss Congeniality:</dt>
            <dd>No</dd>
            <dt>Quote:</dt>
            <dd>Would you fuck me? I'd fuck me.</dd>
        </dl>
    `;
    // act
    const result = makeQueenTable();
    // assert
    assert.equal(result, expected);
});