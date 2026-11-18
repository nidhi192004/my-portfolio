const projectData = {
  camera: {
    eyebrow: "PROJECT 01 / AI + ANALYTICS",
    title: "AI-Powered Camera Analytics",
    tags: ["Python", "SQL", "Power BI"],
    description: "An AI-enabled camera surveillance project focused on analyzing camera event data and system performance. During the related internship, I cleaned and processed camera event logs and prepared Excel and Power BI summaries to support model evaluation.",
    note: "The repository URL for this specific project will be connected after its exact GitHub repository is confirmed.",
    github: "https://github.com/nidhi192004"
  },
  sales: {
    eyebrow: "PROJECT 02 / BUSINESS INTELLIGENCE",
    title: "Sales Analytics",
    tags: ["SQL", "Excel", "Power BI"],
    description: "Analyzed multi-region sales data, automated reporting in Excel and developed interactive Power BI dashboards. The resume records a 40% reduction in manual reporting effort.",
    note: "The Sales Performance Analysis Dashboard report is available in the Power-Bi-Dashboard repository.",
    github: "https://github.com/nidhi192004/Power-Bi-Dashboard"
  },
  insurance: {
    eyebrow: "PROJECT 03 / DATABASE MANAGEMENT",
    title: "Insurance Management System",
    tags: ["SQL", "Database"],
    description: "A SQL project listed in the portfolio project collection. The SQL-TASKS repository is the current repository destination for this project.",
    note: "Detailed features and database schema will be added after the project files are reviewed.",
    github: "https://github.com/nidhi192004/SQL-TASKS"
  },
  fraud: {
    eyebrow: "PROJECT 04 / FINANCIAL ANALYTICS",
    title: "Credit Card Fraud Analysis",
    tags: ["Data Analysis", "Fraud Detection"],
    description: "A core portfolio project. Its detailed tools, workflow and findings will be added once the corresponding project repository and materials are confirmed.",
    note: "The project-specific repository link is pending confirmation.",
    github: "https://github.com/nidhi192004"
  }
};
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalDescription = document.getElementById("modalDescription");
const modalNote = document.getElementById("modalNote");
const modalGithub = document.getElementById("modalGithub");
document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];
    if (!project) return;
    document.getElementById("modalEyebrow").textContent = project.eyebrow;
    modalTitle.textContent = project.title;
    modalTags.replaceChildren(...project.tags.map(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      return span;
    }));
    modalDescription.textContent = project.description;
    modalNote.textContent = project.note;
    modalGithub.href = project.github;
    modal.showModal();
  });
});
document.getElementById("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});
document.getElementById("modalContact").addEventListener("click", () => modal.close());
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));