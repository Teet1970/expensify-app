

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const add = (a,b) => a+b;
//const name = 'Mike';
const generateGreeting = (name = 'Anonymus') => `Hello ${name}!`;

test('liidame kaks arvu',() => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('tervitus koos nimega',() => {
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
});

test('tervitus koos nimega',() => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymus!');
});
