// Task 1
// Напишите функцию t1, которая возвращает сумму переданных ей аргументов a и b.
function t1(a: number, b: number): number {
    return a + b;
}

(document.querySelector('.b-1') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-1') as HTMLDivElement).textContent = t1(120, 140).toString();
});


// Task 2
// Напишите функцию t2, которая принимает 2 аргумента и возвращает больший из них.
function t2(a: number, b: number): number {
    return Math.max(a, b);
}

(document.querySelector('.b-2') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-2') as HTMLDivElement).textContent = t2(120, 140).toString();
});


// Task 3
// На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран.
function t3(): string | boolean | null {
    const checkbox = document.querySelector('.ch-3') as HTMLInputElement;
    return checkbox.checked ? checkbox.value : false;
}

(document.querySelector('.b-3') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-3') as HTMLDivElement).textContent = t3()?.toString() || '';
});


// Task 4
// На странице есть radiobutton .r-4. Напишите функцию, которая возвращает value выбранного radiobutton.
function t4(): string | undefined {
    const radiobuttons = document.querySelectorAll('.r-4') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            return radiobuttons[i].value;
        }
    }
    return undefined;
}

(document.querySelector('.b-4') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-4') as HTMLDivElement).textContent = t4()?.toString() || '';
});


// Task 5
// Напишите функцию t5, которая получает из s51 число, из s52 знак и из s53 число и 
// возвращает результат математической операции над этими числами с этим знаком.
function t5(): number {
    const s51: number = Number((document.querySelector('.s51') as HTMLOptionElement).value);
    const s52: string = (document.querySelector('.s52') as HTMLOptionElement).value;
    const s53: number = Number((document.querySelector('.s53') as HTMLOptionElement).value);
    switch (s52) {
        case '+':
            return s51 + s53;
        case '-':
            return s51 - s53;
        case '*':
            return s51 * s53;
        case '/':
            return s51 / s53;
        default:
            return 0;
    }
}

(document.querySelector('.b-5') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-5') as HTMLDivElement).textContent = t5().toString();
});


// Task 6
// Напишите функцию t6, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции.
function t6(num1: number, num2: number, sign: string): number {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

(document.querySelector('.b-6') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-6') as HTMLDivElement).textContent = t6(100, 2, '*').toString();
});


// Task 7
// Напишите функцию t7, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях.
function t7(arg: number | string): boolean {
    return typeof arg === 'number';
}

(document.querySelector('.b-7') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-7') as HTMLDivElement).textContent = t7(100).toString();
});


// Task 8
// Напишите функцию t8, которая принимает число дробь и параметр 'floor' или 'ceil' и возвращает число с соответствующим округлением.
function t8(num: number, method: string): number {
    switch (method) {
        case 'ceil':
            return Math.ceil(num);
        case 'floor':
            return Math.floor(num);
        default:
            return num;
    }
}

(document.querySelector('.b-8') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-8') as HTMLDivElement).textContent = (10 + t8(100.11, 'ceil')).toString();
});


// Task 9
// Напишите функцию t9, которая принимает число и степень и возвращает true если результат четный, false если нечетный.
function t9(n: number, p: number): boolean {
    const num = Math.pow(n, p);
    return num % 2 === 0;
}

(document.querySelector('.b-9') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-9') as HTMLDivElement).textContent = t9(3, 3).toString();
});


// Task 10
// Напишите функцию t10, которая возвращает количество переданных ей аргументов (число).
function t10(...args: number[]): number {
    return args.length;
}

(document.querySelector('.b-10') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-10') as HTMLDivElement).textContent = t10(33, 22, 44, 11, 55, 66, 11, 66).toString();
});


// Task 11
// Напишите функцию t11, которая возвращает сумму переданных ей аргументов (число). Используем arguments/rest.
function t11(...args: number[]): number {
    return args.reduce((acc: number, curV: number) => acc + curV, 0);
}

(document.querySelector('.b-11') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-11') as HTMLDivElement).textContent = t11(33, 22, 44, 11, 55, 66, 11, 66).toString();
});


// Task 12
// Напишите функцию t12, которая возвращает сумму переданных ей аргументов (число). Используем rest.
function t12(...args: number[]): number {
    return args.reduce((acc: number, curV: number) => acc + curV, 0);
}

(document.querySelector('.b-12') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-12') as HTMLDivElement).textContent = t12(33, 22, 44, 11, 55, 66, 11, 66).toString();
});


// Task 13
// Напишите функцию t13, которая возвращает случайное целое число в заданном диапазоне min, max.
function t13(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min));
}

(document.querySelector('.b-13') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-13') as HTMLDivElement).textContent = t13(100, 120).toString();
});


// Task 14
// Напишите функцию t14, которая возвращает строку в виде rgb(xxx,yyy,zzz) где xxx, yyy, zzz случайные числа от 0 до 255.
function t14(): string {
    const r: number = Math.floor(Math.random() * 255);
    const g: number = Math.floor(Math.random() * 255);
    const b: number = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

(document.querySelector('.b-14') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-14') as HTMLDivElement).style.background = t14();
});


// Task 15
// Напишите функцию t15, которая принимает строку и возвращает очищенную строку или false если строка содержит только пробелы.
function t15(str: string): string | boolean {
    return str.trim().length ? str.trim() : false;
}

(document.querySelector('.b-15') as HTMLButtonElement).addEventListener('click', function (): void {
    console.log(t15('           hi              '));
});


// Task 16
// Напишите функцию t16, которая принимает строку и возвращает строку приведенную к нижнему регистру.
function t16(str: string): string | boolean {
    return typeof str === 'string' ? str.toLowerCase() : false;
}

(document.querySelector('.b-16') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-16') as HTMLDivElement).textContent = t16('HelLO wORLd')?.toString() || '';
});


// Task 17
// Напишите функцию t17, которая получает value выбранного option select.s-171 и возвращает его.
function t17(): string {
    return (document.querySelector('select.s-171') as HTMLSelectElement).value;
}

(document.querySelector('.s-171') as HTMLSelectElement).addEventListener('change', function (): void {
    (document.querySelector('.s-172') as HTMLInputElement).value = t17();
});


// Task 18
// Напишите функцию t18, которая получает value из input.i-18 и возвращает его.
function t18(): string {
    return (document.querySelector('input.i-18') as HTMLInputElement).value;
}

(document.querySelector('.i-18') as HTMLInputElement).addEventListener('input', function (): void {
    (document.querySelector('.out-18') as HTMLDivElement).textContent = t18();
});


// Task 19
// Напишите функцию t19, которая получает value из input.i-19 и возвращает его.
function t19(): string {
    return (document.querySelector('input.i-19') as HTMLInputElement).value;
}

(document.querySelector('.i-19') as HTMLInputElement).addEventListener('input', function (): void {
    (document.querySelector('.out-19') as HTMLDivElement).style.borderRadius = t19() + 'px';
});


// Task 20
// Напишите функцию t20, которая принимает строку и возвращает "развернутую" строку.
function t20(s: string): string {
    return s.split('').reverse().join(' ');
}

(document.querySelector('.b-20') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-20') as HTMLDivElement).textContent = t20('hello');
});


// Task 21
// Напишите функцию t21, которая в зависимости от параметра even или odd возвращает случайное целое четное или нечетное число от 10 до 20.
function t21(s: string): boolean | number | undefined {
    if (s === 'even') {
        let num1: number = Math.floor(10 + Math.random() * (20 - 10));
        if (num1 % 2 !== 0) return false;
        return num1;
    } else if (s === 'odd') {
        let num2: number = Math.floor(10 + Math.random() * (20 - 10));
        if (num2 % 2 === 0) return false;
        return num2;
    }
    return undefined;
}

(document.querySelector('.b-21') as HTMLButtonElement).addEventListener('click', function (): void {
    // For demonstration, concatenating strings carefully:
    (document.querySelector('.out-21') as HTMLDivElement).textContent = `Result: ${t21('even')}`;
});


// Task 22
// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true.
function callback22(item: number): boolean {
    return item % 2 === 0;
}

function t22(): number[] {
    const ar22: number[] = [3, 4, 5, 6, 7, 8];
    return ar22.filter(callback22);
}

(document.querySelector('.b-22') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-22') as HTMLDivElement).textContent = t22().toString();
});


// Task 23
// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.
function callback23(item: number): number {
    return item ** 2;
}

function t23(): number[] {
    const ar23: number[] = [3, 4, 5, 6, 7, 8];
    return ar23.map(callback23);
}

(document.querySelector('.b-23') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-23') as HTMLDivElement).textContent = t23().toString();
});


// Task 24
// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.
function callback24(item: number): number {
    return item ** 2;
}

function t24(): number[] {
    const ar24: number[] = [3, 4, 5, 6, 7, 8];
    const t: number[] = [];
    ar24.forEach((item: number): void => {
        t.push(callback24(item));
    });
    return t;
}

(document.querySelector('.b-24') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-24') as HTMLDivElement).textContent = t24().toString();
});


// Task 25
// Напишите функцию, которая принимает массив как аргумент и проверяет, что в нем одни числа.
function t25(arr: number[]): boolean {
    return arr.every((item: number): boolean => typeof item === 'number');
}

(document.querySelector('.b-25') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-25') as HTMLDivElement).textContent = t25([4, 5, 6]).toString();
});


// Task 26
// Напишите функцию, которая получает из input.i-26 имя пользователя и если не пустая строка - выводит его в нижнем регистре.
function t26(): void {
    const inputValue: string = (document.querySelector('input.i-26') as HTMLInputElement).value.trim();
    if (inputValue.length > 0) {
        (document.querySelector('.out-26') as HTMLDivElement).textContent = inputValue.toLowerCase();
    }
}

(document.querySelector('.b-26') as HTMLButtonElement).addEventListener('click', t26);


// Task 27
// Напишите функцию, которая получает из input.i-27 значение и проверяет его наличие в объекте obj27.
const obj27: Record<string, string> = {
    h: 'a',
    j: 'b',
    k: 'z',
    m: 'w'
};

function t27(v: string): string | boolean {
    for (const key in obj27) {
        if (obj27[key] === v) {
            return key;
        }
    }
    return false;
}

(document.querySelector('.b-27') as HTMLButtonElement).addEventListener('click', function (): void {
    const v: string = (document.querySelector('.i-27') as HTMLInputElement).value;
    (document.querySelector('.out-27') as HTMLDivElement).textContent = t27(v)?.toString() || '';
});


// Task 28
// Напишите функцию, которая принимает два аргумента - строку и подстроку - и возвращает true, если подстрока есть.
function t28(str: string, substr: string): boolean {
    return str.includes(substr);
}

(document.querySelector('.b-28') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-28') as HTMLDivElement).textContent = t28('hello my world', 'or').toString();
});


// Task 29
// Напишите функцию t29, которая получает в качестве аргументов строки и возвращает большую строку (по прямому сравнению).
function t29(str1: string, str2: string): string {
    return str1 > str2 ? str1 : str2;
}

(document.querySelector('.b-29') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-29') as HTMLDivElement).textContent = t29('hello', 'orBait');
});


// Task 30
// Напишите функцию t30, которая возвращает функцию t31.
function t31(): boolean {
    return true;
}

function t30(): () => boolean {
    return t31;
}

(document.querySelector('.b-30') as HTMLButtonElement).addEventListener('click', function (): void {
    (document.querySelector('.out-30') as HTMLDivElement).textContent = t30()().toString();
});

export{}