import { movieDetailsTemplate } from '../src/movie-details-template.js';
const test = QUnit.test;

QUnit.module('MOVIE DETAILS');

const movie = {
    title: 'Castle in the Sky',
    description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
    release_date: 1986,
    producer: 'Isao Takahata'
};


test('dynamically display each movie\'s details into details.js', assert => {
    //arrange
    const expected = `
    <dl>
      <span>
        <dt>Title:</dt>
        <dd>Castle in the Sky</dd>
      </span>
      <span>
        <dt>Description:</dt>
        <dd>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dd>
      </span>
      <span>
        <dt>Release Date:</dt>
        <dd>1986</dd>
      </span>
      <span>
        <dt>Producer:</dt>
        <dd>Isao Takahata</dd>
      </span>
    </dl>
    `;
    //act
    const result = movieDetailsTemplate(movie);
    //assert
    assert.htmlEqual(result, expected);
});