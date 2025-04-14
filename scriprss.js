function registerUser() {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value.trim();

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userExists = users.find(u => u.username === username);

  if (userExists) {
    document.getElementById("register-error").innerText = "User already exists!";
    return false;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", username);
  window.location.href = "welcome.html";
  return false;
}

function loginUser() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    document.getElementById("login-error").innerText = "Invalid data please check again!";
    return false;
  }

  localStorage.setItem("loggedInUser", username);
  window.location.href = "welcome.html";
  return false;
}

// Prevent access if not logged in
const user = localStorage.getItem("loggedInUser");
if (!user) {
  window.location.href = "login.html"; // Redirect to login
}


