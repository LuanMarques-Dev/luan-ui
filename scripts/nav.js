const links = document.querySelectorAll(".title a");
const btnCV = document.getElementById("btn-cv");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
  });
});


btnCV.addEventListener("click", () => {
  window.open("assets/cv/Luan-Marques.pdf", "_blank", "width=800,height=600");
});

