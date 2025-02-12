/**
 * @jest-environment jsdom 
 */

describe('unit2 test cases', () => { 

    beforeEach(() => {
        document.body.innerHTML = `<div class="out-10"></div>`;
    });

    it('Adds array into div element', () => {
        const div = document.querySelector('.out-10') as HTMLDivElement;
        const t6 = (arr: number[], block: HTMLDivElement): void => {
            let out: string = arr.join(' ');
            block.textContent = out;
        };
        t6([99, 44, 55, 66], div);
        const expected = '99 44 55 66';
        expect(div.textContent).toBe(expected);
    });

    it('Trim method works correctly', () => {
        const div = document.querySelector('.out-10') as HTMLDivElement;
        const t8 = (block: HTMLDivElement, text: string): void => {
            let out: string = text.trim().toLowerCase();
            block.textContent = out;
        };
        t8(div, ' HelLO wORLd       ');
        const expected = 'hello world';
        expect(div.textContent).toBe(expected);
    });

    it('Takes an array and returns length of it', () => {
        const div = document.querySelector('.out-10') as HTMLDivElement;
        const t10 = (...args: number[]): void => {
            div.textContent = args.length.toString();
        };
        t10(33, 22, 44, 11, 55, 66, 11, 66);
        const expected = '8';
        expect(div.textContent).toBe(expected);
    });
});