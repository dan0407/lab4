document.getElementById('fetch-button').addEventListener('click', fetchData);
	async function fetchData() {
		renderLoadingState();
		try {
			const postsString = localStorage.getItem('posts');
			console.log('Contenido raw de localStorage:', postsString);

			const posts = postsString ? JSON.parse(postsString) : [];
			console.log('Posts parseados:', posts);

			renderData({ players: posts });
		} catch (error) {
			console.error('Error al obtener posts:', error);
			renderErrorState();
		}
	}
function renderErrorState() {
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data
	container.innerHTML = '<p>Failed to load data</p>';
	console.log('Failed to load data');
}

function renderLoadingState() {
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data
	container.innerHTML = '<p>Loading...</p>';
	console.log('Loading...');
}

function renderData(data) {
	console.log('Rendering data:', data);
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data

	if (data.players && data.players.length > 0) {
		data.players.forEach((item) => {
			console.log('Rendering item:', item);
			const div = document.createElement('div');
			div.className = 'item';
			div.innerHTML = `
				<img src="${item.imagenData}" alt="Post image" />
				<h2>${item.titulo}</h2>
				<p>${item.descripcion}</p>
			`;
			container.appendChild(div);
		});
	} else {
		console.log('No posts found');
		container.innerHTML = '<p>No posts found</p>';
	}
}