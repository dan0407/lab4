document.getElementById("create-button").addEventListener("click", createUser);
document.getElementById("login-button").addEventListener("click", loginUser);

// Evento para redirigir a la página de crear usuario
document.getElementById("create-button").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:3000/crearusuario/crear.html"; // Cambia a la ruta de la página de crear usuario
});

// Evento para redirigir a la página de iniciar sesión
document.getElementById("login-button").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:3000/loginPage/login.html"; // Cambia a la ruta de la página de iniciar sesión
});

async function createUser() {
  renderLoadingState();
  try {
    const player = {
      name: "John Doe",
      profilePicture: "https://avatar.iran.liara.run/public/13",
    };
    const response = await fetch("http://localhost:5050/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    renderData("Usuario creado exitosamente");
  } catch (error) {
    renderErrorState();
  }
}

async function loginUser() {
  renderLoadingState();
  try {
    const response = await fetch("http://localhost:5050/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John Doe" }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    renderData("Inicio de sesión exitoso");
  } catch (error) {
    renderErrorState();
  }
}

function renderErrorState() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Limpiar datos previos
  container.innerHTML = "<p>Ocurrió un error</p>";
  console.log("Ocurrió un error");
}

function renderLoadingState() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Limpiar datos previos
  container.innerHTML = "<p>Cargando...</p>";
  console.log("Cargando...");
}

function renderData(message) {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Limpiar datos previos
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = message; // Mostrar el mensaje que se pasó
  container.appendChild(div);
}
