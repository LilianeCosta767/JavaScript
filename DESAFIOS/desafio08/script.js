let res = document.getElementById('res') //pega a variavel res do arquivo html que é um id

function dados() {
    let produto = prompt('QUal é o produto que você está comprando?') //o prompt é uma forma de pegar informações do usuario
    let preco = parseFloat(prompt(`Qual é o preço de ${produto}?`)) // prompt envolto com parseFloat faz com que o que foi digitado seja convertido para float
    calculo(produto, preco) //faz chamada para outra função
}

function calculo( produto,  preco) {
    let desconto = 0.1 * preco
    let valor_final = preco - desconto

    //o res.innerHTML substitui a área do id res lá do arquivo html
    res.innerHTML = ''
    res.innerHTML += `<h1>Calculando desconto de 10% para ${produto}</h1>`
    res.innerHTML += '</br>'
    res.innerHTML += `O preço orignal era R$ ${preco}`
    res.innerHTML += '</br>'
    res.innerHTML += `Você acaba de ganhar R$ ${desconto} de desconto (-10%)`
    res.innerHTML += '</br>'
    res.innerHTML += `No fim, você vai pagar R$ ${valor_final} no produto ${produto}`
    res.innerHTML += '</br>'
}