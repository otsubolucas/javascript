function contar(){
    var txtin = document.getElementById('inicio')
    var txtf = document.getElementById('fim')
    var txtp = document.getElementById('passo')
    var res = document.getElementById('res')

    if(txtin.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        window.alert('[ERRO] Faltam dados!!')
    }else{

        res.innerHTML = 'Contando: <br>'

        var ini = Number(txtin.value)
        var fim = Number(txtf.value)
        var pas = Number(txtp.value)
        if (pas <= 0){
            window.alert('Passo inválido! Considerando passo 1!')
            pas = 1
        }

        //Contagem crescente
        if(ini < fim){
            for(var c = ini ; c <= fim ; c += pas){
                res.innerHTML += `${c} \u{27A1} `
            }
        }else{
            //Contagem Regressiva
            for(var c = ini; c >= fim; c-=pas){
                res.innerHTML += `${c} \u{27A1} `
            } 
        }

        res.innerHTML += `\u{1F3C1}`
    }
}