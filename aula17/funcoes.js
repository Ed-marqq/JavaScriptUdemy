/*function saudacao (nome){
    //console.log(`Bom dia ${nome}`)
    return `Bom dia ${nome}`
}

const variavel = saudacao ('Luiz')
console.log (variavel)*/

function soma (x,y){
    const resultado = x+y
    return resultado //nada abaixo de return será executado
}
//console.log(soma(2,6))

console.log (soma(2,2))
//########################################


function soma (x=1,y=2){
    const resultado = x+y
    return resultado //nada abaixo de return será executado
}

console.log (soma()) // se não tiver valor no parâmetro, vai retornar a soma dos valores declarados em x e y

