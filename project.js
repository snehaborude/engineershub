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

const projects = [
    //aiml
    {
        title: "Bug Tracking System",
        domain: "cloudcomputing",
        description: "",
        link: "https://www.dropbox.com/scl/fi/gmknbfwrut3ekomnjhted/21.Bug-Tracking-System.docx?rlkey=zc89g7nguxbxtuf7rql6s6rs5&st=khb4z6li&dl=1"
      },
      {
        title: "File Storage System using hybrid crptographic",
        domain: "aiml",
         link: "https://www.dropbox.com/scl/fi/xgosql98m06mgicsawe0p/22.File-Storage-System-Using-Hybrid-Cryptography.docx?rlkey=b1778jsr3tdyei57ouwpnquxj&st=ubkzd4kr&dl=1'",
        description: ""
      },

      {
        title: "E-learning",
        domain: "cloudcomputing",
        link: "https://www.dropbox.com/scl/fi/1ltkf5mf86e2pzxgdt3qv/25.E-learning.docx?rlkey=9drp7h861tponlcczi5gtmnyw&st=pxkv6mq0&dl=1%27",
        
      },

      {
        title: "online BookStore",
        domain: "cloudcomputing",
        description: "",
        link: "https://www.dropbox.com/scl/fi/792x96x3mdzodo2qs33my/26.Online-Bookstore.docx?rlkey=w0ojql7r65r464radzyasl1eq&st=rantcecy&dl=1%27"
      },

      {
        title: "Information Chatbot",
        domain: "cloudcomputing",
        description: "",
        link: "https://www.dropbox.com/scl/fi/4l2mijjtqvze6beluvy45/27.Information-Chatbot.docx?rlkey=ejy3l9mvcyulvb5l47pff6ydi&st=a7sqhaka&dl=1%27"
      },

      {
        title: "Online Blood Bank System",
        domain: "cloudcomputing",
        link: "https://www.dropbox.com/scl/fi/ekkeci1w1oy0g3vgoblk9/28.Online-Blood-Bank-System.docx?rlkey=zmze05uciokg6zj8b9fdq50m9&st=0rpw1m63&dl=1%27",
        description: ""
      },
      {
        title: "personal Cloud Storage System",
        domain: "cloudcomputing",
        description: "",
        link: "https://www.dropbox.com/scl/fi/voju8rtu4e7w8w9rfbr3n/29.Personal-Cloud-Storage-System.docx?rlkey=xii9x43kc4foedslqp6nllqhi&st=4ysrg7v1&dl=1%27 "
      },
      {
        title: "Automation of University",
        domain: "cloudcomputing",
        description: "",
        link: " https://www.dropbox.com/scl/fi/op1pyy11689mxhrzkcslc/30.Automation-of-University-or-College-Data-System.docx?rlkey=tieiqjpep0hvsz72l2i9s9tb6&st=0n75en8e&dl=1%27"
      },


      //dsa
      {
        title: "Creating to do list",
        domain: "dsa",
        description: "",
        link: " https://www.dropbox.com/scl/fi/qm0ur30tvrqjz085zc5pb/11.-Creating-a-To-do-list.docx?rlkey=vl03ky0yk6c4hcpxsmz2p7efj&st=zgp27orf&dl=1%27"
      },
      {
        title: " Real-time traffic analysis",
        domain: "dsa",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/3hycywvu52xhlmdmoyyg3/13.-Real-time-traffic-analysis?rlkey=g2siojp165d3g8pmp949l5o1o&st=bftlnxgy&dl=1%27"
      },
      {
        title: "Email spam filter', domain:'dsa ",
        domain: "dsa",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/2baal2gk1fkp839xbrklv/12.Email-Spam-Filter.docx?rlkey=9dup1924u3wpw7nw696ajyn5a&st=l6h63s9q&dl=1%27"
      },
      {
        title: " Real-Estate property search",
        domain: "dsa",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/8ihmat3ovnhfdnfu87kh6/14.Real-Estate-Property-Search.docx?rlkey=60srzl32omm4j53a8vg21lzrp&st=tc93ponl&dl=1%27"
      },
      {
        title: "Building a file zipper ",
        domain: "dsa",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/z38e3a54bhvgyw8l3su13/15.Building-a-File-Zipper.docx?rlkey=vb1q2y89d9iq68mrseu4dlvfw&st=2ipcbore&dl=1%27 "
      },

      {
        title: "Library Management System ",
    
        domain: "dsa",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/fosw5i4n8i0zep6a76bzj/16.-Library-Management-System.docx?rlkey=kd1qi2ws7a7pvjmfrvufyajr2&st=nrfqmzdp&dl=1%27 "
      },

      {
        title: " Building a crossword puzzle",
        domain: "dsa",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/p7l17yr4pppwye6dj52rw/17.Building-a-Crossword-Puzzle-Game.docx?rlkey=qiljizxd2i1na2vn5e163y69m&st=o3d4f7tt&dl=1%27"
      },
      {
        title: " Travel planner using graph",
        domain: "dsa",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/vlezbid8c877zfl1ladbl/19.Travel-Planner-Using-Graph.docx?rlkey=uk9kh9ljbil3q7nuao7i51xat&st=mcturjlq&dl=1%27"
      },
      //robotics
      {
        title: "Banking Mangement System ",
        domain: "robotics",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/im3tyn8p39ew5b7gpo4cf/20.Banking-Management-System.docx?rlkey=gezhoxy9plrnq6brj1funyjh5&st=2ixbni2f&dl=1%27 "
      },
      {
        title: " Development and Analysis of a Line Following Robot Using Infrared Sensors",
        domain: "robotics",
        description: " ",
        link: "https://drive.google.com/file/d/1lBrq6to9kVgEL3g6d1cVITqVqRtTabd6/view?usp=sharing%27 "
      },
      {
        title: " Obstacles  Avoidance Robot using Aurdino+Ultrasonic",
        domain: "robotics",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/yxfs63ua720w85c91ms8q/2.Obstacle-Avoidance-Robot-using-Arduino-Ultrasonic-Sensorsproject.docx?rlkey=gs2eb36itaa843ohe8wltsjk5&st=kv8cf7yz&dl=1%27"
      },
      {
        title: " 'Gesture Control Robot using Accelerometer",
        domain: "robotics",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/4d4lf0ndmi6zq09beussk/3.Gesture-Controlled-Robot-Using-Accelerometer.docx?rlkey=ka587055vukzg4wf2iqn0z6jc&st=nm9x1bxt&dl=1%27"
      },
      {
        title: "Self balancing Robo ",
        domain: "robotics",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/5vso6sxfvif6zpqo0r3g0/5.-Self-Balancing-Robot-Like-Segway.docx?rlkey=soqwksqsdidb83bpzee6fw7t2&st=8pyvqq12&dl=1%27 "
      },
      {
        title: " 'Maze solving Robot using BFS algorithm",
        domain: "robotics",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/6847jzn821rnw1eow0c3e/6.Maze-Solving-Robot-Using-BFS-Algorithm.docx?rlkey=sdjoiqgv35lx209mwixvvnjw2&st=qnpqywg9&dl=1 "
      },
      {
        title: "Drone with Obstacles  Avoidance  using ROS ",
        domain: "robotics",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/nalc4qbfzpwe026yjowvw/7.Drone-with-Obstacle-Avoidance-Using-ROS.docx?rlkey=wxgreyy5nhbfn1p7ulanvaqq3&st=17i8s2c5&dl=1%27 "
      },
      //aiml
      {
        title: "Ai power face recognization ",
        domain: "aiml",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/jr9pywg9uaypborup4gff/8.-AI-Powered-Face-Recognition-Robot.docx?rlkey=sa89i0ehz9bi8487t3n9bkh4t&st=motwad2b&dl=1%27 "
      },
      {
        title: "AI Robot Using GPT + Speech (Voice Chatbot Robot) ",
        domain: "aiml",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/zi90ox14a5dj6mmhy2yoe/9.AI-Robot-Using-GPT.docx?rlkey=7m5d0rwwcu7b6isw4g6ssyi9v&st=07awagmf&dl=0%27"
      },
      {
        title: "Pick and place Robotic arms using Aurdin ",
        domain: "aiml",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/3v9zdajyk7s64ftas2rfe/10.Pick-and-Place-Robotic-Arm-using-Arduino.docx?rlkey=b9v73w1nt4g5dxd61sp4ohrw5&st=rtee5lrd&dl=1%27"
      },
      {
        title: "Implement a smart traffic management system using IoT and AI ",
        domain: "aiml",
        description: " ",
        link: "https://research-paper.com/smart-traffic' "
      },
      {
        title: " Autonomous Vehicle Navigation using Deep learning data science",
        domain: "aiml",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/raj4u2ex4f99y1s93dd87/Autonomous-Vehicle-Navigation-using-Deep-Learning-data-science-10.docx?rlkey=3gqxm4ibt0v2sfzxp7zsnnglc&st=a6cpk3bh&dl=1%27 "
      },

{
    title: "autonomous Vehicle Simulation Projec ",
    domain: "aiml",
    description: " ",
    link: "https://www.dropbox.com/scl/fi/lwi6kb53n8fhdd056x9dq/Autonomous_Vehicle_Simulation_with_GitHub_Links.pdf?rlkey=8g9tvz3eno2fw642chz8fbvc0&st=1hmnvyye&dl=1%27 "
  },

  
  {
    title: " Job Board Website",
    domain: "aiml",
    description: " ",
    link: " https://www.dropbox.com/scl/fi/dg08kzabm0xpcfnm8dr38/Job_Board_Project_with_GitHub_Link.pdf?rlkey=6mflhkc9ig7so1s29orlzhaao&st=6b50glpg&dl=1%27"
  },
  
  {
    title: " Online Learning Platform",
    domain: "aiml",
    description: " ",
    link: "https://www.dropbox.com/scl/fi/f198a18c0d63c37vv4dk4/Online_Learning_Platform_with_GitHub.pdf?rlkey=xxfqoxjrkjetcyr3hn9qt73wo&st=fpd9kd7c&dl=1%27 "
  },
  {
    title: " Personal Portfolio Website ",
    domain: "aiml",
    description: " ",
    link: "https://www.dropbox.com/scl/fi/glc7p138aw94zpl9fw83w/Social_Media_Dashboard_with_GitHub_Links.pdf?rlkey=39uc3cpfpwmmwwof9ijiw0h9e&st=bp4gl8b8&dl=1%27 "
  },
  {
    title: " Social Media Dashboard Website",
    domain: "webdevelopment",
    description: " ",
    link: "https://www.dropbox.com/scl/fi/baredbo88ch3tkpw2au10/Speech_Recognition_with_GitHub_Links.pdf?rlkey=47ldp616wbtp85ppb8wo3abw1&st=fizlzzye&dl=1%27 "
  },
  {
    title: "Stock Price Prediction Project ",
    domain: "webdevelopment",
    description: " ",
    link: "https://www.dropbox.com/scl/fi/wc4s9zddisrvr4nfcrcyw/Stock_Price_Prediction_with_GitHub_Links.pdf?rlkey=n3o1ejhwytefh1j5mm0gguem7&st=ue0yk86s&dl=1%27 "
  },
      
      {
        title: " Task Management App",
        domain: "webdevelopment",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/ecjeg26623jmq9bhgv98w/Task_Management_App_with_GitHub_Links.pdf?rlkey=imkwgv63u80tgnnwrv5m5hdep&st=3c327r28&dl=1%27"
      },
      {
        title: "weather App ",
        domain: "webdevelopment",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/9jc7vbjn8gs4pk2jwjdya/Weather_App_Project_Overview_with_GitHub.pdf?rlkey=dc0jwx4gs1dcv2jesp9rug9ed&st=b7co7fwu&dl=1%27"
      },
      {
        title: " Financial pridiction project",
        domain: "webdevelopment",
        description: " ",
        link: "https://www.dropbox.com/scl/fi/wi7w46hl9j5kh3qxfykrm/Financial_Prediction_Projects.pdf?rlkey=e2x87vtchpqtkziwul9eoe7jh&st=k1axegog&dl=1%27 "
      },
      {
        title: " Forex Rate Prediction using Ensemble Learning'",
        domain: "webdevelopment",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/8xj9k884mzjco3qixly93/Forex_Rate_Prediction_Ensemble_Learning.pdf?rlkey=xzgb3nnm22xae6k6d5dnzgwhr&st=dqt4ak8i&dl=1%27"
      },
      {
        title: "Cryptocurrency Price Prediction using Deep Learning ",
        domain: "webdevelopment",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/i51cu4wxn01s3r8395jrz/nAlgDQAwhE.pdf?rlkey=ai65qkbruqk1x3eyezlkfvqf6&st=c00rd9mt&dl=1%27"
      },
      {
        title: " 'House Price Prediction using ML Mode",
        domain: "webdevelopment",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/nkx07xgn63lh283ftt23x/juSB6eNZ45.pdf?rlkey=jiis0ocec3a9s9qbqpxxi8t4w&st=mp2bndmx&dl=1%27"
      },
      {
        title: " Gold Price Forecasting with Time Series Models",
        domain: "webdevelopment",
        description: " ",
        link: " https://www.dropbox.com/scl/fi/nkx07xgn63lh283ftt23x/juSB6eNZ45.pdf?rlkey=jiis0ocec3a9s9qbqpxxi8t4w&st=mp2bndmx&dl=1%27"
      },

    ]


  const container = document.getElementById('projectContainer');
  const dropdown = document.getElementById('domainDropdown');
  const searchInput = document.getElementById('searchInput');
  
  function createCard(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.domain = project.domain;
  
    card.innerHTML = `
      <h3>${project.title}</h3>
      <button onclick="toggleDetails(this)">View Details</button>
      <div class="details">
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">More Info</a>
      </div>
    `;
    return card;
  }
  
  function renderProjects(filter = '') {
    container.innerHTML = '';
    const keyword = filter.toLowerCase();
  
    const filteredProjects = projects.filter(p =>
      p.domain.includes(keyword)
    );
  
    if (filteredProjects.length === 0) {
      container.innerHTML = '<p style="text-align:center;">No projects found.</p>';
      return;
    }
  
    filteredProjects.forEach(p => {
      container.appendChild(createCard(p));
    });
  }
  
  function toggleDetails(button) {
    const detailsDiv = button.nextElementSibling;
    detailsDiv.style.display =
      detailsDiv.style.display === 'block' ? 'none' : 'block';
  }
  
  dropdown.addEventListener('change', () => {
    searchInput.value = '';
    renderProjects(dropdown.value);
  });
  
  searchInput.addEventListener('input', () => {
    dropdown.value = '';
    renderProjects(searchInput.value);
  });
  
  // Initial render
  renderProjects();
  