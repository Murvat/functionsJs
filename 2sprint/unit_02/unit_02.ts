export {};

// Task 1
// Напишите функцию t1, которая принимает два аргумента и выводит в .out-1 случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t1(min:number, max:number):void {
    let randomNum: number = Math.floor(min + Math.random() * (1 + max - min));
   ( document.querySelector('.out-1')as HTMLDivElement).textContent = randomNum.toString();
}

(document.querySelector('.b-1')as HTMLButtonElement).addEventListener('click', function () {
    t1(120, 140);
})



// Task 2.

//Напишите функцию t2, которая принимает три аргумента (число от, число до и блок, в который нужно вывести данные) и выводит в указанный блок случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-2. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t2(min:number, max:number, block:HTMLDivElement) {
    let randomNum = Math.floor(min + Math.random() * (max - min));
    block.textContent = randomNum.toString();
}

(document.querySelector('.b-2')as HTMLButtonElement).addEventListener('click', function () {
    const out2 = document.querySelector('.out-2')as HTMLDivElement;
    t2(120, 140, out2); // функция должна вывести случайное целое от 120 до 140 в блок out-2
})



// Task 3.
//Напишите функцию t3, которая принимает два аргумента (число от, число до ) и выводит в блок .out-3 случайное целое число от первого аргумента(включительно) до второго(включительно). Задайте значение по умолчанию для min число 0 для max число 100. Функция запускается по кнопке .b-3. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t3(min:number, max:number):void {
    let randomNum:number = Math.floor(min + Math.random() * (max - min));
   ( document.querySelector('.out-3')as HTMLDivElement).textContent = randomNum.toString();
}

(document.querySelector('.b-3')as HTMLButtonElement).addEventListener('click', function () {
    t3(0, 100);
})

// Task 4
// Напишите функцию t4, которая делит число a на b и результат выводит в out-4. Если b равно нулю, то в out-4 выводится аргумент c.

function t4(a:number, b:number, c:boolean):void {
    if (b !== 0) {
       ( document.querySelector('.out-4')as HTMLDivElement).textContent = (a / b).toString();
    } else {
        (document.querySelector('.out-4')as HTMLDivElement).textContent = c.toString();
    }


}

(document.querySelector('.b-4')as HTMLButtonElement).addEventListener('click', function () {
    t4(7, 12, false);
})


// Task 5
// Напишите функцию t5, которая делит число a на b и результат выводит в out-5. Если b равно нулю, то в out-5 выводится аргумент c, который по умолчанию равен нулю.

function t5(a:number, b:number, c:number|boolean = 0) {
    if (b !== 0) {
        (document.querySelector('.out-5')as HTMLDivElement).textContent = (a / b).toString();
    } else {
        (document.querySelector('.out-5')as HTMLDivElement).textContent = c===0?c.toString():c.toString();
    }
}

(document.querySelector('.b-5') as HTMLButtonElement).addEventListener('click', function () {
    t5(7, 12, false);
})



// Task 6
// Давайте напишем функцию t6, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. 

const out6 = document.querySelector('.out-6')as HTMLDivElement;

function t6(arr:number[], block:HTMLDivElement) {
    let out:string = arr.join(' ');
    block.textContent = out;
}

(document.querySelector('.b-6')as HTMLDivElement).addEventListener('click', function () {
    t6([99, 44, 55, 66], out6);
})



// Task 7
// Давайте напишем функцию t7, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Задайте аргумент arr равный по умолчанию пустому массиву. Добавьте внутрь функции проверку на массив аргумента arr. Если arr не массив, то в block выводим false. 

const out7 = document.querySelector('.out-7')as HTMLDivElement;

function t7(arr:number[] = [], block:HTMLDivElement) {
    if (Array.isArray(arr)) {
        let out:string = arr.join(' ');
        block.textContent = out;
    } else {
        block.textContent = 'false';
    }
}

(document.querySelector('.b-7')as HTMLButtonElement).addEventListener('click', function () {
    t7([99, 44, 55, 66], out7);
})



// Task 8
// Давайте напишем функцию t8, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. 

const out8 = document.querySelector('.out-8')as HTMLDivElement;

function t8(block:HTMLDivElement, text:string) {
    let out:string = text.trim().toLowerCase();
    block.textContent = out;

}

(document.querySelector('.b-8')as HTMLButtonElement).addEventListener('click', function () {
    t8(out8, ' HelLO wORLd       ');
})




// Task 9
// Давайте напишем функцию t9, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Зададим значение по умолчанию для text - пустую строку, это позволит нам избежать ошибок, если данный аргумент упустили, и добавим в функцию проверку - если block не существует, то функция ничего не выводит.


const out9 = document.querySelector('.out-9')as HTMLDivElement;

function t9(text:string = '', block:HTMLDivElement) {
    if (block !== undefined) {
        let out:string = text.trim().toLowerCase();
        block.textContent = out;
    };

}

(document.querySelector('.b-9')as HTMLButtonElement).addEventListener('click', function () {
    t9(' HelLO wORLd       ', out9);
})




// Task 10
// Напишите функцию, t10, которая выводит в out-10 количество переданных ей аргументов (число).

const out10 = document.querySelector('.out-10')as HTMLDivElement;

function t10(...args: number[]): void {
    // args is already an array of numbers
    const out10 = document.querySelector('.out-10') as HTMLDivElement;
    out10.textContent = args.length.toString();
};

(document.querySelector('.b-10') as HTMLButtonElement).addEventListener('click', function () {
    t10(33, 22, 44, 11, 55, 66, 11, 66); // Now works with multiple number arguments
});


// Task 11
// Напишите функцию, t11, которая выводит в out-11 cумму переданных ей аргументов (число). Используем arguments.

const out11 = document.querySelector('.out-11')as HTMLDivElement;

function t11(...args:number[]) {
    let sum:number = args.reduce((initV, curV) => initV + curV, 0);
    (document.querySelector('.out-11')as HTMLDivElement).textContent = sum.toString();

}

(document.querySelector('.b-11')as HTMLButtonElement).addEventListener('click', function () {
    t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая выводит в out-12 cумму переданных ей аргументов (число). Используем rest.

const out12 = document.querySelector('.out-12')as HTMLDivElement;

function t12(...args:number[]) {
    let sum:number = args.reduce((initV, curV) => initV + curV, 0);
    (document.querySelector('.out-12')as HTMLDivElement).textContent = sum.toString();
}

(document.querySelector('.b-12')as HTMLButtonElement).addEventListener('click', function () {
    t12(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 13
// Напишите функцию, t13, которая выводит в out-13 массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out13 = document.querySelector('.out-13')as HTMLDivElement;

function t13<T>(arr: T[], funcArg: (arr: T[]) => void): void {
    funcArg(arr);
}
// функции для вывода уже заготовлены
function showArrSpace(arr:number[]) {
    out13.innerHTML = arr.join(' ');
}

function showArrUnderscore(arr:number[]) {
    out13.innerHTML = arr.join('_');
}

(document.querySelector('.b-13')as HTMLButtonElement).addEventListener('click', function () {
    t13([3, 4, 5], showArrSpace);
    // попробуйте также вместо showArrSpace поставить showArrUnderscore
})


// Task 14
// Напишите функцию, t14, которая выводит в блок block (переданный как аргумент) массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out14 = document.querySelector('.out-14')as HTMLDivElement;

function t14<T>(arr: T[], funcArg:(arr:T[],block:HTMLDivElement)=>void, block:HTMLDivElement):void {
    funcArg(arr, block);
}

// функции для вывода уже заготовлены
function showArrSpace2(arr:number[], block:HTMLDivElement):void {
    block.innerHTML = arr.join(' ');
}

function showArrUnderscore2(arr:number[], block:HTMLDivElement):void {
    block.innerHTML = arr.join('_');
}

(document.querySelector('.b-14')as HTMLButtonElement).addEventListener('click', function () {
    t14([3, 4, 5], showArrUnderscore2, out14);
})


// Task 15
// Напишите функцию, t15, которая в зависимости от четности аргумента num запускает функцию even, или odd.

const out15 = document.querySelector('.out-15') as HTMLDivElement;

function t15(num:number, even:()=>void, odd:()=>void):void {
    num % 2 === 0 ? even() : odd();

}

function showOne() {
    out15.innerHTML = 'even';
}

function showTwo() {
    out15.innerHTML = 'odd';
}


(document.querySelector('.b-15')as HTMLButtonElement).addEventListener('click', function () {
    t15(5, showOne, showTwo);
})