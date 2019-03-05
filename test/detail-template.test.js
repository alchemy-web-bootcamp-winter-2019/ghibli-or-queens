const test = QUnit.test;

QUnit.module('DETAIL TEMPLATE TEST');

const movie = /*html*/`
<dl>
    <dt class="align-right">Title </dt>
    <dd class="align-left">Castle in the Sky</dd>

    <dt class="align-right">Description </dt>
    <dd class="align-left">"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</dd>

    <dt class="align-right">Director </dt>
    <dd class="align-left">Isao Takahata</dd>

    <dt class="align-right">Release Date </dt>
    <dd class="align-left">1988</dd>
</dl>
`;

function detailTemplate() {
    return /*html*/`
    <dl>
        <dt class="align-right">Title </dt>
        <dd class="align-left">Castle in the Sky</dd>

        <dt class="align-right">Description </dt>
        <dd class="align-left">"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</dd>

        <dt class="align-right">Director </dt>
        <dd class="align-left">Isao Takahata</dd>

        <dt class="align-right">Release Date </dt>
        <dd class="align-left">1988</dd>
    </dl>
    `;
}

test('Dynamically create Detail View', assert => {
    // arrange
    const expected = /*html*/`
    <dl>
        <dt class="align-right">Title </dt>
        <dd class="align-left">Castle in the Sky</dd>

        <dt class="align-right">Description </dt>
        <dd class="align-left">"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</dd>

        <dt class="align-right">Director </dt>
        <dd class="align-left">Isao Takahata</dd>

        <dt class="align-right">Release Date </dt>
        <dd class="align-left">1988</dd>
    </dl>
    `;

    // act
    const result = detailTemplate();

    // assert
    assert.equal(result, expected);
});