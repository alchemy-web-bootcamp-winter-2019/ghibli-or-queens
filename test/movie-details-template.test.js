const test = QUnit.test;

QUnit.module('MOVIE DETAILS');

function movieDetailsTemplate() {
    return `
      <span>
        <dl>Title:</dl>
        <dd>Castle in the Sky</dd>
      </span>
      <span>
        <dl>Description:</dl>
        <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dd>
      </span>
      <span>
        <dl>Release Date:</dl>
        <dd>1986</dd>
      </span>
      <span>
        <dl>Producer:</dl>
        <dd>Isao Takahata</dd>
      </span>
    `;
}

test('dynamically display each movie\'s details into details.js', assert => {
    //arrange
    const expected = `
      <span>
        <dl>Title:</dl>
        <dd>Castle in the Sky</dd>
      </span>
      <span>
        <dl>Description:</dl>
        <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dd>
      </span>
      <span>
        <dl>Release Date:</dl>
        <dd>1986</dd>
      </span>
      <span>
        <dl>Producer:</dl>
        <dd>Isao Takahata</dd>
      </span>
    `;
    //act
    const result = movieDetailsTemplate();
    //assert
    assert.equal(result, expected);
});