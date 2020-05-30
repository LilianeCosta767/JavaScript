function verificar () {
    let res = document.getElementById('res')

    let ano = parseInt(prompt('Qual é o ano que você quer verificar?'))
    bissexto = ano_bissexto(ano)

    res.innerHTML = ''
    res.innerHTML += `<h2>Analisando o ano de ${ano}...</h2>`
    if(!ano_bissexto(ano)){
        res.innerHTML += `O ano de ${ano} <b id = "f_bissexto" > NÃO É BISSEXTO </b> &#10005;`
    } else {
        res.innerHTML += `O ano de ${ano} <b id = "t_bissexto" > É BISSEXTO </b> &#10003;`
    }
}

function ano_bissexto(ano) {
    if(ano % 4 == 0) {
        if(ano % 100 != 0) {
            return true
        }
    } else if (ano % 400 == 0) {
        return true
    } else {
        return false
    }
}