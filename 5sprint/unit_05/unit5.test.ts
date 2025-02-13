describe('unit5 test cases', (): void => {
    it('test case 1', (): void => {
    const ar1:number[] = [1, 2, 3];
    let res1:number[];
    const callBack1 = (item:number):number => item ** 3;
    res1 = ar1.map(callBack1);
        const expected:number[] = [1, 8, 27];
        expect(res1).toStrictEqual(expected)
    });


    it('test case 2', (): void => {
    const ar3:(number|string)[] = [4, '5', 6];
    let res3: (number|string)[];
    let callBack3= (item:number|string):boolean => typeof item === 'number' ? true : false;
        res3 = ar3.filter(callBack3);
        const expected = [4, 6];
        expect(res3).toStrictEqual(expected)
    });

    it('test case 3', (): void => {
    const ar3:(number|string)[] = [4, '5', 6];
    let res4:(number|string)[];
    res4 = ar3.filter(item => typeof item === 'number' ? true : false); // сюда в скобки дописываете стрелочную функцию
        const expected:number[] = [4, 6];
        expect(res4).toStrictEqual(expected);
    });

    it('test case 4', (): void => {
    const ar5:string[] = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ'];
    let res6:string[] = [];
    ar5.forEach((item:string )=> res6.push(item)); // сюда в скобки дописываете стрелочную функцию
        const expected: string[] = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ']
        expect(res6).toStrictEqual(expected)
    });
    it('test case 5', (): void => {
    const ar7:number[] = [5, 7, 10, 20, 30, 60];
    let res7:boolean;
    let callBack7 = (item:number):boolean => item > 10 ? true : false;
        res7 = ar7.every(callBack7);
        expect(res7).toBeFalsy();
    });
});

export {};