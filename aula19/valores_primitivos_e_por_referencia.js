/*
##Primitivos(imutáveis):

        # string, number, boolean, undefined, null (bigint, symbol)

##Referência (mutável):

        # arrays, object, function       


*/


//## Primitivos (imutáveis)
/*let a = 2
let b = a
console.log(a)
console.log(b)
console.log(b)
a= 3
console.log(a, b)*/

//## Por referência (mutáveis)

let a = [1,2,3]
let b = a
console.log(a,b)
a.push(4)
console.log(a,b)
