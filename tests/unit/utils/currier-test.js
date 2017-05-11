import currier from 'dummy/utils/currier';
import { module, test } from 'qunit';

module('Unit | Utility | currier');

test('it properly curries string concat', function(assert) {
  assert.expect(1);

  let greeting = function(str1, str2) {
    return `${str1} ${str2}`;
  };

  let greetingName = currier(greeting, 'Hello there,');

  assert.equal(greetingName('Bob!'), 'Hello there, Bob!');
});

test('it can handle multiple calls', function(assert) {
  assert.expect(2);

  let sequence = function(beginning, end) {
    let result = [];

    for (let i = beginning; i <= end; i++) {
      result.push(i);
    }

    return result;
  };

  let getDigits = currier(sequence, 1);
  assert.deepEqual(getDigits(3), [1, 2, 3]);
  assert.deepEqual(getDigits(5), [1, 2, 3, 4, 5]);
});
