"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1
// Напишите функцию стрелочную функцию t1, которая аналогична закомментированной функции.
const t1 = () => {
    const x = 77;
    const y = 99;
    console.log(x + y);
};
document.querySelector('.b-1').addEventListener('click', t1);
// Task 2.
// Напишите стрелочную функцию, которая является аналогом анонимной функции, которая запускается при клике на b-2.
document.querySelector('.b-2').addEventListener('click', () => {
    const x = 99;
    const y = 88;
    document.querySelector('.out-2').textContent = String(x + y);
});
// Task 3.
// Напишите функцию стрелочную функцию t3, которая аналогична закомментированной функции.
const t3 = (a, b) => {
    document.querySelector('.out-3').textContent = String(a + b);
};
document.querySelector('.b-3').addEventListener('click', function () {
    t3(4, 5);
});
// Task 4
// Напишите функцию стрелочную функцию t4, которая аналогична закомментированной функции.
const t4 = (s) => {
    document.querySelector('.out-4').textContent = String(s.trim().length);
};
document.querySelector('.b-4').addEventListener('click', function () {
    t4('   aha     ');
});
// Task 5
// Напишите функцию стрелочную функцию t5, которая аналогична закомментированной функции.
const t5 = (a, b) => {
    return Math.pow(a, b);
};
document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = String(t5(3, 4));
});
// Task 6
// Напишите функцию стрелочную функцию t6, которая аналогична закомментированной функции.
const t6 = (a) => a % 2 === 0;
document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = String(t6(34));
});
// Task 7
// Напишите функцию стрелочную функцию t7, которая аналогична закомментированной функции. Все функции должны быть стрелочные.
const t7 = (arg) => {
    const arr = arg.map((item) => (item * 2));
    return arr;
};
document.querySelector('.b-7').addEventListener('click', function () {
    document.querySelector('.out-7').textContent = String(t7([4, 5, 6]));
});
// Task 8
// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.
const t8 = (arr) => {
    const arr2 = arr.filter((item) => item > 5);
    return arr2;
};
document.querySelector('.b-8').addEventListener('click', function () {
    document.querySelector('.out-8').textContent = String(t8([3, 4, 5, 6, 7, 8]));
});
// Task 9
// Напишите функцию стрелочную функцию t9, которая аналогична закомментированной функции. Все функции должны быть стрелочные.
const t9 = (arr) => arr.reduce((accum, item) => accum + item, 0);
document.querySelector('.b-9').addEventListener('click', function () {
    document.querySelector('.out-9').textContent = String(t9([20, 30, 40]));
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
function f11(...args) {
    console.log(arguments);
}
const t11 = (...args) => {
    try {
        console.log(args);
    }
    catch (err) {
        console.log('argument not defined');
    }
};
document.querySelector('.b-11').addEventListener('click', function () {
    f11(77, 88, 99);
    t11(55, 44, 66);
});
// Task 12
// напишите стрелочную функцию t12, которая возвращает большее из переданных ей двух чисел. Числа передаются в качестве аргумента.
const t12 = (a, b) => (a > b ? a : b);
document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = String(t12(9, 22));
});
// Task 13
// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.
const t13 = (min, max) => {
    return Math.floor(min + Math.random() * (1 + max - min));
};
document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = String(t13(100, 120));
});
// Task 14
// Напишите стрелочную функцию t14, которая получает строку как аргумент и возвращает строку очищенную от пробелов (с начала и конца) или false если строка содержит только пробелы. 
const t14 = (str) => {
    const trimmed = str.trim();
    return trimmed ? trimmed : false;
};
document.querySelector('.b-14').addEventListener('click', function () {
    console.log(t14('           hi              '));
});
// Task 15
// Напишите стрелочную функцию, которая проверяет что пользователь ввел в input. Если число - возвращает true, если строку - false. 
const t15 = (input) => !isNaN(Number(input));
document.querySelector('.b-15').addEventListener('click', function () {
    const num = document.querySelector('.i-15').value;
    document.querySelector('.out-15').textContent = String(t15(num));
});
// Task 16
// Напишите стрелочную функцию t16, которая проверяет что в массиве находится четное количество элементов. Возвращает true, false.
const t16 = (num) => num.length % 2 === 0;
document.querySelector('.b-16').addEventListener('click', function () {
    document.querySelector('.out-16').textContent = String(t16([4, 5, 6]));
});
// Task 17
// Напишите стрелочную функцию t17, которая проверяет что в массиве находятся только числа. Если да - то возвращает true, если нет, false.
const t17 = (arr) => {
    const res = arr.reduce((accum, init) => accum + init, 0);
    return !isNaN(res);
};
document.querySelector('.b-17').addEventListener('click', function () {
    document.querySelector('.out-17').textContent = String(t17([4, 5, 6]));
});
// Task 18
// Напишите стрелочную функцию t18, которая получает два аргумента - массив и число. Возвращает true если число есть в массиве и false если нет.
const t18 = (arr, num) => {
    return arr.includes(num);
};
document.querySelector('.b-18').addEventListener('click', function () {
    document.querySelector('.out-18').textContent = String(t18([4, 5, 6], 6));
});
// Task 19
// Напишите стрелочную функцию t19, которая принимает строку и аргумент true или false. Если второй аргумент false - то возвращает строку. Если true - возвращает перевернутую строку.
const t19 = (str, bool) => {
    return bool ? str.split('').reverse().join('') : str;
};
document.querySelector('.b-19').addEventListener('click', function () {
    document.querySelector('.out-19').textContent = t19('hello', true);
});
// Task 20
// Напишите стрелочную функцию t20, которая принимает объект и число. Если число есть в объекте то возвращает первый встреченный ключ с таким числом. Если нет - false.
const j20 = {
    h: 4,
    j: 7,
    k: 22,
    m: 7
};
const t20 = (obj, num) => {
    if (Object.values(obj).includes(num)) {
        for (const key in obj) {
            if (obj[key] === num) {
                return key;
            }
        }
    }
    return "false";
};
document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = t20(j20, 6);
});
