document.addEventListener('DOMContentLoaded', function() {
	const formulario = document.getElementById('formularioPost');
	const postsContainer = document.getElementById('posts-container');

	// Función para cargar los posts desde localStorage
	function cargarPosts() {
			const posts = JSON.parse(localStorage.getItem('posts')) || [];
			postsContainer.innerHTML = '';

			posts.forEach(post => {
					const postElement = document.createElement('div');
					postElement.classList.add('post');
					postElement.innerHTML = `
							<img src="${post.imagenData}" alt="Imagen del post">
							<h1>${post.titulo}</h1>
							<p>${post.descripcion}</p>
					`;
					postsContainer.appendChild(postElement);
			});
	}

	// Carga los posts al iniciar
	cargarPosts();

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
							const imagenData = e.target.result;

							// Crear y almacenar el post en localStorage
							const postData = {
									imagenData,
									titulo,
									descripcion
							};
							savePostToLocalStorage(postData);

							// Limpiar el formulario
							formulario.reset();

							// Cargar los posts actualizados
							cargarPosts();
					};
					reader.readAsDataURL(imagenArchivo);
			}
	});

	function savePostToLocalStorage(post) {
				const posts = JSON.parse(localStorage.getItem('posts')) || [];
				posts.push(post);
				localStorage.setItem('posts', JSON.stringify(posts));
				console.log('Posts guardados:', posts);
	}});
