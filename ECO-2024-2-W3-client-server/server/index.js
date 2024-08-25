// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const db = {
// 	players: [],
// };

// // Obtener todos los usuarios
// app.get('/users', (request, response) => {
// 	response.send(db);
// });

// // Crear un nuevo usuario
// app.post('/user', (request, response) => {
// 	const { body } = request;
// 	db.players.push(body);
// 	response.status(201).send(body);
// });

// // Iniciar sesión
// app.post('/login', (request, response) => {
// 	const { username, password } = request.body;

// 	// Buscar usuario en la base de datos
// 	const user = db.players.find(player => player.username === username && player.password === password);

// 	if (user) {
// 		// Si se encuentra el usuario, responder con éxito
// 		response.status(200).send({ success: true, username: user.username });
// 	} else {
// 		// Si no se encuentra, responder con error
// 		response.status(401).send({ success: false, message: 'Credenciales incorrectas' });
// 	}
// });

// app.listen(5050, () => {
// 	console.log(`Server is running on http://localhost:5050`);
// });

// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const db = {
//   players: [],
//   posts: []
// };

// // Obtener todos los usuarios
// app.get('/users', (request, response) => {
//   response.send(db.players);
// });

// // Crear un nuevo usuario
// app.post('/user', (request, response) => {
//   const { body } = request;
//   db.players.push(body);
//   response.status(201).send(body);
// });

// // Iniciar sesión
// app.post('/login', (request, response) => {
//   const { username, password } = request.body;

//   // Buscar usuario en la base de datos
//   const user = db.players.find(player => player.username === username && player.password === password);

//   if (user) {
//     // Si se encuentra el usuario, responder con éxito
//     response.status(200).send({ success: true, username: user.username });
//   } else {
//     // Si no se encuentra, responder con error
//     response.status(401).send({ success: false, message: 'Credenciales incorrectas' });
//   }
// });

// // Obtener todos los posts
// app.get('/posts', (request, response) => {
//   response.send(db.posts);
// });

// // Crear un nuevo post
// app.post('/post', (request, response) => {
//   const { body } = request;
//   db.posts.push(body);
//   response.status(201).send(body);
// });

// app.listen(5050, () => {
//   console.log(`Server is running on http://localhost:5050`);
// });

// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const db = {
//   players: [],
//   posts: []
// };

// // Obtener todos los usuarios
// app.get('/users', (request, response) => {
//   response.json(db.players);
// });

// // Crear un nuevo usuario
// app.post('/user', (request, response) => {
//   const { body } = request;
//   db.players.push(body);
//   response.status(201).json(body);
// });

// // Iniciar sesión
// app.post('/login', (request, response) => {
//   const { username, password } = request.body;

//   // Buscar usuario en la base de datos
//   const user = db.players.find(player => player.username === username && player.password === password);

//   if (user) {
//     response.status(200).json({ success: true, username: user.username });
//   } else {
//     response.status(401).json({ success: false, message: 'Credenciales incorrectas' });
//   }
// });

// // Obtener todos los posts
// app.get('/posts', (request, response) => {
//   response.json(db.posts);
// });

// // Crear un nuevo post
// app.post('/post', (request, response) => {
//   const { body } = request;
//   db.posts.push(body);
//   response.status(201).json(body);
// });

// app.listen(5050, () => {
//   console.log(`Server is running on http://localhost:5050`);
// });


const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = {
  players: [],
  posts: []
};

// Obtener todos los usuarios
app.get('/users', (request, response) => {
  response.json(db.players);
});

// Crear un nuevo usuario
app.post('/user', (request, response) => {
  const { body } = request;
  db.players.push(body);
  response.status(201).json(body);
});

// Iniciar sesión
app.post('/login', (request, response) => {
  const { username, password } = request.body;
  const user = db.players.find(player => player.username === username && player.password === password);

  if (user) {
    response.status(200).json({ success: true, username: user.username });
  } else {
    response.status(401).json({ success: false, message: 'Credenciales incorrectas' });
  }
});

// Obtener todos los posts
app.get('/posts', (request, response) => {
  response.json(db.posts);
});

// Crear un nuevo post
app.post('/post', (request, response) => {
  const { body } = request;
  db.posts.push(body);
  response.status(201).json(body);
});

app.listen(5050, () => {
  console.log('Server is running on http://localhost:5050');
});
