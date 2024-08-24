document.addEventListener('DOMContentLoaded', function() {
	const formulario = document.getElementById('formularioCarta');
	const cartaDiv = document.getElementById('carta');

	formulario.addEventListener('submit', function(event) {
			event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

			// Obtén los valores del formulario
			const titulo = document.getElementById('titulo').value;
			const descripcion = document.getElementById('descripcion').value;
			const imagenArchivo = document.getElementById('imagenArchivo').files[0];

			if (imagenArchivo) {
					// Crear un objeto URL para la imagen
					const reader = new FileReader();
					reader.onload = function(e) {
							// Crear la carta
							cartaDiv.innerHTML = `
									<img src="${e.target.result}" alt="Imagen de la carta">
									<h1>${titulo}</h1>
									<p>${descripcion}</p>
							`;
							cartaDiv.style.display = 'block'; // Muestra la carta
					};
					reader.readAsDataURL(imagenArchivo);
			}
	});
});
