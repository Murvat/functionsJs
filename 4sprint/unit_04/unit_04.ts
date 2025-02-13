// Task 1
// Напишите функцию стрелочную функцию t1, которая аналогична закомментированной функции.
const t1 = (): void => {
    const x: number = 77;
    const y: number = 99;
    console.log(x + y);
};

(document.querySelector('.b-1') as HTMLButtonElement).addEventListener('click', t1);

// Task 2.
// Напишите стрелочную функцию, которая является аналогом анонимной функции, которая запускается при клике на b-2.
(document.querySelector('.b-2') as HTMLButtonElement).addEventListener('click', (): void => {
    const x: number = 99;
    const y: number = 88;
    (document.querySelector('.out-2') as HTMLElement).textContent = String(x + y);
});

// Task 3.
// Напишите функцию стрелочную функцию t3, которая аналогична закомментированной функции.
const t3 = (a: number, b: number): void => {
    (document.querySelector('.out-3') as HTMLElement).textContent = String(a + b);
};

(document.querySelector('.b-3') as HTMLButtonElement).addEventListener('click', function (): void {
    t3(4, 5);
});

// Task 4
// Напишите функцию стрелочную функцию t4, которая аналогична закомментированной функции.
const t4 = (s: string): void => {
    (document.querySelector('.out-4') as HTMLElement).textContent = String(s.trim().length);
};

(document.querySelector('.b-4') as HTMLButtonElement).addEventListener('click', function (): void {
    t4('   aha     ');
});

// Task 5
// Напишите функцию стрелочную функцию t5, которая аналогична закомментированной функции.
const t5 = (a: number, b: number): number => {
    return Math.pow(a, b);
};

(document.querySelector('.b-5') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-5') as HTMLElement).textContent = String(t5(3, 4));
});

// Task 6
// Напишите функцию стрелочную функцию t6, которая аналогична закомментированной функции.
const t6 = (a: number): boolean => a % 2 === 0;

(document.querySelector('.b-6') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-6') as HTMLElement).textContent = String(t6(34));
});

// Task 7
// Напишите функцию стрелочную функцию t7, которая аналогична закомментированной функции. Все функции должны быть стрелочные.
const t7 = <T extends number>(arg: T[]): T[] => {
    const arr: T[] = arg.map((item: T): T => (item * 2) as T);
    return arr;
};

(document.querySelector('.b-7') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-7') as HTMLElement).textContent = String(t7([4, 5, 6]));
});

// Task 8
// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.
const t8 = <T extends number>(arr: T[]): T[] => {
    const arr2: T[] = arr.filter((item: T): boolean => item > 5);
    return arr2;
};

(document.querySelector('.b-8') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-8') as HTMLElement).textContent = String(t8([3, 4, 5, 6, 7, 8]));
});

// Task 9
// Напишите функцию стрелочную функцию t9, которая аналогична закомментированной функции. Все функции должны быть стрелочные.
const t9 = (arr: number[]): number =>
    arr.reduce((accum: number, item: number): number => accum + item, 0);

(document.querySelector('.b-9') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-9') as HTMLElement).textContent = String(t9([20, 30, 40]));
});

// Task 10
// Запустите функцию f10. Изучите, что она выводит в качестве this. Запустите t10. Изучите что выводит она в качестве this.
// function f10(): void {
//     console.log(this);
// }
//
// const t10 = (): void => {
//     // console.log(t10.this);
// };
//
// (document.querySelector('.b-10') as HTMLButtonElement).addEventListener('click', f10);
// (document.querySelector('.b-10') as HTMLButtonElement).addEventListener('click', t10);

// Task 11
// Запустите функцию f11. Изучите как выглядит arguments. Запустите функцию t11. Изучите что будет выведено.
function f11(...args: any[]): void {
    console.log(arguments);
}

const t11 = (...args: any[]): void => {
    try {
        console.log(args);
    } catch (err: unknown) {
        console.log('argument not defined');
    }
};

(document.querySelector('.b-11') as HTMLButtonElement).addEventListener('click', function (): void {
    f11(77, 88, 99);
    t11(55, 44, 66);
});

// Task 12
// напишите стрелочную функцию t12, которая возвращает большее из переданных ей двух чисел. Числа передаются в качестве аргумента.
const t12 = (a: number, b: number): number => (a > b ? a : b);

(document.querySelector('.b-12') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-12') as HTMLElement).textContent = String(t12(9, 22));
});

// Task 13
// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.
const t13 = (min: number, max: number): number => {
    return Math.floor(min + Math.random() * (1 + max - min));
};

(document.querySelector('.b-13') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-13') as HTMLElement).textContent = String(t13(100, 120));
});

// Task 14
// Напишите стрелочную функцию t14, которая получает строку как аргумент и возвращает строку очищенную от пробелов (с начала и конца) или false если строка содержит только пробелы. 
const t14 = (str: string): string | false => {
    const trimmed: string = str.trim();
    return trimmed ? trimmed : false;
};

(document.querySelector('.b-14') as HTMLButtonElement).addEventListener('click', function (): void {
    console.log(t14('           hi              '));
});

// Task 15
// Напишите стрелочную функцию, которая проверяет что пользователь ввел в input. Если число - возвращает true, если строку - false. 
const t15 = (input: string): boolean => !isNaN(Number(input));

(document.querySelector('.b-15') as HTMLButtonElement).addEventListener('click', function (): void {
    const num: string = (document.querySelector('.i-15') as HTMLInputElement).value;
    (document.querySelector('.out-15') as HTMLElement).textContent = String(t15(num));
});

// Task 16
// Напишите стрелочную функцию t16, которая проверяет что в массиве находится четное количество элементов. Возвращает true, false.
const t16 = (num: number[]): boolean => num.length % 2 === 0;

(document.querySelector('.b-16') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-16') as HTMLElement).textContent = String(t16([4, 5, 6]));
});

// Task 17
// Напишите стрелочную функцию t17, которая проверяет что в массиве находятся только числа. Если да - то возвращает true, если нет, false.
const t17 = (arr: number[]): boolean => {
    const res: number = arr.reduce((accum: number, init: number): number => accum + init, 0);
    return !isNaN(res);
};

(document.querySelector('.b-17') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-17') as HTMLElement).textContent = String(t17([4, 5, 6]));
});

// Task 18
// Напишите стрелочную функцию t18, которая получает два аргумента - массив и число. Возвращает true если число есть в массиве и false если нет.
const t18 = (arr: number[], num: number): boolean => {
    return arr.includes(num);
};

(document.querySelector('.b-18') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-18') as HTMLElement).textContent = String(t18([4, 5, 6], 6));
});

// Task 19
// Напишите стрелочную функцию t19, которая принимает строку и аргумент true или false. Если второй аргумент false - то возвращает строку. Если true - возвращает перевернутую строку.
const t19 = (str: string, bool: boolean): string => {
    return bool ? str.split('').reverse().join('') : str;
};

(document.querySelector('.b-19') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-19') as HTMLElement).textContent = t19('hello', true);
});

// Task 20
// Напишите стрелочную функцию t20, которая принимает объект и число. Если число есть в объекте то возвращает первый встреченный ключ с таким числом. Если нет - false.
const j20: Record<string, number> = {
    h: 4,
    j: 7,
    k: 22,
    m: 7
};

const t20 = (obj: Record<string, number>, num: number): string => {
    if (Object.values(obj).includes(num)) {
        for (const key in obj) {
            if (obj[key] === num) {
                return key;
            }
        }
    }
    return "false";
};

(document.querySelector('.b-20') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-20') as HTMLElement).textContent = t20(j20, 6);
});

export {}
