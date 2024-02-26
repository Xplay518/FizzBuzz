function generarFizzBuzz(numero) {
  let resultado = "";

  for (let i = 1; i <= numero; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          resultado += "FizzBuzz";
      } else if (i % 3 === 0) {
          resultado += "Fizz";
      } else if (i % 5 === 0) {
          resultado += "Buzz";
      } else {
          resultado += i.toString();
      }

      if (i !== numero) {
          resultado += ", ";
      }
  }

  return resultado;
}

export default generarFizzBuzz;
