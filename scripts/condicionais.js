// ESTRUTURAS CONDICIONAIS

const idade = 20

if(idade>=18) {
    console.log('Você é maior de idade!')
} else {
    console.log('Você é menor de idade!')
}

console.clear()

// Se média >= 7 -> aprovado
// Se média < 7 e media >=5 -> Recuperação
// Se média < 5  -> Reprovado

let media = 4

if(media>=7) {
    console.log('Aprovado!')
} else if (media >= 5) {
    console.log('Recuperação!')
} else {
    console.log('Reprovado!')
}