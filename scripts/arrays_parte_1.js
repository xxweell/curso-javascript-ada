// ARRAYS

// Como criar um array?

let arr = ['Wellington', 30, 1.70, true]
console.log(arr)
// - Como acessar os elementos do array

console.log('|Primeiro elemento: ', arr[0])
console.log('|Segundo elemento: ', arr[1])
console.log('|Terceiro elemento: ', arr[2])
console.log('|Quartoo elemento: ', arr[3])

// Como obter o tamanho do array

console.log(arr.length)
console.clear()
// Percorrendo arrays

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()
// O for of pega, em cada iteração, um elemento que tem dentro da estrutura de dados ( neste caso do array... mas poderia ser um objeto tbm)
for (let elemento of arr) {
    console.log(elemento)
}

console.clear()

// O for in pega, em cada iteração, o índice que tem dentro da estrutura de dados ( neste caso do array... mas poderia ser um objeto tbm)
for (let indice in arr) {
    console.log(indice, arr[indice])
}