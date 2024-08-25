document.getElementById('login-button').addEventListener('click', loginUser);

async function loginUser() {
	renderLoadingState();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	try {
		const response = await fetch('http://localhost:5050/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		renderData(data);
	} catch (error) {
		console.error(error);
		renderErrorState();
	}
}

function renderErrorState() {
	const container = document.getElementById('data-container');
	container.innerHTML = '';
	container.innerHTML = '<p>Inicio de sesión fallido. Por favor, verifica tus credenciales.</p>';
	console.log('Inicio de sesión fallido');
}

function renderLoadingState() {
	const container = document.getElementById('data-container');
	container.innerHTML = '';
	container.innerHTML = '<p>Cargando...</p>';
	console.log('Cargando...');
}

function renderData(data) {
	const container = document.getElementById('data-container');
	container.innerHTML = '';

	if (data.success) {
		container.innerHTML = `<p>Inicio de sesión exitoso. Bienvenido, ${data.username}!</p>`;

		window.location.href = 'http://127.0.0.1:3000/posting/post.html';
	} else {
		renderErrorState();
	}
}
