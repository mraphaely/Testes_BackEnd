/*
1- Crie uma função que calcula a área do quadrado, que recebe um número e retorna o quadrado desse número.
Realize o teste utilizando os matchers toBe(), toBeGreaterThan(), toBeLessThan().
*/
function AreaQuadrado(valor) {
    if (valor < 0) {
        throw new Error("Não pode ser negativo");
    }
    return valor ** 2;
}

test("Retorna o quadrado do número", () => {
    expect(AreaQuadrado(4)).toBe(16);
});

test("Retorna um valor maior que o número", () => {
    expect(AreaQuadrado(4)).toBeGreaterThan(4);
});

test("Retorna um valor menor que o dobro do número ao quadrado", () => {
    expect(AreaQuadrado(4)).toBeLessThan(4 ** 3);
});

test("Erro se o lado for negativo", () => {
    expect(() => AreaQuadrado(-4)).toThrowError(
        "O número não pode ser negativo"
    );
});
/*
2- Crie uma função chamada 'media' que recebe três valores e retorna a média desses valores.
Crie um teste usando o método toBeCloseTo() para validar essa função.
*/
function media(a, b, c) {
    return (a + b + c) / 3;
}
test("Retorna a média", () => {
    expect(media(6, 7, 8)).toBeCloseTo(7);
})