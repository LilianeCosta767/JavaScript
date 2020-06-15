var visor = window.document.getElementById('visor')
visor.innerHTML = ''

var numb1_vec = []
var numb1
var cont_numb1 = 0

var numb2_vec = []
var numb2
var cont_numb2 = 0

var exp = []
var resul

function insert_number(num) {
    // receber o primeiro numero, antes de um operador
    if(exp[0] == undefined || (exp[0] != undefined && exp[1] == undefined)){ // segunda condição para operação com primeira posição com operador
        numb1_vec.push(num)
        cont_numb1++
        change_numb1_vec() // transforma o vetor em Number
    }
    // para receber o segundo numero após o operador
    else if (exp[1] != undefined) {
        numb2_vec.push(num)
        cont_numb2++
        change_numb2_vec()
    }
    // operação com primeira posição com operador
    // else if (exp[0] != undefined && exp[1] == undefined) {

    // }
}

function insert_operator(op) {
    // expressão começa com numero
    if(numb1_vec.length != 0 && numb2_vec.length == 0) {
        console.log('entreii aqui') // TESTE
        exp.push(numb1)
        exp.push(op)
        console.log('exp = ', exp)
    }

    // verificação do operador = com posição 1 oculpada e vetor numb2_vec ocupado
    if (exp[1] != undefined && numb2_vec.length != 0 && op == "=") {
        console.log('antes do numb2, exp = ', exp)
        exp.push(numb2)
        console.log('depois do numb2, exp = ', exp)
        show_exp()
        make_account()
    }

    // preenche a primeira posição do vetor exp com um operador
    if (exp[0] == undefined) {
        exp.push(op)
    }

    // adicionar o valor numerico depois do operador na expressão iniciada com um operador
    if (op == "=" && numb1_vec.length != 0 && exp[1] == undefined) {
        exp.push(numb1)
        make_account()
    }

    // quando a posição 1 do exp tá livre
    if (op == "=") {
        make_account()
    }
}

function change_numb1_vec () {
    var texto = ""
    for (var i = 0; i < cont_numb1; i++){
        texto += numb1_vec[i] + ""
    }
    numb1 = Number(texto)
    
    // console.log('numb1 = ', texto)
}

function change_numb2_vec () {
    var texto = ""
    for (var i = 0; i < cont_numb2; i++){
        texto += numb2_vec[i] + ""
    }
    numb2 = Number(texto)
    // console.log('numb2 = ', texto)
    
}

function show_exp () {
    var texto = ""
    for (var i = 0; i < exp.length; i++){
        texto += exp[i] + ""
    }
    console.log('exp final = ',texto)
}

function make_account () {
    switch (exp[1]) {
        case "+":
            resul = exp[0] + exp[2]
            console.log('resultado = ', resul)
            break;
        case "-":
            resul = exp[0] - exp[2]
            console.log('resultado = ', resul)
            break;
        case "/":
            resul = exp[0] / exp[2]
            console.log('resultado = ', resul)
            break;
        case "*":
            resul = exp[0] * exp[2]
            console.log('resultado = ', resul)
            break;
        case "^":
            resul = Math.pow(exp[0], exp[2])
            console.log('resultado = ', resul)
            break;
        case "%":
            resul = exp[0] / 100
            console.log('resultado = ', resul)
            break;
        default:
            if(exp[0] == "√") {
                resul = Math.sqrt(exp[1])
                console.log('resultado = ', resul)
            }
    }
}