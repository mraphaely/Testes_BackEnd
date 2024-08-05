function soma( a, b ){
    return a + b;
}

test("Soma 1 + 4 e retorna 5", () => {
    expect(soma(1, 4)).toBe(5);
    expect(soma(2, 3)).toBe(5);
    expect(soma(2.5, 2.5)).toEqual(5);
});

test("Verifica se 18 é maior que", () => {
    const numero = 18
    expect(20).toBeGreaterThan(numero);
    expect(18).toBeGreaterThanOrEqual(numero);
});

// Matchers para string

test('Procura da letra I', () => {
    const nome = 'Iguinho'
    expect(nome).toContain(/I/);
    expect(nome).toContain(/Y/);
})