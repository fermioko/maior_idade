/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test("Maior de Idade 18", () =>{
    var resultado = validarIdade("18");

    expect(resultado).toBe(true);
})

test("Menor de Idade 18", () =>{
    var resultado = validarIdade("10");

    expect(resultado).toBe(false);
})
