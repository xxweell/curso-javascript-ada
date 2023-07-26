// ARRRAYS - PARTE 2 - MÉTODOS DE ARRAYS

const arr = [30, 12, 45, 34, 29]
const arr2 = []

// Fatiamento: slice
console.log(arr.slice(0, 2)) // o segundo parametro é exclusivo. tenho que passar o número após o que eu quero pegar no array
console.log(arr.slice(2)) // se eu passar somente um parametro ele pega do indice que passei até o final do array

console.clear()

// Adicionando elementos: push | unshift

console.log('Antes de adicionar: ', arr2)
arr2.push(10, 20, 30)
arr2.push(40) // adiciona no final do array
console.log('Depois de adicionar: ', arr2)

console.log('Antes de adicionar com unshift: ', arr2)
arr2.unshift(0) // adiciona no inicio do array
console.log('Antes de adicionar com unshift: ', arr2)

console.clear()

// Removendo elementos: pop | shift

console.log('Antes de remover com pop: ', arr2)
arr2.pop() // exclui o ultimo elemento do array. retorna o elemento removido que pode ser guardado em uma variavel
console.log('Depois de remover com pop: ', arr2)

console.log('Antes de remover com shift: ', arr2)
arr2.shift() // exclui o primeiro elemento do array
console.log('Depois de remover com shift: ', arr2)

console.clear()

// Concatenando arrays: concat

console.log(arr)
console.log(arr2)

console.log(arr.concat(arr2))
console.log(arr2.concat(arr))

console.clear()

// Buscando elementos: indexOf | lastIndexOf

console.log(arr)

let indiceDoElemento34 = arr.indexOf(34) // pega o indice do elemento passado por parâmetro. Se tiver dois elementos 34 no array ele retorna o índice do primeiro
let indiceDoElemento35 = arr.indexOf(35) // não existe esse elemento no array

console.log(indiceDoElemento34)
console.log(indiceDoElemento35) // retorna -1

let arr3 = [1, 3, 3, 5, 3]

let indiceDoUltimoElemento3 = arr3.lastIndexOf(3) // pega o índice do ultimo elemento passado por parâmetro

console.log(indiceDoUltimoElemento3)

console.clear()

// Descobrindo a existência de um elemento: includes

console.log(arr)
console.log(arr.includes(10)) // procura se existe o elemento do parâmetro dentro do array

console.clear()

// Invertendo arrays: reverse

console.log('Array1 normal: ', arr)
let arrInvertido = arr.reverse()
console.log('Array1 invertido: ', arrInvertido)






