/* Procura itens em um array */
const lista = ["banana", "melão", "melancia", "maçã"];

test("Identifica 'maçã' no array", () => {
    expect(lista).toContain('maçã')
    expect(lista).not.toContain('jabuticaba')
    expect(lista).toHaveLength(4)
});


/* Testa o retorno correto de uma exceção */
function returnError() {
    throw new Error
}

test("Retorna um erro", () => {
    expect(() => returnError()).toThrowError()
});

/* Testando funções assícronas */
const fetchData = async () => "ford Ka";
    test("Testa a função assíncrona (espera que o dado seja 'ford Ka')", async () => {
        const carro = await fetchData()
        expect(carro).toBe('ford Ka')
        // expect(await fetchData()).toBe("ford Ka");
});