let res = document.getElementById('res')

let cotacao = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function calculo() {
    reais = parseFloat(prompt('Quantos R$ você tem na carteira?'))
    dolar = reais/cotacao
    res.innerHTML = `Convertendo, você tem ${dolar} dolares`
}