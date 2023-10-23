

function contar(){
    var lista = ['Camisa:19.90', 'Bermuda:22.90', 'Calça:24.90'];
    var total = 0
    var listaTxt = document.getElementById('lista')
    var totalPreco = document.getElementById('totalTxt')
    listaTxt.innerHTML = ''
    
    var itemTexto = ''

    for(var i = 0; i<lista.length; i++){
        var array = lista[i].split(':')
        var nome = array[0]
        var preco = Number(array[1])
        total+= preco
        itemTexto = nome + '-$' + preco
        
      
        var listItem = document.createElement('li')
        
        listItem.textContent = itemTexto
        listaTxt.appendChild(listItem)
        
       

        
    }
    totalPreco.innerHTML = `Total ${total.toFixed(1)}`
     

}



/*function contar(){

    var lista = ['a:9.90', 'b:10.90', 'c:11.90', 'd:4.90', 'e:1.80']; 
    var total = 0
    var totalTela = document.getElementById('Total')
    var textoTela = document.getElementById('lista')

    for(var i = 0; i < lista.length; i++){
        var array = lista[i].split(':')
        var nome = array[0]
        var preco = Number(array[1])
        total += preco
        itemTexto = nome + '—$' + preco
}

totalTela.innerHTML=`Total: ${total}`
textoTela.innerHTML = itemTexto




}*/