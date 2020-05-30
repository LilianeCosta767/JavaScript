function dados() {
    let res = document.getElementById('res')

    let nome = prompt('Qual é o nome do aluno?')
    let p_nota = parseFloat(prompt(`Primeira nota de ${nome}`))
    let s_nota = parseFloat(prompt(`Segunda nota de ${nome}`))

    media = (p_nota + s_nota) / 2

    res.innerHTML = ''
    res.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${p_nota} e ${s_nota} a <b>média é ${media}</b></p>`
    if(media < 3) {
        res.innerHTML += `<p>Com a média abaixo de 3.0, o aluno está <b id = "reprovado">REPROVADO</b></p>`
    }
    if (media >= 3 && media < 6) {
        res.innerHTML += `<p>Com a média entre 3.0 e 6.0, o aluno está em <b id = "recuperacao">RECUPERAÇÃO</b></p>`
    }
    if (media >= 6 ){
        res.innerHTML += `<p>Com a média acima de 6.0, o aluno está <b id = "aprovado">APROVADO</b></p>`
    }
}