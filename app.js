let amigos=[];

 function agregarAmigo() {
      const input = document.getElementById('nombre');
      const nombre = input.value.trim();

       // Validación
      if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
 }

        // Agregar al array
      amigos.push(nombre);

      // Actualizar la lista
      const lista = document.getElementById('listaAmigos');
      const nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = nombre;
      lista.appendChild(nuevoElemento);

      // Limpiar el campo de entrada
      input.value = '';
}
