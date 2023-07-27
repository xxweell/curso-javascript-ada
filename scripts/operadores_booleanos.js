//BOOLEANOS

const numero = 10

console.log(numero == 20)
console.log(numero != 20)
console.log(numero > 20)
console.log(numero >= 20)
console.log(numero < 20)
console.log(numero <= 20)

console.clear()
// Utilizando ===
console.log(numero == '10') //true
console.log(numero === '10') //false

console.log(numero != "10") // false
console.log(numero !== '10') //true

// Conjunções Lógicas

// AND => &&

let idade = 30
let tenhoCNH = true
const possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso Dirigir? ', possoDirigir)

// OR => ||

idade = 40
const votoFacultativo = idade < 18 || idade >= 70
console.log("Posso votar?", votoFacultativo)

// NOT => !

const estouGostantoDoCurso = false
console.log('Estou gostando do curso?', !estouGostantoDoCurso)