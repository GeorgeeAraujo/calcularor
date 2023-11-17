/* Declaração de variáveis e objeto com todos os elementos HTML da calculadora */

const calculator = {
    numbers: ()=> document.querySelectorAll('.numbers'),
    operations: () => document.querySelectorAll('.operations__btn'),
    screen: ()=> document.querySelector('.screen'),
    equal: ()=>document.getElementById('equal'),
    del: ()=> document.getElementById('del'),
    clean: ()=>document.getElementById('clean'),
    arrayOfOperationsValues: ['+', '-', '*', '**', '/', '%', '.'],
    error: () => document.querySelector('.error')
}
let calc = '';

/*Chamada das funções */

addNumbers();
chooseOperation();
doTheOperation();
deleteCharacter();
cleanTheScreen();

/*Declaração das funções */

function addNumbers(){ //Função que adiciona um ouvinte de eventos ao números.
    calculator.numbers().forEach(number => number.addEventListener('click', event => addCharacter(event.target.value)));
}

function addCharacter(character){ //Função que adiciona o caracter clicado na tela.
    calculator.error().style.display = 'none';
    if(!isActionInvalid(character)){
        calc += character;
        calculator.screen().innerHTML += character;
    } else{
        throwErrorMesage();
    }
    
}

function chooseOperation(){ //Função que permite a escolha da operação a ser realizada.
    calculator.operations().forEach((operation) => operation.addEventListener('click', event => addCharacter(event.target.value)));
}

function doTheOperation(){ //Função que realiza a operação a partir do clique no botão de resultado ou chama a função de erro caso ocorra algum problema.
    calculator.equal().addEventListener('click', () => {
        if(!calc==''){
            giveResult();
        } else {
            throwErrorMesage();
        } 
    })
}

function giveResult(){ //Realiza o cálculo a partir do método eval. 
    calc = eval(calc);
    calculator.screen().innerHTML = calc;
    calc = calc.toString();
}

function deleteCharacter(){ //Deleta caracteres da tela, a partir dos métodos de array split, pop e join.
    calculator.del().addEventListener('click', () => {
        let calcToArray = calc.split('');
        calcToArray.pop();
        calc = calcToArray.join('');
        calculator.screen().innerHTML = calc;
    })
    
}

function cleanTheScreen(){ //Remove todos os caracteres da tela.
    clean.addEventListener('click', () => {
        calculator.screen().innerHTML = '';
        calc = '';
    })
}

function isActionInvalid(character){ //Caso o usuário tente inserir uma operação antes de qualquer número,torna a operação inválida
    return calculator.arrayOfOperationsValues.includes(character) && calc == '';
}   

function throwErrorMesage(){ //Mostra o erro na tela.
    calculator.error().style.display = 'block';
}





