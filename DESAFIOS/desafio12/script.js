function verificar () {
    let res = document.getElementById('res')
    let differ
    
    let old_price = parseFloat(prompt('Qual era o preço anterior do produto?'))
    let new_price = parseFloat(prompt('Qual é o preço atual do produto?'))

    res.innerHTML = ''
    res.innerHTML += `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava R$ ${old_price} e agora custa R$ ${new_price}</p>`
    // mais barato
    if(old_price > new_price) {
        let differ = old_price - new_price
        let variation = (differ * 100) / new_price

        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$ ${differ} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variation} para baixo.</p>`
    }
    // mais caro
    else {
        let differ = new_price - old_price
        let variation = (differ * 100) / old_price
        variation = variation.toFixed(2)

        res.innerHTML += `<p>Hoje o produto está mais caro</p>`
        res.innerHTML += `<p>O preço subiu R$ ${differ} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de R$ ${variation} para cima.</p>`
    }
}