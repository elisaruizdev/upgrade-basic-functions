//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función://

const numbersAverage = [12, 21, 38, 5, 45, 37, 6];

function sumAll(param) {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
      count = count + param[i];
  }
  return count
}
console.log(sumAll(numbersAverage));