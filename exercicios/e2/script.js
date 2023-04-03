function contar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert('Pane no Sistema alguém me desconfigurou!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }



}