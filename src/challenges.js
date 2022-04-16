// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 == true && bool2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) /2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ")
}

// Desafio 4
function concatName(nameString) {
  // seu código aqui
  return (nameString[(nameString.length) -1]) + ', ' + (nameString[0]) ;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = numbers[0];
  for (let i = 0; i < numbers.length; i+=1) {
    if (maior < numbers[i]) {
      maior = numbers[i];
    }
  }
  let contador = 0;
  for (let i = 0; i < numbers.length; i+=1) {
    if (maior === numbers[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }

}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let resposta = [];
  for (let i = 0; i < numbers.length; i+=1) {
    if (((numbers[i] % 3) == 0) &&  ((numbers[i] % 5) == 0)){
      const a = resposta.push('fizzBuzz');
    } else if (((numbers[i] % 3) == 0)) {
      const a = resposta.push('fizz');
    } else if (((numbers[i] % 5) == 0)) {
      const a = resposta.push('buzz');
    } else {
      const a = resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(palavra) {
  // seu código aqui
  let code = palavra.split("");
  for (let i = 0; i < code.length; i+=1){
    if ( code [i] == 'a' ) { code [i] = '1'; }
    if ( code [i] == 'e' ) { code [i] = '2'; }
    if ( code [i] == 'i' ) { code [i] = '3'; }
    if ( code [i] == 'o' ) { code [i] = '4'; }
    if ( code [i] == 'u' ) { code [i] = '5'; }
  }
  return code.join("");
}

function decode(palavra) {
  // seu código aqui
  let code = palavra.split("");

  for (let i = 0; i < code.length; i += 1){

    if ( code [i] == '1' ) { code [i] = 'a'; }
    if ( code [i] == '2' ) { code [i] = 'e'; }
    if ( code [i] == '3' ) { code [i] = 'i'; }
    if ( code [i] == '4' ) { code [i] = 'o'; }
    if ( code [i] == '5' ) { code [i] = 'u'; }

  }

  return code.join("");

}

// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  const tecName = [];
  tecnologias.sort();
  for (let i = 0; i < tecnologias.length; i+=1){
    tecName [i] = {
      tech: tecnologias[i],
      name: name
    }
   
  }
  console.table(tecName);

  if (tecnologias.length === 0){
    return 'Vazio!';
  } else {
    return tecName;
  }

}



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList, 
};
