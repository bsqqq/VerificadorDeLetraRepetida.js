var meuNome = "vinicius";
var meuArray = meuNome.split('')
var letrasRepetidas = []

meuArray.forEach(letra => {
    for (var i = 0; i < meuNome.length; i++) {
        if(i >= 0 && letra == meuArray[i] && i != meuArray.indexOf(meuArray[i])) {
            if(letra == " ") {
                break
            }
            console.log(`'${letra}' tem letra repetida`)
            letrasRepetidas.push(letra)
            break
        }
    }
})

console.log(letrasRepetidas)
