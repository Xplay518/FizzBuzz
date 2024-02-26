import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Debería imprimir la secuencia de números hasta el número ingresado por el usuario, aplicando las reglas de FizzBuzz", () => {
    expect(generarFizzBuzz(10)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
    expect(generarFizzBuzz(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
  });
});
