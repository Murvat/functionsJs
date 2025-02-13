"use strict";
/**
 * @jest-environment jsdom
 */
describe('Unit1', () => {
    beforeEach(() => {
        // Set up the DOM element that your tests need.
        document.body.innerHTML = `<div class="out-10"></div>`;
    });
    it('Return the sum of two elements', () => {
        const sum = (a, b) => a + b;
        expect(sum(5, 10)).toBe(15);
    });
    it.each([{ inputA: 6, inputB: 3, expected: 2 },
        { inputA: 12, inputB: 3, expected: 4 },
        { inputA: 100, inputB: 10, expected: 10 },
        { inputA: 10, inputB: 0, expected: Infinity },])('should match', ({ inputA, inputB, expected }) => {
        const divide = (a, b) => a / b;
        const res = divide(inputA, inputB);
        expect(res).toBe(expected);
    });
    it('check dom manipulation', () => {
        const out10 = document.querySelector('.out-10');
        if (!out10) {
            throw new Error('Element with class .out-10 not found');
        }
        let ar10_res = [1, 2, 3, 4];
        let expected = ar10_res.join('_');
        function showArr() {
            out10.textContent = ar10_res.join('_');
        }
        ;
        showArr();
        expect(out10.textContent).toBe(expected);
    });
});
