// Task 1
// Запустите функцию t1 с контекстом out-1 с помощью call. Функция должна запускаться при загрузке страницы.
function t1(this: HTMLDivElement | null): void {
    if (this instanceof HTMLDivElement) {
        this.textContent = 'work';
    }
}
// Запуск с помощью call
t1.call(document.querySelector('.out-1'));

// Task 2
// Анонимная функция, которая при нажатии кнопки b-2 запускает функцию t1 с контекстом out-2. Используем call.
document.querySelector('.b-2')?.addEventListener('click', (): void => {
    t1.call(document.querySelector('.out-2'));
});

// Task 3
// Запустите функцию max с аргументами 5, 8 и контекстом out-3. Функция запускается при загрузке страницы. Используем call.
function max(this: HTMLDivElement | null, a: number, b: number): void {
    if (this instanceof HTMLDivElement) {
        this.textContent = String(a > b ? a : b);
    }
}
max.call(document.querySelector('.out-3'), 5, 8);

// Task 4
// Анонимная функция, которая при нажатии кнопки b-4 запускает функцию max с контекстом out-4 и аргументами 22, 13. Применяем call.
document.querySelector('.b-4')?.addEventListener('click', (): void => {
    max.call(document.querySelector('.out-4'), 22, 13);
});

// Task 5
// Напишите функцию t5, которая проверяет, что у элемента, на котором она вызвана, свойство textContent не равно undefined. Возвращает true или false.
function t5(this: HTMLDivElement | null): boolean {
    if (this instanceof HTMLDivElement) {
        return this.textContent !== undefined;
    }
    return false;
}

console.log(t5.call(document.querySelector('.out-5')));
console.log(t5.call(document.querySelector('.i-5')));

// Task 6
// Запустите функцию t1 с контекстом out-6 с помощью apply.
t1.apply(document.querySelector('.out-6'));

// Task 7
// Запустите функцию max с аргументами 5, 8 и контекстом out-7 с помощью apply.
document.querySelector('.b-7')?.addEventListener('click', (): void => {
    max.apply(document.querySelector('.out-7'), [5, 8]);
});

// Task 8
// Найдите максимум из массива с помощью Math.max.apply. Контекст передаётся как null.
const out8 = document.querySelector('.out-8') as HTMLDivElement;
const ar8: number[] = [45, 23, 21];
out8.textContent = String(Math.max.apply(null, ar8));

// Task 9
// По нажатию на кнопку b-9 запускается анонимная функция, которая с помощью apply передаёт функции t9 контекст out-9 и массив ar9 элементов. Функция t9 должна вывести максимальный элемент массива.
const ar9: number[] = [66, 55, 33, 77, 22, 81, 15];
function t9(this: HTMLDivElement | null, ...arr: number[]): void {
    if (this instanceof HTMLDivElement) {
        this.textContent = String(Math.max.apply(null, arr));
    }
}
document.querySelector('.b-9')?.addEventListener('click', (): void => {
    t9.apply(document.querySelector('.out-9'), ar9);
});

// Task 10
// Допишите анонимную стрелочную функцию внутри some, которая принимает элементы массива ar9 и возвращает true, если тип данных элемента boolean.
let res10: boolean;
res10 = ar9.some((item: number): boolean => {
    return typeof item === 'boolean';
});
console.log(res10);

// Task 11
// С помощью bind создайте функцию t11, которая основана на функции t1, но контекст — out-11. Запустите эту функцию.
const t11 = t1.bind(document.querySelector('.out-11') as HTMLDivElement);
t11();

// Task 12
// С помощью bind создайте функцию t12, которая основана на функции max, но контекст — out-12. Запустите эту функцию с числами 11, 88.
const t12 = max.bind(document.querySelector('.out-12'), 11, 88);
t12();

// Task 13
// С помощью bind создайте частичную функцию t13, которая основана на функции max, но контекст — out-13. Первый аргумент функции max должен быть заменён на 50. Запустите эту функцию с числом 48.
const t13 = max.bind(document.querySelector('.out-13'), 50);
t13(48);

// Task 14
// С помощью bind создайте функцию t14, которая основана на t9, но в качестве контекста задайте out-14. Запустите t14, передав ей массив ar9.
const t14 = t9.bind(document.querySelector('.out-14') as HTMLDivElement, ...ar9);
t14();

export { };

