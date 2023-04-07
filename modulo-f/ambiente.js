var num = [5,6,8,2,3,4]
num[6] = 1
num.push(7)
num.sort()
console.log(`O vetor é ${num}`)
console.log(`Tem ${num.length} números no seu vetor!`)
pos = num.indexOf(10)
if(pos == -1){
    console.log('[O valor não foi encontrado]')
}else{
console.log(`O número 5 está na posição ${pos}`)
}