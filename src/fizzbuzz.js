function generarFizzBuzz(numero) {
    let resultado = "";

    if (numero % 3 === 0) {
        resultado += "Fizz";
    }

    if (numero % 5 === 0) {
        resultado += "Buzz";
    }

    return resultado || numero.toString();
}

export default generarFizzBuzz;
