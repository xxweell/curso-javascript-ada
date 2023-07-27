// FUNÇÕES

// Definição da função
function saudacao() {
    console.log("Olá! Seja bem-vindo ao curso de JavaScript!")
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções?

function saudacao(nome, curso) {
    console.log(`Olá ${nome}! Seja bem-vindo ao curso de ${curso}!`)
}

saudacao('Wellington', 'JavaScript')

console.clear()

function soma(numero1, numero2) {
    return numero1 + numero2
}

let resultado = soma(10, 20)

console.log('Soma = ', resultado)

console.clear()

function maiorDoQue50(numero) {
    if(numero > 50) {
        return true
    }

    return false
}

let number = maiorDoQue50(78)
console.log(number)