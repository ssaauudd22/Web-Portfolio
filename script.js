// Light/Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  document.getElementById("theme-toggle").textContent = isDark
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Project Data
const projects = [
  {
    title: "Heap Task Manager (C++)",
    summary: "Priority-based task queue using heap logic in C++. Lightweight and CLI-driven.",
    github: "https://github.com/yourusername/heap-task-manager"
  },
  {
    title: "Lottery Inventory System (Java)",
    summary: "Simulates inventory and ticket tracking using OOP, classes, and dynamic reports.",
    github: "https://github.com/yourusername/lottery-system"
  },
  {
    title: "To-Do Web App (FLASK | Python, HTML, CSS)",
    summary: "A simple to-do list app with localStorage, task status, and priority tags.",
    github: "https://github.com/ssaauudd22/To-Do-App/tree/main"
  },
  {
    title: "Portfolio Website",
    summary: "This very portfolio, built with responsive design and interactivity.",
    github: "https://github.com/yourusername/portfolio"
  }
];

// Render Projects
const container = document.getElementById("projects-container");
projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <a href="${project.github}" target="_blank">GitHub →</a>
  `;
  container.appendChild(card);
});

// Header minimize on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 50) {
    header.classList.add("header-small");
  } else {
    header.classList.remove("header-small");
  }
});