function verificaSequencia(num) {
    const strNum = num.toString();
    let crescente = true;
    let decrescente = true;

    for (let i = 1; i < strNum.length; i++) {
        if (+strNum[i] !== +strNum[i - 1] + 1 && +strNum[i] !== +strNum[i - 1]) {
            crescente = false;
            break;
        }
    }

    if (crescente) {
       return "Está ordenado";
    }

    for (let i = 1; i < strNum.length; i++) {
        if (+strNum[i] !== +strNum[i - 1] - 1 && +strNum[i] !== +strNum[i - 1]) {
            decrescente = false;
            break;
        }
    }

   if (decrescente) {
        return "Está ordenado";
    }

    return "Não está ordenado";
}

console.log(verificaSequencia(12345678));   
console.log(verificaSequencia(1223455678)); 
console.log(verificaSequencia(876543210));  
console.log(verificaSequencia(152456457));  
console.log(verificaSequencia(12356789));  
console.log(verificaSequencia(13579));     
console.log(verificaSequencia(9765421));    
console.log(verificaSequencia(123454321));  
console.log(verificaSequencia(12222222));   
console.log(verificaSequencia(2111111));    
console.log(verificaSequencia(1599));  