var meuNome = "vinicius";
var meuArray = meuNome.split('')
var letrasRepetidas = []

meuArray.forEach(letra => {
    for (var i = 0; i < meuNome.length; i++) {
        if(i >= 0 && letra == meuArray[i] && i != meuArray.indexOf(meuArray[i])) {
            if(letra == " ") {
                break
            }
            letrasRepetidas.push(letra)
            break
        }
    }
})

console.log([... new Set(letrasRepetidas)]) // as letras repetidas
console.log(letrasRepetidas) // quantas vezes repetiu
