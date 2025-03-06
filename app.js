// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.

// Variables globales
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que se haya ingresado un nombre
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (listaDeAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre a la lista de amigos
    listaDeAmigos.push(nombreAmigo);
    
    // Actualizar la lista visual
    actualizarListaVisual();
    
    // Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaVisual() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    // Crear un elemento de lista para cada amigo
    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'friend-item';
        
        const spanNombre = document.createElement('span');
        spanNombre.textContent = amigo;
        spanNombre.className = 'friend-name';
        
        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'delete-button';
        botonEliminar.textContent = 'X';
        botonEliminar.setAttribute('aria-label', `Eliminar a ${amigo}`);
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(spanNombre);
        li.appendChild(botonEliminar);
        listaAmigosElement.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    // Eliminar el amigo del array
    listaDeAmigos.splice(index, 1);
    
    // Actualizar la lista visual
    actualizarListaVisual();
    
    // Limpiar el resultado si existe
    document.getElementById('resultado').innerHTML = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    // Verificar que hay suficientes personas (al menos 2)
    if (listaDeAmigos.length < 2) {
        alert('Se necesitan al menos 2 personas para realizar el sorteo');
        return;
    }
    
    // Seleccionar un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const li = document.createElement('li');
    li.className = 'result-item';
    li.innerHTML = `<span class="amigo-secreto-title">¡El amigo secreto es:</span> <span class="amigo-secreto-name">${amigoSeleccionado}</span>`;
    resultadoElement.appendChild(li);
    
}

// Permitir usar la tecla Enter para agregar un amigo
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});