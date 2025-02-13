"use strict";
/**
 * @jest-environment jsdom
 */
describe('unit3 test cases', () => {
    it('correctly returns sum', () => {
        const t1 = (a, b) => a + b;
        const expected = 5;
        const res = t1(1, 4);
        expect(res).toEqual(expected);
    });
    it('correctly returns max value', () => {
        const t2 = (a, b) => Math.max(a, b);
        const expected = 10;
        const res = t2(10, 1);
        expect(res).toEqual(expected);
    });
    it('returns boolean value', () => {
        const t7 = (arg) => typeof arg === 'number';
        const res = t7('number');
        expect(res).toBeFalsy();
    });
    it('returns length of an array', () => {
        const t10 = (...args) => args.length;
        const res = t10(1, 2, 4, 5, 6);
        const expected = 5;
        expect(res).toBe(expected);
    });
    it('return  reversed value', () => {
        const t20 = (s) => s.split('').reverse().join('');
        const res = t20('monkey');
        const expected = 'yeknom';
        expect(res).toBe(expected);
    });
});
