import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Debería imprimir 'Fizz' para números divisibles por 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
    expect(generarFizzBuzz(6)).toEqual("Fizz");
    expect(generarFizzBuzz(9)).toEqual("Fizz");
  });

  it("Debería imprimir el número como una cadena para otros números", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
    expect(generarFizzBuzz(2)).toEqual("2");
    expect(generarFizzBuzz(4)).toEqual("4");
  });
});
