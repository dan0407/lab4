document.getElementById('create-button').addEventListener('click', createUser);

async function createUser() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const profilePicture = document.getElementById('profile-picture').value || 'https://avatar.iran.liara.run/public/13';

	if (!username || !password || !profilePicture) {
		renderErrorState('Todos los campos son obligatorios. Por favor, complétalos.');
		return;
	}

	renderLoadingState();

	try {
		const response = await fetch('http://localhost:5050/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password, profilePicture }),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		saveUserToLocalStorage(data);

		renderData(data);
	} catch (error) {
		console.error(error);
		renderErrorState('Fallo al crear el usuario. Por favor, intenta de nuevo.');
	}
}

function renderErrorState(message) {
	const container = document.getElementById('data-container');
	container.innerHTML = '';
	container.innerHTML = `<p>${message}</p>`;
	console.log(message);
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

	if (data.username) {
		container.innerHTML = `<p>Usuario creado exitosamente. Bienvenido, ${data.username}!</p>`;
		window.location.href = 'http://127.0.0.1:3000/posting/post.html';
	} else {
		renderErrorState('Error inesperado al crear el usuario.');
	}
}

function saveUserToLocalStorage(user) {
	const users = JSON.parse(localStorage.getItem('users')) || [];

	const userExists = users.some((existingUser) => existingUser.username === user.username);
	if (userExists) {
		renderErrorState('El usuario ya existe.');
		return;
	}

	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
	console.log('Usuarios guardados:', users);
}
