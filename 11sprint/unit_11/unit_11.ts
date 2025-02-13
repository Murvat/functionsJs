// Task 1:
// При нажатии кнопки запускается функция t1. Функция t1, с помощью рекурсивной функции r1 
// должна добавлять в out имена всех тегов внутри блока z1, разделяя их пробелом. Функция t1 возвращает out.
function t1(elem: HTMLElement | null): string {
    let out: string = '';
    if (!elem) return out;

    function r1(element: HTMLElement): void {
        const res: HTMLCollection = element.children;
        for (let i: number = 0; i < res.length; i++) {
            out += (res[i] as HTMLElement).tagName + ' ';
            r1(res[i] as HTMLElement);
        }
    }
    r1(elem);
    return out;
}

(document.querySelector('.b-1') as HTMLButtonElement)?.addEventListener('click', () => {
    const z1: HTMLElement = document.querySelector('.z-1') as HTMLElement;
    const out1Elem: HTMLElement = document.querySelector('.out-1') as HTMLElement;
    out1Elem.textContent = t1(z1);
});


// Task 2:
// При нажатии кнопки запускается функция t2. Функция t2, с помощью рекурсивной функции r2 
// суммирует числа из всех элементов внутри div.z-2 и возвращает сумму s.
function t2(elem: HTMLElement | null): number {
    let s: number = 0;
    if (!elem) return s;

    function r2(element: HTMLElement): void {
        Array.from(element.children).forEach((child: Element) => {
            const value: number = parseFloat(child.textContent || '');
            if (!isNaN(value)) {
                s += value;
            }
            r2(child as HTMLElement);
        });
    }
    r2(elem);
    return s;
}

(document.querySelector('.b-2') as HTMLButtonElement)?.addEventListener('click', () => {
    const z2: HTMLElement = document.querySelector('.z-2') as HTMLElement;
    const out2Elem: HTMLElement = document.querySelector('.out-2') as HTMLElement;
    out2Elem.textContent = t2(z2).toString();
});


// Task 3:
// При нажатии кнопки запускается функция t3. Функция t3, с помощью рекурсивной функции r3
// должна очистить текст внутри z-3 от тегов span, b, i и p, оставив только текст со знаками препинания.
// Функция возвращает out.
function t3(elem: HTMLElement | null): string {
    let out: string = '';
    if (!elem) return out;

    function r3(element: HTMLElement): void {
        const res: HTMLElement[] = Array.from(element.children) as HTMLElement[];
        for (let i: number = 0; i < res.length; i++) {
            // The original code uses res.pop(res[i].tagName) which is invalid.
            // Preserving the intent (although logic might need improvement), we remove the last element.
            res.pop();
            r3(res[i]);
            console.log(element);
        }
    }
    r3(elem);
    return out;
}

(document.querySelector('.b-3') as HTMLButtonElement)?.addEventListener('click', () => {
    const z3: HTMLElement = document.querySelector('.z-3') as HTMLElement;
    const out3Elem: HTMLElement = document.querySelector('.out-3') as HTMLElement;
    out3Elem.textContent = t3(z3);
    console.log(t3(z3));
});


// Task 4:
// При нажатии кнопки запускается функция t4. Функция t4, с помощью рекурсивной функции r4,
// должна тем тегам внутри z-4, которые не имеют вложенных тегов, добавить style.background = 'orange'.
function t4(elem: HTMLElement | null): void {
    if (!elem) return;

    function r4(element: HTMLElement): void {
        const children: HTMLElement[] = Array.from(element.children) as HTMLElement[];
        if (children.length === 0) {
            element.style.background = 'orange';
        } else {
            children.forEach((child: HTMLElement) => r4(child));
        }
    }
    r4(elem);
}

(document.querySelector('.b-4') as HTMLButtonElement)?.addEventListener('click', () => {
    const z4: HTMLElement = document.querySelector('.z-4') as HTMLElement;
    t4(z4);
});


// Task 5:
// При нажатии кнопки запускается функция t5. Функция t5, с помощью рекурсивной функции r5,
// должна те теги внутри z-5, которые не имеют вложенных тегов, заменить на теги mark.
function t5(elem: HTMLElement | null): void {
    if (!elem) return;

    function r5(element: HTMLElement): void {
        const children: HTMLElement[] = Array.from(element.children) as HTMLElement[];
        if (children.length === 0) {
            const mark: HTMLElement = document.createElement('mark');
            mark.innerHTML = element.innerHTML;
            element.replaceWith(mark);
        } else {
            children.forEach((child: HTMLElement) => r5(child));
        }
    }
    r5(elem);
}

(document.querySelector('.b-5') as HTMLButtonElement)?.addEventListener('click', () => {
    const z5: HTMLElement = document.querySelector('.z-5') as HTMLElement;
    t5(z5);
});
export{}
