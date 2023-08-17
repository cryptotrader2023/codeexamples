// Note: please restart the page if syntax highlighting works bad.
let el = document.querySelector('#header')
let myage: number = 1;
console.log(myage)
let msg: string = 'Hi friend, try edit me!'
el.innerHTML = msg

const button: HTMLElement = document.getElementById("button") as HTMLElement;
//querySelector('.button')
const firstInput: HTMLInputElement = document.querySelector('#firstNumber') as HTMLInputElement;
const secondInput: HTMLInputElement = document.querySelector('#secondNumber') as HTMLInputElement;
//const screen = document.querySelector('.screen')
console.log(button)
console.log('it shows results as you type')

function add(a, b) {
console.log(a+b);
return a+b
}
//
const add1 = (a,b ) => {
return a+b;
}

button.addEventListener('click', () => add(firstInput.value, secondInput.value))
//console.log(add1(5, 12));
