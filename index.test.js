const { filtrarAutor, libros } = require('./js/index');

test('debe filtrar correctamente usando los datos reales de la lista', () => {
    // Probamos con un autor que sabemos que está en tu array (Julio Verne)
    const resultado = filtrarAutor(libros, "Julio Verne");
    
    expect(resultado.length).toBe(2);
    // Verificamos que el primer título sea el correcto
    expect(resultado[0].titulo).toBe("Viaje al centro de la tierra");
});

test('debe devolver un array vacío si el autor no existe en la lista', () => {
    const resultado = filtrarAutor(libros, "Stephen King");
    expect(resultado.length).toBe(0);
});