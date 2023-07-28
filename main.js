const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations__btn');
const screen = document.querySelector('.screen');
const equal = document.getElementById('equal');
const del = document.getElementById('del');
const clean = document.getElementById('clean');
let calc = '';
const arrayOfOperationsValues = ['+', '-', '*', '**', '/', '%', '.'];
const error = document.querySelector('.error');

addNumbers();
chooseOperation();
doTheOperation();
deleteCharacter();
cleanTheScreen();

function addNumbers(){
    numbers.forEach(number => number.addEventListener('click', event => addCharacter(event.target.value)));
}

function addCharacter(character){
    error.style.display = 'none';
    if(!isActionValid(character)){
        calc += character;
        screen.innerHTML += character;
    } else{
        throwErrorMesage();
    }
    
}

function chooseOperation(){
    operations.forEach((operation) => operation.addEventListener('click', event => addCharacter(event.target.value)));
}

function doTheOperation(){
    equal.addEventListener('click', () => {
        if(!calc==''){
            giveResult();
        } else {
            throwErrorMesage();
        } 
    })
}

function giveResult(){
    calc = eval(calc);
    screen.innerHTML = calc;
    calc = calc.toString();
}

function deleteCharacter(){
    del.addEventListener('click', () => {
        let calcToArray = calc.split('');
        calcToArray.pop();
        calc = calcToArray.join('');
        screen.innerHTML = calc;
    })
    
}

function cleanTheScreen(){
    clean.addEventListener('click', () => {
        screen.innerHTML = '';
        calc = '';
    })
}

function isActionValid(character){
    return arrayOfOperationsValues.includes(character) && calc == '';
}

function throwErrorMesage(){
    error.style.display = 'block';
}





