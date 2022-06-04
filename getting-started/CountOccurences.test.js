const countOccurences = require('./CountOccurences');

test('CountOccurences works on empty array', () => {
  expect(countOccurences([])).toEqual({});
});

test('CountOccurences works on single element array', () => {
    expect(countOccurences(["maria"])).toEqual({"maria": 1});
  }); 

test('CountOccurences works on complex array', () => {
    const wordsArray = ["maria", "test", "maria", "jin", "maria", "men", "men"];
    const expectResult = { maria: 3, test: 1, jin: 1, men: 2 };
    expect(countOccurences(wordsArray)).toEqual(expectResult);
  });
