//COERÇÃO ( CONVERSÃO DE TIPOS ) 

// - 1. Coerção Explícita (Manual)
const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('32333'))
console.log(parseFloat('783487.9898'))
console.log(parseInt('8728934'))
console.log(Boolean(2))

console.clear()

// - 2. Coerção Implícita (Automática)

console.log('10' + 1) // o js concatena e junta os dois quando a operação é soma
console.log('10' - 1) // o js converte a string para texto e realiza a operação
console.log('10' * 1) // o js converte a string para texto e realiza a operação
console.log('10' / 1) // o js converte a string para texto e realiza a operação
console.log(10 / 'asdasd') // o js tenta converter o texto para numero. Porém a operação de um texto com um número, não é um número (NaN)

// Outros Exemplos
// Qual será a saída do código?

let n = 1 + "1" // '11'

n = n - 1

console.log(n) // 10

console.log(2 + 3 + 4 + "5") // 95

console.log('5' + 2 + 3 + 4) // 5234

console.log('10' - '4' - '3' - 2 + "5") // '15'