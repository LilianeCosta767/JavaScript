function converter () {
    let res = document.getElementById('res')
    let c = parseFloat(prompt('Digite uma temperatura em °C (Celsius)'))
    let f = c * 1.8 + 32
    let k = c + 273

    res.innerHTML = ''
    res.innerHTML += `<p>${k}°K (Kelvin)</p>`
    res.innerHTML += `<p>${f}°F (Fahrenheit)</p>`
}