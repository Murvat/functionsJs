"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('unit 4 test cases', () => {
    it('returns squared value', () => {
        const t5 = (a, b) => Math.pow(a, b);
        const res = t5(5, 2);
        const expected = 25;
        const nonExpected = res === 30;
        expect(res).toEqual(expected);
        expect(nonExpected).toBeFalsy();
    });
    it('returns true if even', () => {
        const t6 = (a) => a % 2 === 0;
        const falseValue = 11;
        const trueValue = 10;
        const res = t6(trueValue);
        const expected = true;
        expect(res).toEqual(expected);
        expect(t6(falseValue)).toBeFalsy();
    });
    it('returns mapped array', () => {
        const t7 = (arg) => {
            const arr = arg
                .map((item) => (item * 2));
            return arr;
        };
        const res = t7([1, 2, 3]);
        const expected = ([2, 4, 6]);
        expect(res).toStrictEqual(expected);
    });
    it('returns  reduced array', () => {
        const t9 = (arr) => arr.reduce((accum, item) => accum + item, 0);
        const res = t9([1, 2, 3]);
        const expected = 6;
        expect(res).toBe(expected);
    });
    it('returns true', () => {
        const t17 = (arr) => {
            const res = arr.reduce((accum, init) => accum + init, 0);
            return !isNaN(res);
            const res = t17([2, 3, 4]);
            const expected = true;
            expect(res).toBe(!expected);
        };
    });
});
