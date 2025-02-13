// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 сумму всех целых чисел от первого аргумента (включительно) до второго (включительно). Функция запускается по кнопке .b-1.
function t1(min: number, max: number): void {
    let sum: number = 0;
    for (let i: number = min; i <= max; i++) {
        sum += i;
    }
    const out1: HTMLDivElement = document.querySelector('.out-1') as HTMLDivElement;
    out1.textContent = sum.toString();
}
(document.querySelector('.b-1') as HTMLButtonElement).addEventListener('click', () => {
    t1(5, 10);
});

// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 большее число. Используйте Math.max. Функция запускается по кнопке .b-2.
function t2(a: number, b: number): void {
    const out2: HTMLDivElement = document.querySelector('.out-2') as HTMLDivElement;
    out2.innerHTML = String(Math.max(a, b));
}
(document.querySelector('.b-2') as HTMLButtonElement).addEventListener('click', () => {
    t2(10, 5);
});

// Task 3
// Напишите pure функцию t3 (принимает 3 аргумента), которая делит число a на b и выводит результат в .out-3. Если b равно нулю, то в .out-3 выводится значение аргумента c. Функция запускается по кнопке .b-3.
function t3(a: number, b: number, c: number): void {
    const out3: HTMLDivElement = document.querySelector('.out-3') as HTMLDivElement;
    if (b !== 0) {
        out3.textContent = String(a / b);
    } else {
        out3.textContent = c.toString();
    }
}
(document.querySelector('.b-3') as HTMLButtonElement).addEventListener('click', () => {
    t3(15, 5, 20);
});

// Task 4
// Напишите pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4.
function t4<T extends string | number>(arr: T[], block: HTMLDivElement): void {
    block.textContent = arr.reduce((acc: string, init: T): string => acc + ' ' + init.toString(), '').trim();
}
(document.querySelector('.b-4') as HTMLButtonElement)?.addEventListener('click', () => {
    t4([4, 5, 6], document.querySelector('.out-4') as HTMLDivElement);
});

// Task 5
// Напишите pure функцию t5, которая проверяет наличие элемента с классом, переданным ей как аргумент (например, '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5.
function t5(selector: string): boolean {
    return document.querySelector(selector) !== null;
}
(document.querySelector('.b-5') as HTMLButtonElement)?.addEventListener('click', () => {
    const result: boolean = t5('.out-5');
    const out5: HTMLDivElement = document.querySelector('.out-5') as HTMLDivElement;
    out5.textContent = String(result);
    console.log(result);
});

// Task 6
// Напишите pure функцию t6, которая получает массив и возвращает его развернутым (чистый аналог reverse). Результат выводите на страницу через пробел.
function t6<T extends number | string>(arr: T[]): void {
    const reversed: T[] = [...arr].reverse();
    const result: string = reversed.reduce((acc: string, init: T): string => acc + ' ' + init.toString(), '').trim();
    const out6: HTMLDivElement = document.querySelector('.out-6') as HTMLDivElement;
    out6.textContent = result;
}
(document.querySelector('.b-6') as HTMLButtonElement)?.addEventListener('click', () => {
    t6([9, 10, 11, 12]);
});

// Task 7
// Напишите функцию t7, которая выводит переданный ей текст (аргумент text) в блок (аргумент block) после очистки (trim) и перевода в нижний регистр. Функция должна быть pure.
function t7(block: HTMLDivElement, text: string): void {
    block.textContent = text.trim().toLowerCase();
}
(document.querySelector('.b-7') as HTMLButtonElement)?.addEventListener('click', () => {
    const out7: HTMLDivElement = document.querySelector('.out-7') as HTMLDivElement;
    t7(out7, ' HelLO wORLd       ');
});

// Task 8
// Напишите pure функцию t8, которая получает массив a8 и число year, и проверяет, что все года массива больше или равны year. Результат (true/false) выводится в .out-8.
function t8(arr: number[], year: number): boolean {
    return arr.every((item: number): boolean => item >= year);
}
(document.querySelector('.b-8') as HTMLButtonElement)?.addEventListener('click', () => {
    const a8: number[] = [1998, 2000, 1999, 2002, 2005];
    const year: number = 1998;
    const res: boolean = t8(a8, year);
    const out8: HTMLDivElement = document.querySelector('.out-8') as HTMLDivElement;
    out8.textContent = String(res);
});

// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9, которая принимает массив и число, и возвращает новый массив, равный исходному, с добавленным в конец этим числом.
function t9(arr: number[], num: number): number[] {
    // Return a new array with the number appended without mutating the original
    return [...arr, num];
}
(document.querySelector('.b-9') as HTMLButtonElement)?.addEventListener('click', () => {
    const result: number[] = t9([9, 8, 7], 4);
    const out9: HTMLDivElement = document.querySelector('.out-9') as HTMLDivElement;
    out9.textContent = result.join(' ');
});

// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10, которая принимает массив и любое количество чисел и возвращает новый массив, равный исходному, с добавленными в конец этими числами.
function t10(arr: number[], ...nums: number[]): number[] {
    // Return a new array with additional numbers appended
    return [...arr, ...nums];
}
(document.querySelector('.b-10') as HTMLButtonElement)?.addEventListener('click', () => {
    const result: number[] = t10([9, 8, 7], 4, 5, 6);
    const out10: HTMLDivElement = document.querySelector('.out-10') as HTMLDivElement;
    out10.textContent = result.join(' ');
});
export{}
