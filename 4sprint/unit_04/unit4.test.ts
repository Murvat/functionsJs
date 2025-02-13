describe('unit 4 test cases', (): void => {
    it('returns squared value', (): void => {
        const t5 = (a: number, b: number): number => Math.pow(a, b);
        const res: number = t5(5, 2);
        const expected: number = 25;
        const nonExpected: boolean = res === 30;
        expect(res).toEqual(expected);
        expect(nonExpected).toBeFalsy();
    });

    it('returns true if even', (): void => {
        const t6 = (a: number): boolean => a % 2 === 0;
        const falseValue: number = 11;
        const trueValue: number = 10;
        const res: boolean = t6(trueValue);
        const expected: boolean = true;
        expect(res).toEqual(expected);
        expect(t6(falseValue)).toBeFalsy();
    });

    it('returns mapped array', (): void => {
        const t7 = <T extends number>(arg: T[]): T[] => {
            const arr: T[] = arg.map((item: T): T => (item * 2) as T);
            return arr;
        };
        const res: number[] = t7([1, 2, 3]);
        const expected: number[] = [2, 4, 6];
        expect(res).toStrictEqual(expected);
    });

    it('returns reduced array', (): void => {
        const t9 = (arr: number[]): number =>
            arr.reduce((accum: number, item: number): number => accum + item, 0);
        const res: number = t9([1, 2, 3]);
        const expected: number = 6;
        expect(res).toBe(expected);
    });

    it('returns true', (): void => {
        const t17F = (arr: number[]): boolean => {
            const sum: number = arr.reduce((accum: number, init: number): number => accum + init, 0);
            return !isNaN(sum);
        };
        const res1: boolean = t17F([2, 3, 4]);
        const expected: boolean = true;
        expect(res1).toBe(expected);
    });
});

export {};