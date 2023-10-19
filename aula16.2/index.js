//               0       1          2
const alunos = ['Luiz', 'Leandro', 'Maria']

//console.log (alunos) imprime ['Luiz', 'Leandro', 'Maria']

//console.log (alunos [0]) imprime Luiz

//Para mudar um valor dentro do array:
//
//alunos[0] = 'Eduardo'
//console.log(alunos) 
//imprime [ 'Eduardo', 'Leandro', 'Maria' ]

//Para adicionar elemento:
//
//alunos[3] = 'João'
//console.log (alunos) 
//imprime [ 'Luiz', 'Leandro', 'Maria', 'João' ]

//Para adicionar elemento sem precisar saber quantidade de elementos do array:
//
//alunos.push('Otávio')
//console.log(alunos)
//imprime [ 'Luiz', 'Leandro', 'Maria', 'Otávio' ]

//Para adicionar elemento na frente dos outros, mudando todos os elementos subsequentes de posicão "Jogando pra frente:"
//
//alunos.unshift('Ronaldo')
//console.log (alunos)
//imprime [ 'Ronaldo', 'Luiz', 'Leandro', 'Maria' ]

//Para apagar elementos:
//Vai remover o último elemento da lista
//Se trocar pop por shift vai remover elemento do início
// É possível salvar o elemento exluido em uma variável
// por exemplo: const removido = alunos.pop()
//
//alunos.pop()
//console.log(alunos)
