// Task 1.
// Функция принимает число n. Напишите рекурсивную функцию r1, которая выводит числа от n до нуля в out-1. Разделитель - пробел.
function t1(n: number): void {
    let out: string = '';
    function r1(z: number): void {
        out += z + ' ';
        if (z === 0) return;
        r1(z - 1);
    }
    r1(n);
    const outElem: HTMLDivElement = document.querySelector('.out-1') as HTMLDivElement;
    outElem.textContent = out;
}

(document.querySelector('.b-1') as HTMLButtonElement)?.addEventListener('click', () => {
    t1(5);
});

// Task 2.
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до введенного числа с шагом 2 в out-2. Разделитель - пробел.
function t2(n: number): void {
    let out: string = '';
    let num: number = 0;
    function r2(z: number): void {
        out += num + ' ';
        num += 2;
        if (num > z) return;
        r2(z);
    }
    r2(n);
    const outElem: HTMLDivElement = document.querySelector('.out-2') as HTMLDivElement;
    outElem.textContent = out;
}

(document.querySelector('.b-2') as HTMLButtonElement)?.addEventListener('click', () => {
    t2(5);
});

// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна вернуть нечетное или четное число в диапазоне от 0 до 100, используя рекурсию.
function randomInteger(min: number, max: number): number {
    let rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

type OddEven = 'odd' | 'even';

function t3(arg: OddEven): number {
    let num: number = randomInteger(0, 100);
    switch (arg) {
        case 'odd':
            if (num % 2 !== 0) return num;
            break;
        case 'even':
            if (num % 2 === 0) return num;
            break;
    }
    return t3(arg);
}

(document.querySelector('.b-3') as HTMLButtonElement)?.addEventListener('click', () => {
    const outElem: HTMLDivElement = document.querySelector('.out-3') as HTMLDivElement;
    outElem.textContent = t3('even').toString();
});

// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4.
// Если число уже есть - генерирует заново, если нет - возвращает это число.
let ar4: number[] = [3, 4, 6, 7, 8];

function t4(): number {
    let num: number = randomInteger(0, 10);
    let res: number = ar4.includes(num) ? t4() : num;
    return res;
}

(document.querySelector('.b-4') as HTMLButtonElement)?.addEventListener('click', () => {
    const outElem: HTMLDivElement = document.querySelector('.out-4') as HTMLDivElement;
    outElem.textContent = t4().toString();
});

// Task 5.
// Рекурсивная функция t5 генерирует целое число от 0 до 10 (с помощью randomInteger) и добавляет его в массив ar5.
// Если сумма элементов массива больше 30, то функция прекращает работу и возвращает массив.
let ar5: number[] = [];

function t5(): number[] {
    let num: number = randomInteger(0, 10);
    ar5.push(num);
    let sum: number = ar5.reduce((acc: number, cur: number) => acc + cur, 0);
    if (sum > 30) {
        return ar5;
    } else {
        return t5();
    }
}

(document.querySelector('.b-5') as HTMLButtonElement)?.addEventListener('click', () => {
    const outElem: HTMLDivElement = document.querySelector('.out-5') as HTMLDivElement;
    const result: number[] = t5();
    outElem.textContent = result.join(' ');
});

// Task 6.
// Рекурсивная функция t6, которая вытаскивает из массива ar6 числа в массив ar6_res.
type NestedNumberOrString = number | string | NestedNumberOrString[];
let ar6: NestedNumberOrString[] = [
    5,
    [3, 4, 'h'],
    [[5, 6, 'b'], ['c', 7, [8]]],
    9,
    [[[[[10, 'i', 11, [12]]]]]]
];let ar6_res: number[] = [];

function t6(arr: NestedNumberOrString[]): void {
    for (const item of arr) {
        if (Array.isArray(item)) {
            t6(item);
        } else if (typeof item === 'number') {
            ar6_res.push(item);
        }
    }
}

(document.querySelector('.b-6') as HTMLButtonElement)?.addEventListener('click', () => {
    ar6_res = []; // clear previous results
    t6(ar6);
    const outElem: HTMLDivElement = document.querySelector('.out-6') as HTMLDivElement;
    outElem.textContent = ar6_res.join(' ');
});

// Task 7.
// Рекурсивная функция t7, которая вытаскивает из массива ar7 все строки в массив ar7_res.
type NestedString = string | NestedString[];
let ar7: NestedString[] = [
    'hi',
    ['hii'],
    [['hiii']],
    [[['hiiii']]],
    ['i', [[[[[['hi']]]]]]]
];
let ar7_res: string[] = [];

function t7(arg: NestedString[]): void {
    for (const item of arg) {
        if (Array.isArray(item)) {
            t7(item);
        } else {
            ar7_res.push(item);
        }
    }
}

(document.querySelector('.b-7') as HTMLButtonElement)?.addEventListener('click', () => {
    ar7_res = []; // clear previous results
    t7(ar7);
    const outElem: HTMLDivElement = document.querySelector('.out-7') as HTMLDivElement;
    outElem.textContent = ar7_res.join(' ');
});

// Task 8.
// Рекурсивная функция t8 получает с помощью randomInteger целое число от 1000 до 9000 и проверяет,
// что сумма первых двух цифр равна сумме третьей и четвертой цифры. Если условие удовлетворено - возвращает число.
function t8(): number {
    let num: number = randomInteger(1000, 9000);
    let arr: number[] = num.toString().split('').map((item: string): number => Number(item));
    if (arr[0] + arr[1] === arr[2] + arr[3]) {
        return num;
    } else {
        return t8();
    }
}

(document.querySelector('.b-8') as HTMLButtonElement)?.addEventListener('click', () => {
    const outElem: HTMLDivElement = document.querySelector('.out-8') as HTMLDivElement;
    outElem.textContent = t8().toString();
});

// Task 9.
// Рекурсивная функция t9 создает массив ar9_res, состоящий из возраста (age) пользователей из объекта ar9.
interface Person {
    age?: number;
    parent?: { [key: string]: Person };
}

let ar9: { [key: string]: Person } = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    }
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {},
            "sniezko": {
                age: 45
            }
        }
    }
};

let ar9_res: number[] = [];

function t9(obj: Person): void {
    for (const key in obj) {
        if (key === 'age' && typeof obj.age === 'number') {
            ar9_res.push(obj.age);
        } else if (typeof obj[key as keyof Person] === 'object' && obj[key as keyof Person] !== null) {
            t9(obj[key as keyof Person] as Person);
        }
    }
}

(document.querySelector('.b-9') as HTMLButtonElement)?.addEventListener('click', () => {
    ar9_res = []; // clear previous results
    for (const key in ar9) {
        t9(ar9[key]);
    }
    const outElem: HTMLDivElement = document.querySelector('.out-9') as HTMLDivElement;
    outElem.innerHTML = ar9_res.join(' ');
});

// Task 10.
// Рекурсивная функция t10 создает массив ar10_res фамилий людей, у которых нет информации о возрасте.
let ar10: { [key: string]: Person } = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45,
                parent: {}
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    }
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {
                parent: {
                    "sidorenko": {}
                }
            },
            "sniezko": {
                age: 45
            }
        }
    }
};

let ar10_res: string[] = [];

function t10(k: string, obj: Person): void {
    if (obj.age === undefined) {
        ar10_res.push(k);
    }
    if (obj.parent) {
        for (const key in obj.parent) {
            t10(key, obj.parent[key]);
        }
    }
}

(document.querySelector('.b-10') as HTMLButtonElement)?.addEventListener('click', () => {
    ar10_res = []; // clear previous results
    for (const key in ar10) {
        t10(key, ar10[key]);
    }
    const outElem: HTMLDivElement = document.querySelector('.out-10') as HTMLDivElement;
    outElem.innerHTML = ar10_res.join(' ');
});

export {};

export {
  t6,
  t7,
  t8,
  t9,
  t10,
  ar6_res,
  ar7_res,
  ar9_res,
  ar10_res
};