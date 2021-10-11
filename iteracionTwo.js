/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];  //este es el array con sus elementos

function findLongestWord(param) {
  let longestWord = param[0];
  for (let i = 0; i < longestWord.length; i++) {
      if (param[i] && (param[i].length > longestWord.length)) {
          longestWord = param[i];
          console.log('ENTRO', longestWord);
      }
  }
  console.log('RETORNO', longestWord)
  return longestWord;
}

findLongestWord(avengers);

