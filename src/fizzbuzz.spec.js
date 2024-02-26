import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia generar el mismo numero oara uno que no tiene reglas como el nro 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
});
