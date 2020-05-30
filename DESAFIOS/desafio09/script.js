function reajuste() {
    let res = document.getElementById('res')

    let nome = prompt('Qual é o nome do funcionário')
    let salario = parseFloat(prompt(`Qual é o salário de ${nome}`))
    let porcent = parseInt(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let aumento = (porcent / 100) * salario

    res.innerHTML = ''
    res.innerHTML += `<h2>${nome} recebeu um aumento salarial!</h2>`
    res.innerHTML += `<p>O salário atual era R$ ${salario}.</p>`
    res.innerHTML += `<p>Com o aumento de ${porcent}%, o salário vai aumentar R$ ${aumento} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${salario + aumento}.</p>`
}