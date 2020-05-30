function converter() {
    let res = document.getElementById('res')

    
    let distancia = parseFloat(prompt('Digite uma distância em metros (m)'))
    res.innerHTML = 'testando'
    let km = distancia / 1000
    let hm = distancia / 100
    let dam = distancia / 10
    let dm = distancia / 0.1
    let cm = distancia / 0.01
    let mm = distancia / 0.001

    res.innerHTML = ''
    res.innerHTML += `<h2>A distância ${distancia} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
}