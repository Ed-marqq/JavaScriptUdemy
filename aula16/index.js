const perguntaNumero = Number(prompt('Digite um número'))
let mostradorNumero = document.getElementById('mostradorNumero')
let texto = document.getElementById('texto')

mostradorNumero.innerHTML = `<p>Seu número é: ${perguntaNumero}</p>`

texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(perguntaNumero)}</p>`
texto.innerHTML += `<p>${perguntaNumero} é inteiro: ${Number.isInteger()}</p>`
texto.innerHTML += `<p>É NaN:${isNaN(perguntaNumero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(perguntaNumero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(perguntaNumero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${perguntaNumero.toFixed(2)}</p>`
//texto.innerHTML += `<p>${}</p>`



