function dados () {
    nome = prompt('Que produto você está comprando?')
    preco = parseFloat(prompt(`Quanto custa ${nome} que você está comprando?`))
    dinheiro = parseFloat(prompt(`Qual foi o valor que você deu para pagar ${nome}`))
    troco = dinheiro - preco
    window.alert(`Você comprou ${nome} que custou R$ ${preco}.\nDeu ${dinheiro} em dinheiro e vai receber R$ ${troco}.\nVolte Sempre!`)
}