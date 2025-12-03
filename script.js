// === Función para cambiar pestañas ===
function abrirTab(tabName) {
    const tabs = document.getElementsByClassName('tab');
    for (let tab of tabs) tab.style.display = 'none';
    document.getElementById(tabName).style.display = 'block';
}
// Abrir inventario por defecto
abrirTab('inventario');


// === INVENTARIO ===
const formEquipo = document.getElementById('form-equipo');
const tabla = document.getElementById('tabla-equipos').getElementsByTagName('tbody')[0];
let inventario = JSON.parse(localStorage.getItem('inventario')) || [];

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

formEquipo.addEventListener('submit', function(e) {
    e.preventDefault();
    const nuevoEquipo = {
        nombre: document.getElementById('nombre').value,
        modelo: document.getElementById('modelo').value,
        estado: document.getElementById('estado').value
    };
    inventario.push(nuevoEquipo);
    localStorage.setItem('inventario', JSON.stringify(inventario));
    formEquipo.reset();
    mostrarInventario();
});

function borrarEquipo(index) {
    inventario.splice(index, 1);
    localStorage.setItem('inventario', JSON.stringify(inventario));
    mostrarInventario();
}

mostrarInventario();


// === TAREAS ===
const formTarea = document.getElementById('form-tarea');
const listaTareas = document.getElementById('lista-tareas');
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function mostrarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Borrar';
        btnBorrar.onclick = () => borrarTarea(index);
        li.appendChild(btnBorrar);
        listaTareas.appendChild(li);
    });
}

formTarea.addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = document.getElementById('tarea-texto').value;
    tareas.push(texto);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    formTarea.reset();
    mostrarTareas();
});

function borrarTarea(index) {
    tareas.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    mostrarTareas();
}

mostrarTareas();


// === NOTAS ===
const formNota = document.getElementById('form-nota');
const listaNotas = document.getElementById('lista-notas');
let notas = JSON.parse(localStorage.getItem('notas')) || [];

function mostrarNotas() {
    listaNotas.innerHTML = '';
    notas.forEach((nota, index) => {
        const li = document.createElement('li');
        li.textContent = nota;
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Borrar';
        btnBorrar.onclick = () => borrarNota(index);
        li.appendChild(btnBorrar);
        listaNotas.appendChild(li);
    });
}

formNota.addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = document.getElementById('nota-texto').value;
    notas.push(texto);
    localStorage.setItem('notas', JSON.stringify(notas));
    formNota.reset();
    mostrarNotas();
});

function borrarNota(index) {
    notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(notas));
    mostrarNotas();
}

mostrarNotas();
