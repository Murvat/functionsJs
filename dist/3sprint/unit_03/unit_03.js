"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1
// Напишите функцию t1, которая возвращает сумму переданных ей аргументов a и b.
function t1(a, b) {
    return a + b;
}
document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(120, 140).toString();
});
// Task 2
// Напишите функцию t2, которая принимает 2 аргумента и возвращает больший из них.
function t2(a, b) {
    return Math.max(a, b);
}
document.querySelector('.b-2').addEventListener('click', function () {
    document.querySelector('.out-2').textContent = t2(120, 140).toString();
});
// Task 3
// На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран.
function t3() {
    const checkbox = document.querySelector('.ch-3');
    return checkbox.checked ? checkbox.value : false;
}
document.querySelector('.b-3').addEventListener('click', function () {
    var _a;
    document.querySelector('.out-3').textContent = ((_a = t3()) === null || _a === void 0 ? void 0 : _a.toString()) || '';
});
// Task 4
// На странице есть radiobutton .r-4. Напишите функцию, которая возвращает value выбранного radiobutton.
function t4() {
    const radiobuttons = document.querySelectorAll('.r-4');
    for (let i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            return radiobuttons[i].value;
        }
    }
    return undefined;
}
document.querySelector('.b-4').addEventListener('click', function () {
    var _a;
    document.querySelector('.out-4').textContent = ((_a = t4()) === null || _a === void 0 ? void 0 : _a.toString()) || '';
});
// Task 5
// Напишите функцию t5, которая получает из s51 число, из s52 знак и из s53 число и 
// возвращает результат математической операции над этими числами с этим знаком.
function t5() {
    const s51 = Number(document.querySelector('.s51').value);
    const s52 = document.querySelector('.s52').value;
    const s53 = Number(document.querySelector('.s53').value);
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
document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = t5().toString();
});
// Task 6
// Напишите функцию t6, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции.
function t6(num1, num2, sign) {
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
document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = t6(100, 2, '*').toString();
});
// Task 7
// Напишите функцию t7, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях.
function t7(arg) {
    return typeof arg === 'number';
}
document.querySelector('.b-7').addEventListener('click', function () {
    document.querySelector('.out-7').textContent = t7(100).toString();
});
// Task 8
// Напишите функцию t8, которая принимает число дробь и параметр 'floor' или 'ceil' и возвращает число с соответствующим округлением.
function t8(num, method) {
    switch (method) {
        case 'ceil':
            return Math.ceil(num);
        case 'floor':
            return Math.floor(num);
        default:
            return num;
    }
}
document.querySelector('.b-8').addEventListener('click', function () {
    document.querySelector('.out-8').textContent = (10 + t8(100.11, 'ceil')).toString();
});
// Task 9
// Напишите функцию t9, которая принимает число и степень и возвращает true если результат четный, false если нечетный.
function t9(n, p) {
    const num = Math.pow(n, p);
    return num % 2 === 0;
}
document.querySelector('.b-9').addEventListener('click', function () {
    document.querySelector('.out-9').textContent = t9(3, 3).toString();
});
// Task 10
// Напишите функцию t10, которая возвращает количество переданных ей аргументов (число).
function t10(...args) {
    return args.length;
}
document.querySelector('.b-10').addEventListener('click', function () {
    document.querySelector('.out-10').textContent = t10(33, 22, 44, 11, 55, 66, 11, 66).toString();
});
// Task 11
// Напишите функцию t11, которая возвращает сумму переданных ей аргументов (число). Используем arguments/rest.
function t11(...args) {
    return args.reduce((acc, curV) => acc + curV, 0);
}
document.querySelector('.b-11').addEventListener('click', function () {
    document.querySelector('.out-11').textContent = t11(33, 22, 44, 11, 55, 66, 11, 66).toString();
});
// Task 12
// Напишите функцию t12, которая возвращает сумму переданных ей аргументов (число). Используем rest.
function t12(...args) {
    return args.reduce((acc, curV) => acc + curV, 0);
}
document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = t12(33, 22, 44, 11, 55, 66, 11, 66).toString();
});
// Task 13
// Напишите функцию t13, которая возвращает случайное целое число в заданном диапазоне min, max.
function t13(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = t13(100, 120).toString();
});
// Task 14
// Напишите функцию t14, которая возвращает строку в виде rgb(xxx,yyy,zzz) где xxx, yyy, zzz случайные числа от 0 до 255.
function t14() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
document.querySelector('.b-14').addEventListener('click', function () {
    document.querySelector('.out-14').style.background = t14();
});
// Task 15
// Напишите функцию t15, которая принимает строку и возвращает очищенную строку или false если строка содержит только пробелы.
function t15(str) {
    return str.trim().length ? str.trim() : false;
}
document.querySelector('.b-15').addEventListener('click', function () {
    console.log(t15('           hi              '));
});
// Task 16
// Напишите функцию t16, которая принимает строку и возвращает строку приведенную к нижнему регистру.
function t16(str) {
    return typeof str === 'string' ? str.toLowerCase() : false;
}
document.querySelector('.b-16').addEventListener('click', function () {
    var _a;
    document.querySelector('.out-16').textContent = ((_a = t16('HelLO wORLd')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
});
// Task 17
// Напишите функцию t17, которая получает value выбранного option select.s-171 и возвращает его.
function t17() {
    return document.querySelector('select.s-171').value;
}
document.querySelector('.s-171').addEventListener('change', function () {
    document.querySelector('.s-172').value = t17();
});
// Task 18
// Напишите функцию t18, которая получает value из input.i-18 и возвращает его.
function t18() {
    return document.querySelector('input.i-18').value;
}
document.querySelector('.i-18').addEventListener('input', function () {
    document.querySelector('.out-18').textContent = t18();
});
// Task 19
// Напишите функцию t19, которая получает value из input.i-19 и возвращает его.
function t19() {
    return document.querySelector('input.i-19').value;
}
document.querySelector('.i-19').addEventListener('input', function () {
    document.querySelector('.out-19').style.borderRadius = t19() + 'px';
});
// Task 20
// Напишите функцию t20, которая принимает строку и возвращает "развернутую" строку.
function t20(s) {
    return s.split('').reverse().join(' ');
}
document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = t20('hello');
});
// Task 21
// Напишите функцию t21, которая в зависимости от параметра even или odd возвращает случайное целое четное или нечетное число от 10 до 20.
function t21(s) {
    if (s === 'even') {
        let num1 = Math.floor(10 + Math.random() * (20 - 10));
        if (num1 % 2 !== 0)
            return false;
        return num1;
    }
    else if (s === 'odd') {
        let num2 = Math.floor(10 + Math.random() * (20 - 10));
        if (num2 % 2 === 0)
            return false;
        return num2;
    }
    return undefined;
}
document.querySelector('.b-21').addEventListener('click', function () {
    // For demonstration, concatenating strings carefully:
    document.querySelector('.out-21').textContent = `Result: ${t21('even')}`;
});
// Task 22
// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true.
function callback22(item) {
    return item % 2 === 0;
}
function t22() {
    const ar22 = [3, 4, 5, 6, 7, 8];
    return ar22.filter(callback22);
}
document.querySelector('.b-22').addEventListener('click', function () {
    document.querySelector('.out-22').textContent = t22().toString();
});
// Task 23
// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.
function callback23(item) {
    return Math.pow(item, 2);
}
function t23() {
    const ar23 = [3, 4, 5, 6, 7, 8];
    return ar23.map(callback23);
}
document.querySelector('.b-23').addEventListener('click', function () {
    document.querySelector('.out-23').textContent = t23().toString();
});
// Task 24
// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.
function callback24(item) {
    return Math.pow(item, 2);
}
function t24() {
    const ar24 = [3, 4, 5, 6, 7, 8];
    const t = [];
    ar24.forEach((item) => {
        t.push(callback24(item));
    });
    return t;
}
document.querySelector('.b-24').addEventListener('click', function () {
    document.querySelector('.out-24').textContent = t24().toString();
});
// Task 25
// Напишите функцию, которая принимает массив как аргумент и проверяет, что в нем одни числа.
function t25(arr) {
    return arr.every((item) => typeof item === 'number');
}
document.querySelector('.b-25').addEventListener('click', function () {
    document.querySelector('.out-25').textContent = t25([4, 5, 6]).toString();
});
// Task 26
// Напишите функцию, которая получает из input.i-26 имя пользователя и если не пустая строка - выводит его в нижнем регистре.
function t26() {
    const inputValue = document.querySelector('input.i-26').value.trim();
    if (inputValue.length > 0) {
        document.querySelector('.out-26').textContent = inputValue.toLowerCase();
    }
}
document.querySelector('.b-26').addEventListener('click', t26);
// Task 27
// Напишите функцию, которая получает из input.i-27 значение и проверяет его наличие в объекте obj27.
const obj27 = {
    h: 'a',
    j: 'b',
    k: 'z',
    m: 'w'
};
function t27(v) {
    for (const key in obj27) {
        if (obj27[key] === v) {
            return key;
        }
    }
    return false;
}
document.querySelector('.b-27').addEventListener('click', function () {
    var _a;
    const v = document.querySelector('.i-27').value;
    document.querySelector('.out-27').textContent = ((_a = t27(v)) === null || _a === void 0 ? void 0 : _a.toString()) || '';
});
// Task 28
// Напишите функцию, которая принимает два аргумента - строку и подстроку - и возвращает true, если подстрока есть.
function t28(str, substr) {
    return str.includes(substr);
}
document.querySelector('.b-28').addEventListener('click', function () {
    document.querySelector('.out-28').textContent = t28('hello my world', 'or').toString();
});
// Task 29
// Напишите функцию t29, которая получает в качестве аргументов строки и возвращает большую строку (по прямому сравнению).
function t29(str1, str2) {
    return str1 > str2 ? str1 : str2;
}
document.querySelector('.b-29').addEventListener('click', function () {
    document.querySelector('.out-29').textContent = t29('hello', 'orBait');
});
// Task 30
// Напишите функцию t30, которая возвращает функцию t31.
function t31() {
    return true;
}
function t30() {
    return t31;
}
document.querySelector('.b-30').addEventListener('click', function () {
    document.querySelector('.out-30').textContent = t30()().toString();
});
