
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


const projects = [
    {
        title: "Project 1",
        description: "This is your first project made with HTML, CSS, JS."
    },
    {
        title: "Project 2",
        description: "Your second project built with React or Node.js."
    },
    {
        title: "Project 3",
        description: "A cool ML or OpenCV project."
    }
];


function loadProjects() {
    const container = document.getElementById("project-list");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        container.appendChild(card);
    });
}

loadProjects();


async function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;

    if (!name || !email || !message) {
        alert("Please fill all fields!");
        return;
    }

    alert("Message Sent! (Demo)")   

  
}
