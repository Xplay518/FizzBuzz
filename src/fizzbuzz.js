function generarFizzBuzz(numero) {
    if (numero % 3 === 0) {
        return "Fizz";
    } else {
        return numero.toString();
    }
}

export default generarFizzBuzz;
