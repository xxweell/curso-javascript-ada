// OBJETOS

// Como criar ujm objeto no Javascript

let pessoa = {
    nome: 'Wellington',
    idade: 30,
}

console.log(pessoa.nome)
console.log(pessoa['nome']) // forma alternativa de acessar a chave do objeto. Deve ser utilizada quando o nome da chave for composto
console.log(pessoa.idade)

// Como adicionar um par chave-valor?

pessoa.altura = 1.70
console.log(pessoa)

// Como remover um par chave-valor?

delete pessoa.altura

console.log(pessoa)

console.clear()

// Como percorrer

for(let chave in pessoa) {
    console.log(chave)
}