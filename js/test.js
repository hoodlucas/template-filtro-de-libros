/**
 * @jest-environment jsdom
 */

// Simulación para la prueba del evento change
const libros = [
    { titulo: "Viaje al centro de la tierra", autor: "Julio Verne" },
    { titulo: "Moby Dick", autor: "Herman Melville" }
];

function filtrarAutor(arreglo, autor) {
    return arreglo.filter(libro => libro.autor === autor);
}

function MostrarFiltrados() {
    const select = document.getElementById('autor');
    const contenedor = document.getElementById('libros');
    const autorSeleccionado = select.value;

    const filtrados = filtrarAutor(libros, autorSeleccionado);
    contenedor.innerHTML = "";

    filtrados.forEach(libro => {
        const p = document.createElement('p');
        p.textContent = `${libro.titulo} - ${libro.autor}`;
        contenedor.appendChild(p);
    });
}

// Test del evento change para verificar que se muestren los libros filtrados correctamente
test('Debe filtrar y mostrar libros cuando cambia el select', () => {
    // 1. Creación del HTML en el simulador
    document.body.innerHTML = `
        <select id="autor">
            <option value="Julio Verne">Julio Verne</option>
            <option value="Herman Melville">Herman Melville</option>
        </select>
        <div id="libros"></div>
    `;

    const select = document.getElementById('autor');
    const contenedor = document.getElementById('libros');

    // 2. Se vincula la función al evento onchange
    select.onchange = MostrarFiltrados;

    // 3. Se simula que el usuario elige un autor
    select.value = 'Julio Verne';
    
    // Se dispara el evento manualmente
    select.dispatchEvent(new Event('change'));

    // 4. Verificación que el div tenga el libro
    expect(contenedor.innerHTML).toContain('Julio Verne');
    expect(contenedor.innerHTML).toContain('Viaje al centro de la tierra');
});