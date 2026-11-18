const projectData = {
  camera: {
    eyebrow: "PROJECT 01 / AI + CAMERA ANALYTICS",
    title: "AI-Powered Camera Analytics",
    tags: ["Python", "OpenCV", "PostgreSQL", "Power BI"],
    description: "A real-time camera analytics project using Python and OpenCV to connect to camera streams, detect motion and faces, capture frames, and record camera events for monitoring and analysis. The related work includes a Power BI report and PostgreSQL event storage.",
    note: "The matching GitHub repository currently contains exposed camera/database credentials in source files. For your safety, this project link is withheld from public visitors until those credentials are rotated and the repository history is cleaned. Contact me for a project walkthrough.",
    github: "https://github.com/nidhi192004"
  },
  sales: {
    eyebrow: "PROJECT 02 / BUSINESS INTELLIGENCE",
    title: "Sales Analytics",
    tags: ["SQL", "Excel", "Power BI"],
    description: "Analyzed multi-region sales data, automated reporting in Excel and created interactive Power BI dashboards. The resume records a 40% reduction in manual reporting effort.",
    note: "Explore the Sales Performance Analysis Dashboard and other BI reports in the Power BI repository.",
    github: "https://github.com/nidhi192004/Power-Bi-Dashboard"
  },
  insurance: {
    eyebrow: "PROJECT 03 / DATABASE MANAGEMENT",
    title: "Insurance Management System",
    tags: ["PostgreSQL", "SQL", "PL/pgSQL"],
    description: "A database project with SQL definitions and procedures for customers, agents, policies, claims and payments, including trigger and reporting examples.",
    note: "The project SQL file is available in the SQL-TASKS repository.",
    github: "https://github.com/nidhi192004/SQL-TASKS"
  },
  fraud: {
    eyebrow: "PROJECT 04 / FINANCIAL ANALYTICS",
    title: "Credit Card Fraud Analysis",
    tags: ["Python", "Pandas", "Scikit-learn", "Power BI"],
    description: "A machine-learning and business-intelligence project using a Kaggle credit-card transaction dataset. The repository README describes exploratory analysis, preprocessing, Logistic Regression classification, evaluation metrics and a Power BI dashboard.",
    note: "The project README documents 284,807 transactions and 492 fraudulent records in the source dataset.",
    github: "https://github.com/nidhi192004/Credit-Card-Fraud-Detection-Project"
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
modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });
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