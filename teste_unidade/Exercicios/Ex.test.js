/* 1- Crie uma função que calcula a área do quadrado, que recebe um número e retorna o quadrado desse número.
Realize o teste utilizando os matchers toBe(), toBeGreaterThan(), toBeLessThan(). */
function AreaQuadrado(valor) {
    return valor * valor
}
test("Verifica a aréa do quadrado", () => {
    expect(AreaQuadrado(4)).toBe(16);
    expect(AreaQuadrado(4)).toBeGreaterThan(15);
    expect(AreaQuadrado(4)).toBeLessThan(17);
});

/* 2- Crie uma função chamada 'media' que recebe três valores e retorna a média desses valores.
Crie um teste usando o método toBeCloseTo() para validar essa função. */
function media(a, b, c) {
    return (a + b + c) / 3;
}
test("Verifica a média", () => {
    expect(media(6, 7, 8)).toBeCloseTo(7);
});

/* 3- Crie uma função chamada Saudacao que recebe um nome como argumento e retorna a saudação "Olá, {nome}". 
Faça um teste utilizando os métodos toMatch() e toHaveLength(). */
function Saudacao(nome) {
    return `Olá, ${nome}`
}
test("Verifica a saudação, 'Olá, Mary'", () => {
    expect(Saudacao("Mary")).toMatch("Olá, Mary");
    expect(Saudacao("Mary")).toHaveLength(9);
});

/* 4- Crie uma função chamada validaEmail que verifica se um email é válido.
Faça um teste utilizando ousando toEqual(). */
function validaEmail(email) {
    // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z09.-]+\.[a-zA-Z]{2,}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
test("Verifica se o email é válido", () => {
    expect(validaEmail("rapha@ely.com")).toEqual(true);
    expect(validaEmail("Maryana.com")).toEqual(false);
    expect(validaEmail("Raphaely")).not.toEqual(true);
});

/* 5- Escreva uma função chamada contemValor que recebe dois parâmetros (array e valor) e verifica se um determinado valor está presenrte em um array.
Faça um teste usando .toHaveLength() e .toEqual(). */
function contemValor(array, valor) {
    return array.includes(valor);
}
test("Verifica se o valor está presente no array", () => {
    const array = [1,2,3]
    expect(array).toHaveLength(3);
    expect(contemValor(array, 2)).toEqual(true);
});

/* 6- Escreva uma função chamada "filtraPares" que recebe um array de números e retorna apenas os numeros pares (filter).
Crie testes usando toContainEqual e toEqual para garantir que os valores resultantes são pares. */
function filtraPares(array) {
    return array.filter((item) => item % 2 === 0);
}
test("Verifica se o array contém apenas números pares", () => {
   const  array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(filtraPares(array)).toContainEqual(2,4,6,8);
    expect(filtraPares(array)).toEqual([2, 4, 6, 8])
});

