import detailTemplate from '../src/detail-view.js';

const test = QUnit.test;

QUnit.module('DETAIL TEMPLATE TEST');

const movie = {
    title: 'Castle In The Sky',
    description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.',
    director: 'Isao Takahata',
    release_date: 1988
};

test('Dynamically create Detail View', assert => {
    // arrange
    const expected = /*html*/`
    <dl>
        <dt>Title </dt>
        <dd>Castle In The Sky</dd>

        <dt>Description </dt>
        <dd>"In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."</dd>

        <dt>Director </dt>
        <dd>Isao Takahata</dd>

        <dt>Release Date </dt>
        <dd>1988</dd>
    </dl>
    `;

    // act
    const result = detailTemplate(movie);

    // assert
    assert.htmlEqual(result, expected);
});