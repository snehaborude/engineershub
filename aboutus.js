// Toggle Theme Function
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    // Toggle 'dark-mode' class on body
    body.classList.toggle('dark-mode');

    // Change icon image (optional)
    if (body.classList.contains('dark-mode')) {
        icon.src = 'images/sun-icon'; // Light mode icon
        icon.alt = 'Switch to Light Mode';
    } else {
        icon.src = 'images/moon-icon.png'; // Dark mode icon
        icon.alt = 'Switch to Dark Mode';
    }

    // Optional: Save user's theme preference
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// On page load, apply saved theme if any
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.src = 'images/sun-icon.png';
        icon.alt = 'Switch to Light Mode';
    } else {
        icon.src = 'images/moon-icon.png';
        icon.alt = 'Switch to Dark Mode';
    }
};
// Team data
const teamMembers = [
    {
      name: "Amruta Adhav",
      role: "Student",
      img: "images/amruta.jpg",
      instagram: "https://instagram.com/rohan",
      linkedin: "https://linkedin.com/in/rohan"
    },
    {
      name: "Yashraj Babar",
      role: "Student",
      img: "images/Yashraj.jpg ",
      instagram: "https://instagram.com/ananya",
      linkedin: "https://linkedin.com/in/ananya"
    },
    {
      name: "Omkar Chede",
      role: "Student",
      img: "images/omkar.jpg",
      instagram: "https://instagram.com/rahul",
      linkedin: "https://linkedin.com/in/rahul"
    },
    {
      name: "Vansh Deshmukh",
      role: "Student",
      img: " images/vansh.jpg",
      instagram: "https://instagram.com/simran",
      linkedin: "https://linkedin.com/in/simran"
    },
    {
      name: "Sneha Borude",
      role: "student",
      img: "images/sneha.jpg",
      instagram: "https://instagram.com/arjun",
      linkedin: "https://linkedin.com/in/arjun"
    }
  ];
  
  const container = document.getElementById("team-container");
  
  teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}" class="profile-img" />
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <div class="social-icons">
        <a href="${member.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    `;
    container.appendChild(card);
  });
  