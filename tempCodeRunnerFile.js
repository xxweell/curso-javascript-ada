for(let i = 1; i<=3; i++) {
    nota = Number(input.require(`Informe a nota ${i} do aluno: `))

    soma += nota
}

console.log(soma)