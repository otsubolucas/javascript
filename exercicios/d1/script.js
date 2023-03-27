
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#F4CEA1'
    }else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#c0652c'
    }else{
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#12252E'
    }
}