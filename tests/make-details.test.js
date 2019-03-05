import { makeQueenDetails } from '../src/queen-details-component.js';
const test = QUnit.test;

QUnit.module('Creating details table');

const testQueen = {
   id: 42,
   name: 'Jiggly Caliente',
   quote: 'Jiggly is New York\'s plus size barbie, she\'s got swerve for your nerve, you can\'t take her!',
   winner: false,
   episodes: [0, 1, 2, 3, 4, 5, 6, 7],
};

test('create DL dynamically with queen object', assert => {
   const expected = `
   <dl>
      <dt>Name:</dt>
      <dd>Jiggly Caliente</dd>
      <dt>Quote:</dt>
      <dd>Jiggly is New York's plus size barbie, she's got swerve for your nerve, you can't take her!</dd>
      <dt>Winner:</dt>
      <dd>No</dd>
      <dt>Number of Episodes:</dt>
      <dd>8</dd>
   </dl>
   `;
   const result = makeQueenDetails(testQueen);
   assert.htmlEqual(result, expected);
});