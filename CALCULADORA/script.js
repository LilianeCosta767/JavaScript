var visor = window.document.getElementById('visor')
visor.innerHTML = ''

var operation = ["", "", ""]
number = ""
var result

function f_number(num) {
    number += num
    // console.log('number = ', number)
    show_result(number)
}

function f_operation(op) {
    if(op != "="){
        show_result(op)
    }
    // começando com um operador
    if (operation[0] == "" && number == "") {
        operation[0] = op
    }
    // começando com um numero, entao, em seguida vem um operador
    else if (operation[0] == "" && number != "") {
        operation[0] = Number(number)
        operation[1] = op
        number = ""
        console.log('op = ', op)
    }
    // quando aperta igual
    else if (op == "=") {
        // digitação de outro numero
        if (operation[2] == "" && number != "") {
            operation[2] = Number(number)
            number = ""
            make_account()
        }
        // operação com as 3 posições
        else if (operation[2] != ""){
            make_account()
        }
        // operação com 2 posições
        else if (operation[2] == "") {
            // posição 0 ocupada, number nao esta vazio e a posicao 0 não é um número
            if (number != "" && operation[0] != "") {
                operation[1] = Number(number)
                number = ""
                make_account()
            }
            // caso de na posição 0 ser um operador e na posicação 1 ser um numero
            console.log('operation = ', operation)
            make_account(op)
        }
        show_result()
        clear_all()
    }
}

function make_account() {
    switch(operation[1]){
        case '%': 
            result = operation[0] / 100
            console.log('result = ', result)
            break;
        case '+':
            result = operation[0] + operation[2]
            console.log('result = ', result)
            break;
        case '-':
            result = operation[0] - operation[2]
            console.log('result = ', result)
            break;
        case '*':
            result = operation[0] * operation[2]
            console.log('result = ', result)
            break;
        case '/':
            result = operation[0] / operation[2]
            console.log('result = ', result)
            break;
        case '^':
            result = Math.pow(operation[0], operation[2])
            console.log('result = ', result)
            break;
        default:
            if(operation[0] == '√'){
                result = Math.sqrt(operation[1])
                console.log('result = ', result)
            }
            else{
                console.log('nao deu certo')
            }
    }
}

// function is_number(num) {
//     if(typeof(num) == typeof(0)) {
//         return true
//     } else {
//         return false
//     }
// }

function clear_all () {
    operation = ["", "", ""]
    number = ""
    result = ""
}

function clear_one () {
    number = number.substring(0,(number.length - 1));
    console.log('number = ', number)
    show_result(number)
}

function show_result(imp) {
    // visor.innerHTML = ''
    // visor.innerHTML += `${operation[0]} ${operation[1]} ${operation[2]} `
    visor.innerHTML += `${imp}`
}