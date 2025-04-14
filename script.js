// Function to handle registration
function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const savePassword = document.getElementById("save-password-checkbox").checked;
  
    // Save user details to localStorage
    if (username && password) {
      localStorage.setItem("registeredUser", JSON.stringify({ username, password, savePassword }));
      alert("Registration successful!");
      window.location.href = "login.html";
    } else {
      document.getElementById("register-error").textContent = "Please fill in all fields!";
    }
  
    return false;
  }
  
  // Function to handle login
  function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    // Retrieve registered user details
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
  
    if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
      localStorage.setItem("loggedInUser", username);
      welcomeUser(username);
      return false;
    } else {
      document.getElementById("login-error").textContent = "Invalid username or password!";
      return false;
    }
  }
  
  // Function to welcome the user with voice synthesis
  function welcomeUser(username) {
    const message = `Welcome ${username}! This is your Engineer's Hub!`;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1;
    utterance.pitch = 1.2;
    utterance.volume = 1;
  
    // Select a voice for clarity
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      utterance.voice = voices.find(voice => voice.lang === "en-US") || voices[0];
    }
  
    speechSynthesis.speak(utterance);
  
    setTimeout(() => {
      window.location.href = "home.html";  // Redirect to home page after 3 seconds
    }, 3000);
  }
  
  // On load, check if user is logged in
  window.onload = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
      document.getElementById("welcome-message").textContent = `Welcome back, ${loggedInUser}! Redirecting to your homepage...`;
      welcomeUser(loggedInUser);
    }
  };
  