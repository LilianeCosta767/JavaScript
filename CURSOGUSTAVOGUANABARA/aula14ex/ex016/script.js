function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    // console.log(`inicio = ${inicio}`)
    // console.log(`inicio = ${fim.value}`)

    if(inicio.value == null || inicio.value == "" || fim.value == null || fim.value == "") {
        res.innerHTML = 'Impossível contar'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0) {
            res.innerHTML = 'Impossivel contar'
            //window.alert('Passo inválido!! Considerando PASSO 1')
        }
        if(i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}