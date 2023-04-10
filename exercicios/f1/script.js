function adicionar(){
    var num = document.getElementById('txtn')
    var n = Number(num.value)
    var tab = document.getElementById('lista')
    if(n <= 0 || n > 100){
        window.alert('Número inválido, Verifique se colocou os número certos!')
    }else{
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado!`
        tab.appendChild(item)
    }
}
function finalizar(){
    
}