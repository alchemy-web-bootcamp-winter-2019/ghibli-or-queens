const test = QUnit.test;

QUnit.module('MOVIE DETAILS');

const movie = {
    title: 'Castle in the Sky',
    description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
    release_date: 1986,
    producer: 'Isao Takahata'
};

function movieDetailsTemplate(movie) {
    return `
      <span>
        <dl>Title:</dl>
        <dd>${movie.title}</dd>
      </span>
      <span>
        <dl>Description:</dl>
        <dd>${movie.description}</dd>
      </span>
      <span>
        <dl>Release Date:</dl>
        <dd>${movie.release_date}</dd>
      </span>
      <span>
        <dl>Producer:</dl>
        <dd>${movie.producer}</dd>
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
    const result = movieDetailsTemplate(movie);
    //assert
    assert.equal(result, expected);
});