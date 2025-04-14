// === Toggle Theme ===
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');
  
    if (body.classList.contains('dark-mode')) {
      icon.src = 'images/sun-icon.png';
      icon.alt = 'Switch to Light Mode';
    } else {
      icon.src = 'images/moon-icon.png';
      icon.alt = 'Switch to Dark Mode';
    }
  
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('theme-icon');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      icon.src = 'images/sun-icon.png';
    }
  };
  
  // Firebase config (REPLACE WITH YOURS)
  
  function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const userValidMsg = document.getElementById("userValid");
  const passValidMsg = document.getElementById("passValid");
  const message = document.getElementById("message");
  
  usernameInput.addEventListener("input", () => {
    if (usernameInput.value.trim().length > 0) {
      userValidMsg.textContent = "✅ Valid";
      userValidMsg.style.color = "green";
    } else {
      userValidMsg.textContent = "❌ Username is required";
      userValidMsg.style.color = "red";
    }
  });
  
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.trim().length >= 5) {
      passValidMsg.textContent = "✅ Valid";
      passValidMsg.style.color = "green";
    } else {
      passValidMsg.textContent = "❌ Minimum 5 characters";
      passValidMsg.style.color = "red";
    }
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (username === "" || password === "") {
      alert("❌ All fields are required!");
      message.style.color = "red";
      message.textContent = "❌ Username and Password are required!";
      return;
    }
  
    if (password.length < 5) {
      alert("❌ Password must be at least 5 characters!");
      message.style.color = "red";
      message.textContent = "❌ Password too short!";
      return;
    }
  
    // ✅ Successful login for any valid input
    alert("✅ Login Successful!");
    message.style.color = "green";
    message.textContent = `Thank You 😊 Welcome, ${username}!`;
  });