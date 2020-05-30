function calcular() {
    let res = document.getElementById('res')

    let a = parseInt(prompt('Qual é o valor de a?'))
    let b = parseInt(prompt('Qual é o valor de b?'))
    let c = parseInt(prompt('Qual é o valor de c?'))

    let delta = valor_delta(a,b,c) // valor de delta

    res.innerHTML = ''
    res.innerHTML += `<p>A equação atual é <b>${a}x² + ${b}x + ${c} = 0</b></p>`
    res.innerHTML += `<p>O cálculo realizado será <b>&Delta; ${b}² - 4 . ${a} . ${c}</b></p>`
    res.innerHTML += `<p>O valor calculado foi <b id = "delta">&Delta; = ${delta}</b></p>`
}

function valor_delta(a, b, c) {
    return (b * b) - (4 * a * c)
}