// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Capturar el nombre ingresado y agregarlo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios al inicio y al final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya ha sido agregado. Ingresa uno diferente.");
        return;
    }

    // Agregar el nombre al arreglo de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Actualizar la lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";

    // Recorrer el arreglo y agregar cada amigo a la lista
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Agregar botón para eliminar un nombre
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista(); // Volver a actualizar la lista
}

// Sorteo del amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "<p style='color:red;'>Debe agregar al menos un nombre.</p>";
        return;
    }

    // Generar un índice aleatorio
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Mostrar el resultado
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
