function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    hora = 20 
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#7e8ea7'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#FEB61C'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#041c34'
    }
}