const somar = require('./index');

test('deve somar 2 + 2 e resultar em 4', () => {
    expect(somar(2, 2)).toBe(4);
});