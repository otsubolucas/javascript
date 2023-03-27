function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#iano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique se digitou corretamente a sua data de nascimento!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Masculino'
            if (idade >=0 && idade <=12){
                img.setAttribute('src', 'image/foto-bebe-m.png')
            }else if (idade < 21){
                img.setAttribute('src', 'image/foto-jovem-m.png')
            }else if (idade < 50){
                img.setAttribute('src', 'image/foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'image/foto-idoso-m.png')
            }
        }else if(fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade <=12){
                img.setAttribute('src', 'image/foto-bebe-f.png')
            }else if (idade < 21){
                img.setAttribute('src', 'image/foto-jovem-f.png')
            }else if (idade < 50){
                img.setAttribute('src', 'image/foto-adulto-f.png')
            }else{
                img.setAttribute('src', 'image/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}