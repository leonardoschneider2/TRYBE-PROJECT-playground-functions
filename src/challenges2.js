//Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    // teste 11 numeros
    return "Array com tamanho incorreto.";
  } 
  
  
  else {
    for (let i = 0; i < numbers.length; i++) {
      // teste repeticao mais que 3 vezes, ou maior que 9 ou negativo
      let repete = 0 // zera repeticao para comparar um por um 
        for (let j = 0; j < numbers.length; j++) {
          if (numbers[i] == numbers[j]) {
            repete ++;
          }
          if (repete >= 3 || numbers[j] > 9 || numbers[j] < 0) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
    }
    // Já comparamos, agora continuamos a montar o número

    let resultado = [];
    /*
    resultado.push('(');
    resultado.push(numbers[0]);
    resultado.push(numbers[1]);
    resultado.push(') ');
    resultado.push(numbers[2]);
    resultado.push(numbers[3]);
    resultado.push(numbers[4]);
    resultado.push(numbers[5]);
    resultado.push(numbers[6]);
    resultado.push('-');
    resultado.push(numbers[7]);
    resultado.push(numbers[8]);
    resultado.push(numbers[9]);
    resultado.push(numbers[10]);
    */
    for (let i = 0; i < numbers.length; i++){
      switch (i){
        case 0:
          resultado.push('(');
        break;
        case 2:
          resultado.push(') ');
        break;
        case 7:
          resultado.push('-');
        break;
        default:
        break;
      }
      resultado.push(numbers[i]);

    }

    return resultado.join("");
  }

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineB + lineA)){
    
    return false;

  } else if ((lineA < Math.abs(lineC - lineB)) || (lineB < Math.abs(lineA - lineC)) || (lineC < Math.abs(lineB - lineA))){
    
    return false;

  } else {

    return true;

  }

}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let reg = /\d+/g;
  let copos = bebidas.match(reg);
  let somaCopos = 0;
  for (let i = 0; i < copos.length; i++){
    somaCopos += parseInt(copos[i]);
  }
  if (copos.length === 1) {
    return (somaCopos +' copo de água');
  } else {
    return (somaCopos + ' copos de água');
  }
  
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
