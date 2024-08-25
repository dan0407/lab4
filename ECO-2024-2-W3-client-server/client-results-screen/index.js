async function fetchUsers() {
  try {
    const response = await fetch('http://localhost:5050/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

async function fetchPosts() {
  try {
    const response = await fetch('http://localhost:5050/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    renderPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function renderUsers(users) {
  const userContainer = document.getElementById('usuarios');
  if (!userContainer) {
    console.error('Element with id "usuarios" not found');
    return;
  }
  userContainer.innerHTML = ''; // Limpiar contenido previo
  if (users.length === 0) {
    userContainer.innerHTML = '<p>No users registered.</p>';
    return;
  }
  users.forEach((user) => {
    const userElement = document.createElement('div');
    userElement.innerHTML = `
      <p>Username: ${user.username}</p>
      <p>Name: ${user.name}</p>
    `;
    userContainer.appendChild(userElement);
  });
}

function renderPosts(posts) {
  const postContainer = document.getElementById('posts');
  if (!postContainer) {
    console.error('Element with id "posts" not found');
    return;
  }
  postContainer.innerHTML = ''; // Limpiar contenido previo
  if (posts.length === 0) {
    postContainer.innerHTML = '<p>No posts available.</p>';
    return;
  }
  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.className = 'post-item';
    let imageContent = '';
    if (post.imageURL) {
      imageContent = `<img src="${post.imageURL}" alt="Post image" style="max-width: 200px; max-height: 200px;" />`;
    }
    postElement.innerHTML = `
      <p>${post.name} | @${post.username}</p>
      <h2>${post.title}</h2>
      <p>${post.description}</p>
      ${imageContent}
    `;
    postContainer.appendChild(postElement);
  });
}

// Llamadas a las funciones para obtener y renderizar los usuarios y posts
fetchUsers();
fetchPosts();
