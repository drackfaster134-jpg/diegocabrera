// Selección de elementos
const form = document.getElementById('form-equipo');
const tabla = document.getElementById('tabla-equipos').getElementsByTagName('tbody')[0];

// Recuperar inventario guardado
let inventario = JSON.parse(localStorage.getItem('inventario')) || [];

// Función para mostrar equipos en la tabla
function mostrarInventario() {
    tabla.innerHTML = '';
    inventario.forEach((equipo, index) => {
        const fila = tabla.insertRow();
        fila.insertCell(0).textContent = equipo.nombre;
        fila.insertCell(1).textContent = equipo.modelo;
        fila.insertCell(2).textContent = equipo.estado;

        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Borrar';
        btnBorrar.classList.add('borrar');
        btnBorrar.onclick = () => borrarEquipo(index);
        fila.insertCell(3).appendChild(btnBorrar);
    });
}

// Función para agregar equipo
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nuevoEquipo = {
        nombre: document.getElementById('nombre').value,
        modelo: document.getElementById('modelo').value,
        estado: document.getElementById('estado').value
    };
    inventario.push(nuevoEquipo);
    localStorage.setItem('inventario', JSON.stringify(inventario));
    form.reset();
    mostrarInventario();
});

// Función para borrar equipo
function borrarEquipo(index) {
    inventario.splice(index, 1);
    localStorage.setItem('inventario', JSON.stringify(inventario));
    mostrarInventario();
}

// Mostrar inventario al cargar la página
mostrarInventario();
