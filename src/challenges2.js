// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    // teste 11 numeros
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < numbers.length; i += 1) {
    // teste repeticao mais que 3 vezes, ou maior que 9 ou negativo
    let repete = 0;
    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        repete += 1;
      }
      if (repete >= 3 || numbers[j] > 9 || numbers[j] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let resultado = [];
  for (let i = 0; i < numbers.length; i += 1) {
    switch (i) {
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
  return resultado.join('');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let A = lineA;
  let B = lineB;
  let C = lineC;
  if ((A > B + C) || (B > A + C) || (C > B + A)) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let reg = /\d+/g;
  let copos = bebidas.match(reg);
  let somaCopos = 0;
  for (let i = 0; i < copos.length; i += 1) {
    somaCopos += parseInt(copos[i], 10);
  }
  if (copos.length === 1) {
    let resposta = `${somaCopos} copo de água`;
    return resposta;
  }
  let resposta = `${somaCopos} copos de água`;
  return resposta;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
