var visor = window.document.getElementById('visor')

var numb1_vec = []
var numb1
var cont_numb1 = 0

var numb2_vec = []
var numb2
var cont_numb2 = 0

var exp = []
var resul
visor.innerHTML = ''

console.log('teste = ', exp[0])

function insert_number(num) {
    // receber o primeiro numero, antes de um operador
    if(exp[0] == undefined){
        numb1_vec.push(num)
        cont_numb1++
        show_numb1_vec()
    }
    // para receber o segundo numero após o operador
    else if (exp[1] != undefined) {
        numb2_vec.push(num)
        cont_numb2++
        show_numb2_vec()
    }
}

function insert_operator(op) {
    // expressão começa com numero
    if(numb1_vec.length != 0 && numb2_vec.length == 0) {
        console.log('entreii aqui') // TESTE
        exp.push(numb1)
        exp.push(op)
        console.log('exp = ', exp)
    }

    // verificação do operador =
    if (exp[1] != undefined && numb2_vec.length != 0 && op == "=") {
        console.log('antes do numb2, exp = ', exp)
        exp.push(numb2)
        console.log('depois do numb2, exp = ', exp)
        show_exp()
    }

    if (op == "=") {
        make_account()
    }
}

function show_numb1_vec () {
    var texto = ""
    for (var i = 0; i < cont_numb1; i++){
        texto += numb1_vec[i] + ""
    }
    numb1 = Number(texto)
    // console.log('numb1 = ', texto)
}

function show_numb2_vec () {
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
    }
}