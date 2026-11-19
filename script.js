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


const dashboardReports=[
 ["Bike Buyer Data","Analyzes customer demographics and the factors associated with bike purchases.","Bike Buyer Data.pdf","Customer segmentation · Age and income patterns · Purchase behaviour","This report explores how customer characteristics relate to bike purchasing decisions. It helps compare buyer and non-buyer groups, identify useful customer segments and understand patterns that can support targeted marketing."],
 ["Customer Churn Analysis","Examines customer churn behaviour and indicators linked to retention.","Customer Churn Analysis 1.pdf","Churn distribution · Customer profile · Retention patterns","This dashboard helps understand which customer groups are more likely to leave. It brings churn indicators and customer attributes together so a business can identify retention risks and focus its customer engagement efforts."],
 ["E-Commerce Dashboard","Presents an overview of e-commerce sales and business performance.","E-Commerse Dashboard.pdf","Sales trends · Product and category performance · Business KPIs","This report provides a visual summary of e-commerce activity. It helps explore sales performance, compare product or category contribution and spot patterns that can guide merchandising and business decisions."],
 ["HR Analytics","Explores workforce data and human-resources indicators.","HR Analytics.pdf","Workforce overview · Employee trends · HR metrics","This dashboard turns employee data into a workforce overview. It supports exploration of employee composition and HR trends, helping teams understand workforce patterns and identify areas that may need attention."],
 ["Restaurant Rating Analysis","Studies restaurant ratings and customer preferences.","Restaurant Rating Analysis.pdf","Restaurant ratings · Customer feedback · Dining insights","This report explores restaurant ratings and dining-related patterns. It helps compare customer feedback, understand rating distributions and identify factors that may influence restaurant choice and perceived experience."],
 ["Sales Performance Analysis","Tracks sales KPIs and performance trends across the report.","Sales Performance Analysis Dashboard.pdf","Sales KPIs · Performance tracking · Trend analysis","This dashboard brings sales indicators into one view to make performance easier to monitor. It supports comparison of results over time and helps identify trends and areas that may require further investigation."],
 ["Water Usage Dashboard","Explores water consumption and usage patterns.","Water Usage Dashboard.pdf","Water consumption · Usage patterns · Resource monitoring","This report visualizes water usage information to make consumption patterns easier to understand. It can help compare usage levels, identify changes and support more informed resource-monitoring decisions."],
 ["Healthcare Analytics","Explores healthcare data and operational indicators.","healthcare1.pdf","Healthcare data · Operational indicators · Performance overview","This dashboard presents healthcare information in a visual format. It helps bring operational indicators together, making it easier to review patterns and understand the data behind service and performance monitoring."],
 ["Zomato Dining Analytics","Explores dining trends and restaurant analytics.","zomato Dining Analytics.pdf","Dining trends · Restaurant analytics · Ratings","This report explores restaurant and dining information associated with Zomato. It helps review rating patterns and dining trends, supporting comparisons across restaurants and a clearer view of customer-facing performance."]
];
const dashboardModal=document.getElementById("dashboardModal");
const pdfjs=window.pdfjsLib;
if(pdfjs){pdfjs.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";}
async function renderPdfPreview(url,image,maxWidth){
 if(!pdfjs||!image)return;
 try{
  const pdf=await pdfjs.getDocument({url,withCredentials:false}).promise;
  const page=await pdf.getPage(1);
  const base=page.getViewport({scale:1});
  const scale=Math.min(maxWidth/base.width,1.5);
  const viewport=page.getViewport({scale});
  const canvas=document.createElement("canvas");
  canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
  await page.render({canvasContext:canvas.getContext("2d"),viewport}).promise;
  image.src=canvas.toDataURL("image/jpeg",0.9);
  const loading=image.parentElement.querySelector(".thumb-loading");if(loading)loading.remove();
 }catch(e){const loading=image.parentElement.querySelector(".thumb-loading");if(loading)loading.textContent="Preview unavailable — open full report";}
}
document.querySelectorAll(".pdf-thumb").forEach(img=>renderPdfPreview(img.dataset.pdf,img,620));
document.querySelectorAll(".dashboard-details").forEach(btn=>btn.addEventListener("click",async()=>{
 const r=dashboardReports[Number(btn.dataset.report)];if(!r)return;
 const url="https://raw.githubusercontent.com/nidhi192004/Power-Bi-Dashboard/main/"+encodeURIComponent(r[2]);
 document.getElementById("dashboardModalEyebrow").textContent="POWER BI REPORT / "+String(Number(btn.dataset.report)+1).padStart(2,"0");
 document.getElementById("dashboardModalTitle").textContent=r[0];
 document.getElementById("dashboardModalDescription").textContent=r[4];
 const list=document.getElementById("dashboardModalFocus");list.replaceChildren(...r[3].split(" · ").map(x=>{const li=document.createElement("li");li.textContent=x;return li;}));
 document.getElementById("dashboardOpenPdf").href="https://github.com/nidhi192004/Power-Bi-Dashboard/blob/main/"+encodeURIComponent(r[2]);
 const image=document.getElementById("dashboardModalImage");image.removeAttribute("src");
 dashboardModal.showModal();await renderPdfPreview(url,image,1100);
}));
document.getElementById("dashboardModalClose").addEventListener("click",()=>dashboardModal.close());
dashboardModal.addEventListener("click",e=>{if(e.target===dashboardModal)dashboardModal.close();});

/* Certificates: each dashboard card opens its own crop of the original certificate sheet. */
(() => {
 const dialog=document.getElementById("certificateModal");
 if(!dialog)return;
 const entries=[
  {issuer:"ALISON · DIPLOMA",title:"ISO/IEC 42001:2023 – Artificial Intelligence Management System (AIMS)",position:"0% 0%"},
  {issuer:"ORACLE UNIVERSITY",title:"Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",position:"100% 0%"},
  {issuer:"ARC TECHNOLOGIES & INSTITUTIONS",title:"Data Analytics Career Program",position:"0% 50%"},
  {issuer:"GOOGLE × KAGGLE",title:"5-Day AI Agents Intensive Course",position:"100% 50%"},
  {issuer:"TATA × FORAGE",title:"Data Visualisation: Empowering Business with Effective Insights",position:"0% 100%"},
  {issuer:"DELOITTE × FORAGE",title:"Data Analytics Job Simulation",position:"100% 100%"}
 ];
 const thumbs=document.querySelectorAll(".certificate-thumb");
 const modalImage=document.getElementById("certificateModalImage");
 const modalTitle=document.getElementById("certificateModalTitle");
 const modalIssuer=document.getElementById("certificateModalIssuer");
 function applySource(){
  const url='url("assets/certificates-preview.jpg")';
  thumbs.forEach(el=>{el.style.backgroundImage=url;});
  modalImage.style.backgroundImage=url;
 }
 applySource();
 function close(){dialog.close();}
 document.querySelectorAll(".certificate-view").forEach(button=>{
  button.addEventListener("click",()=>{
   const item=entries[Number(button.dataset.certificate)];
   if(!item)return;
   modalIssuer.textContent=item.issuer;
   modalTitle.textContent=item.title;
   modalImage.style.setProperty("--certificate-position",item.position);
   modalImage.setAttribute("aria-label",item.title+" certificate");
   applySource();
   dialog.showModal();
  });
 });
 document.getElementById("certificateModalClose").addEventListener("click",close);
 document.getElementById("certificateModalCloseBottom").addEventListener("click",close);
 dialog.addEventListener("click",event=>{if(event.target===dialog)close();});
})();
