//##########################################################################
//Acessando iten dentro de array

//var compras = ["leite", "carne", "ovos", "frutas"]
//console.log(compras[3])

//##########################################################################
//Acessando array dentro de outra array

//var compras = [["queijo", "manteiga"],["banana","laranja"]]
//console.log(compras[0])

//##########################################################################

var lista = ['a:9.90', 'b:10.90', 'c:11.90', 'd:4.90', 'e:1.80']; 
var total = 0
var totalTela = document.getElementById('Total')

for(var i = 0; i < lista.length; i++){
    var array = lista[i].split(':')
    var nome = array[0]
    var preco = Number(array[1])
    total += preco
}

totalTela.innerHTML='total'

