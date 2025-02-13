// Task 1
// Анонимная функция-замыкание, в которой создается переменная, равная 75, и повешен клик на кнопку .b-1,
// который увеличивает переменную и устанавливает ширину блока .out-1.
(function (): void {
    let w: number = 75;
    (document.querySelector('.b-1') as HTMLButtonElement).onclick = function (): void {
        w++;
        (document.querySelector('.out-1') as HTMLElement).style.width = w + 'px';
    };
})();

// Task 2
// Анонимная функция-замыкание, в которой создаются переменные w = 75 и h = 30. 
// Одна функция увеличивает ширину блока .out-2 по клику на .b-2-1, вторая – высоту блока .out-2 по клику на .b-2-2.
(function (): void {
    let w: number = 75;
    let h: number = 30;
    (document.querySelector('.b-2-1') as HTMLButtonElement).onclick = function (): void {
        w++;
        (document.querySelector('.out-2') as HTMLElement).style.width = w + 'px';
    };
    (document.querySelector('.b-2-2') as HTMLButtonElement).onclick = function (): void {
        h++;
        (document.querySelector('.out-2') as HTMLElement).style.height = h + 'px';
    };
})();

// Task 3
// Функция-замыкание, создающая count = 0 и возвращающая анонимную функцию, которая увеличивает count на 1 и возвращает его.
let count3: () => number = (function (): () => number {
    let count: number = 0;
    return function (): number {
        count++;
        return count;
    };
})();
console.log(count3());
console.log(count3());

// Task 4
// Функция-замыкание createCount, которая принимает начальное значение (по умолчанию 0) и возвращает функцию, 
// увеличивающую count на 1 и возвращающую его.
function createCount(num: number = 0): () => number {
    let count: number = num;
    return function (): number {
        count++;
        return count;
    };
}
let count4: () => number = createCount(444);
console.log(count4());
console.log(count4());

// Task 5
// Функция-замыкание generatePassword, которая принимает массив символов и возвращает функцию.
// Внутри создается функция randomInteger, возвращающая случайное целое число, а возвращаемая функция выбирает случайный символ из массива.
function generatePassword(arr: string[]): () => string {
    function randomInteger(min: number, max: number): number {
        return Math.floor(min + Math.random() * (max - min + 1));
    }
    return function (): string {
        let rand: number = randomInteger(0, arr.length - 1);
        return arr[rand];
    };
}
let password: () => string = generatePassword(['b', 'y', 'Y', 'b', 'z']);
console.log(password());

// Task 6
// Функция-замыкание generatePassword2, принимающая массив символов и длину пароля.
// Возвращает функцию, которая генерирует строку длины n, выбирая символы случайным образом.
function generatePassword2(arr: string[], n: number): () => string {
    function randomInteger(min: number, max: number): number {
        return Math.floor(min + Math.random() * (max - min + 1));
    }
    return function (): string {
        let out: string = '';
        for (let i: number = 0; i < n; i++) {
            let rand: number = randomInteger(0, arr.length - 1);
            out += arr[rand];
        }
        return out;
    };
}
let password2: () => string = generatePassword2(['b', 'y', 'Y', 'b', 'z'], 4);
console.log(password2());

// Task 7
// Функция-замыкание generateElement, которая принимает два аргумента: название тега и текст.
// Возвращает функцию, которая создает указанный тег, добавляет в него текст через innerHTML и возвращает его.
function generateElement(elem: string, text: string): () => HTMLElement {
    return function (): HTMLElement {
        let htmlTag: HTMLElement = document.createElement(elem);
        htmlTag.innerHTML = text;
        return htmlTag;
    };
}
let divCreator: () => HTMLElement = generateElement('div', 'hello');
let spanCreator: () => HTMLElement = generateElement('span', 'hi');
(document.querySelector('.out-7') as HTMLElement).append(divCreator());
(document.querySelector('.out-7') as HTMLElement).append(divCreator());
(document.querySelector('.out-7') as HTMLElement).append(spanCreator());
(document.querySelector('.out-7') as HTMLElement).append(spanCreator());

// Task 8
// Функция-замыкание generateElement2, принимающая название тега и возвращающая функцию.
// Эта функция принимает текст, создает указанный тег, устанавливает ему innerHTML равным переданному тексту и возвращает тег.
function generateElement2(elem: string): (t: string) => HTMLElement {
    return function (t: string): HTMLElement {
        let htmlTag: HTMLElement = document.createElement(elem);
        htmlTag.innerHTML = t;
        return htmlTag;
    };
}
let divCreator2: (t: string) => HTMLElement = generateElement2('div');
let spanCreator2: (t: string) => HTMLElement = generateElement2('span');
(document.querySelector('.out-8') as HTMLElement).append(divCreator2('ex1'));
(document.querySelector('.out-8') as HTMLElement).append(divCreator2('ex2'));
(document.querySelector('.out-8') as HTMLElement).append(spanCreator2('ex3'));
(document.querySelector('.out-8') as HTMLElement).append(spanCreator2('ex4'));

// Task 9
// Функция-замыкание generateDay, которая содержит массив дней недели и возвращает функцию.
// Эта функция, получающая число n, возвращает n-й день недели (n-1 индекс) из массива.
function generateDay(): (n: number) => string {
    const days: string[] = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    return function (n: number): string {
        return days[n - 1];
    };
}
const day: (n: number) => string = generateDay();
console.log(day(2));
console.log(day(3));

// Task 10
// Функция-замыкание generateMonth, которая содержит массив месяцев и возвращает функцию,
// получающую число n, возвращающую n-й месяц (n-1 индекс) из массива.
function generateMonth(): (n: number) => string {
    const month: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return function (n: number): string {
        return month[n - 1];
    };
}
const month: (n: number) => string = generateMonth();
console.log(month(2));
console.log(month(3));

