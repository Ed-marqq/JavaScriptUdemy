
/*

&& -> false && true = false -> Se tiver qualquer valor falso vai retornar o valor falso (literal)
|| -> true || false = true -> Se tiver qualquer valor verdadeiro vai retornar o valor verdadeiro (literal) -> Se todos os valores forem falsos, vai retornar o último valor literal falso.
****************************************************************************************************

false
0
'' "" ``
null / undefined
NaN
 -> Todos esses retornam false. Todos os outros valores retornam true



*/


console.log(false || 0 || `` || "Eduardo" || true) // Retornou o primeiro valor verdadeiro que encontrou (Eduardo ), mesmo tendo o valor true