import currier from 'dummy/utils/currier';
import { module, test } from 'qunit';

module('Unit | Utility | currier');

test('it works', function(assert) {
  let greeting = function(str1, str2) {
    return `${str1} ${str2}`;
  };

  let greetingName = currier(greeting, 'Hello there, ');

  assert.equal(greetingName('Bob!'), 'Hello there, Bob!');
});
