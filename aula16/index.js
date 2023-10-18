let perguntaNum = Number(prompt('Digite um número'))

let nummost = document.getElementById('mostrador')

let texto = document.getElementById('texto')
let arredBaixo = Math.floor(perguntaNum)

//let p2 = document.getElementById('p2')
let arredCima = Math.ceil(perguntaNum)

//let p3 = document.getElementById('p3')
let inteiro = Number.isInteger(perguntaNum)

//let p4 = document.getElementById('p4')
let raizQuad = Math.sqrt(perguntaNum)

//let p5 = document.getElementById('p5')
let nam = Number.isNaN(perguntaNum)

//let p6 = document.getElementById('p6')
let caDec = perguntaNum.toFixed(2)

nummost.innerHTML = (`O seu número é ${perguntaNum}`)

texto.innerHTML =




