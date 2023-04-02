function contar(){
    var txtin = document.getElementById('inicio')
    var txtf = document.getElementById('fim')
    var txtp = document.getElementById('passo')
    var res = document.querySelector('#res')

    if(txtin.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        window.alert('[ERRO] Faltam dados!!')
    }else{

        res.innerHTML = 'Contando: '
        var ini = Number(txtin.value)
        var fim = Number(txtf.value)
        var pas = Number(txtp.value)
        for(var c = ini ; c <= fim ; c += pas){
            res.innerHTML = `${c}`
    }
}
}