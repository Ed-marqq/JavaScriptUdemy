 const hora = 55

 if (hora>=5 && hora<12){
    console.log('Bom Dia!')
 } else if (hora >= 12 && hora <18){
    console.log('Boa tarde!')
 }else if (hora >= 18 && hora < 1){
    console.log('Boa noite!')
    
 }else if (hora >= 1 && hora < 5){
    console.log('Boa madrugada!')

 }else{
    console.log("Hora inválida!")
 }

 // A condicional IF, else if e else checam todas as condicionais do bloco e trás o primeiro resultado True, mesmo que haja mais de uma condicional true no bloco