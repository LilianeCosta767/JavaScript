let res = document.getElementById('res')
let paragrafo = document.getElementById('paragrafo')

function dados() {
    let produto = prompt('QUal é o produto que você está comprando?')
    let preco = parseFloat(prompt(`Qual é o preço de ${produto}?`))
    calculo(produto, preco)
}

function calculo( produto,  preco) {
    let desconto = 0.1 * preco
    let valor_final = preco - desconto

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