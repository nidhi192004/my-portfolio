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
function openEmailDraft(name,email,message){
 const subject=encodeURIComponent("Portfolio enquiry from "+name);
 const body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\n"+message);
 window.location.href="mailto:thakrenidhi41@gmail.com?subject="+subject+"&body="+body;
}
document.querySelectorAll("#messageForm,#quickMessageForm").forEach(form=>{
 form.addEventListener("submit",event=>{
  event.preventDefault();
  const data=new FormData(form);
  openEmailDraft(data.get("name"),data.get("email"),data.get("message"));
 });
});
const chatLauncher=document.getElementById("chatLauncher");
const quickChat=document.getElementById("quickChat");
const chatClose=document.getElementById("chatClose");
if(chatLauncher&&quickChat){
 chatLauncher.addEventListener("click",()=>{
  quickChat.hidden=!quickChat.hidden;
  chatLauncher.setAttribute("aria-expanded",String(!quickChat.hidden));
 });
 chatClose.addEventListener("click",()=>{
  quickChat.hidden=true;
  chatLauncher.setAttribute("aria-expanded","false");
 });
}


const dashboardReports=[["Bike Buyer Data","Customer demographics and bike purchase behaviour.","Bike Buyer Data.pdf","Customer segmentation · Purchase patterns · Sales insights"],["Customer Churn Analysis","Explore customer churn patterns and retention indicators.","Customer Churn Analysis 1.pdf","Churn analysis · Customer retention · Risk patterns"],["E-Commerce Dashboard","A visual overview of e-commerce performance and sales trends.","E-Commerse Dashboard.pdf","Sales trends · E-commerce performance · Business KPIs"],["HR Analytics","Explore workforce metrics and human-resources indicators.","HR Analytics.pdf","Workforce analysis · HR metrics · Employee trends"],["Restaurant Rating Analysis","Understand restaurant ratings and customer preferences.","Restaurant Rating Analysis.pdf","Restaurant ratings · Customer feedback · Dining insights"],["Sales Performance Analysis","Track sales KPIs and performance trends in one report.","Sales Performance Analysis Dashboard.pdf","Sales KPIs · Performance tracking · Trend analysis"],["Water Usage Dashboard","Explore water consumption and usage patterns.","Water Usage Dashboard.pdf","Water consumption · Usage patterns · Resource monitoring"],["Healthcare Analytics","A dashboard exploring healthcare data and operational indicators.","healthcare1.pdf","Healthcare data · Operational indicators · Performance overview"],["Zomato Dining Analytics","Explore dining trends and restaurant analytics.","zomato Dining Analytics.pdf","Dining trends · Restaurant analytics · Ratings"]];
const dashboardModal=document.getElementById("dashboardModal");
const pdfjs=window.pdfjsLib;
if(pdfjs){pdfjs.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";}
async function renderPdfPreview(url,canvas,maxWidth){
 if(!pdfjs||!canvas)return;
 try{
  const pdf=await pdfjs.getDocument({url,withCredentials:false}).promise;
  const page=await pdf.getPage(1);
  const base=page.getViewport({scale:1});
  const scale=Math.min(maxWidth/base.width,1.5);
  const viewport=page.getViewport({scale});
  const ratio=window.devicePixelRatio||1;
  canvas.width=Math.floor(viewport.width*ratio);canvas.height=Math.floor(viewport.height*ratio);
  canvas.style.width=viewport.width+"px";canvas.style.height=viewport.height+"px";
  const ctx=canvas.getContext("2d");ctx.setTransform(ratio,0,0,ratio,0,0);
  await page.render({canvasContext:ctx,viewport}).promise;
  const loading=canvas.parentElement.querySelector(".thumb-loading");if(loading)loading.remove();
 }catch(e){const loading=canvas.parentElement.querySelector(".thumb-loading");if(loading)loading.textContent="Preview unavailable — open full report";}
}
document.querySelectorAll(".pdf-thumb").forEach(c=>renderPdfPreview(c.dataset.pdf,c,520));
const oracleCanvas=document.getElementById("oracleCertificateCanvas");
if(oracleCanvas)renderPdfPreview(oracleCanvas.dataset.pdf,oracleCanvas,700);
document.querySelectorAll(".dashboard-details").forEach(btn=>btn.addEventListener("click",async()=>{
 const r=dashboardReports[Number(btn.dataset.report)];if(!r)return;
 const url="https://raw.githubusercontent.com/nidhi192004/Power-Bi-Dashboard/main/"+encodeURIComponent(r[2]);
 document.getElementById("dashboardModalEyebrow").textContent="POWER BI REPORT / "+String(Number(btn.dataset.report)+1).padStart(2,"0");
 document.getElementById("dashboardModalTitle").textContent=r[0];
 document.getElementById("dashboardModalDescription").textContent=r[1];
 const list=document.getElementById("dashboardModalFocus");list.replaceChildren(...r[3].split(" · ").map(x=>{const li=document.createElement("li");li.textContent=x;return li;}));
 document.getElementById("dashboardOpenPdf").href="https://github.com/nidhi192004/Power-Bi-Dashboard/blob/main/"+encodeURIComponent(r[2]);
 const canvas=document.getElementById("dashboardModalCanvas");canvas.width=0;canvas.height=0;
 dashboardModal.showModal();await renderPdfPreview(url,canvas,850);
}));
document.getElementById("dashboardModalClose").addEventListener("click",()=>dashboardModal.close());
dashboardModal.addEventListener("click",e=>{if(e.target===dashboardModal)dashboardModal.close();});
