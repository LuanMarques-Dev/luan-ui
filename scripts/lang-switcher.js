document.addEventListener("DOMContentLoaded", () => {
  const langEls = document.querySelectorAll(".flag");
  const userLang = localStorage.getItem("lang") || "pt-BR";
  setLanguage(userLang);

  langEls.forEach(flag => {
    flag.addEventListener("click", () => {
      const lang = flag.getAttribute("data-lang");
      localStorage.setItem("lang", lang);
      setLanguage(lang);
    });
  });
});

function setLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll(".flag").forEach(f => f.classList.remove("selected"));
  document.querySelector(`.flag[data-lang="${lang}"]`).classList.add("selected");

  document.querySelector(".title a[href='#about']").textContent = t.about;
  document.querySelector(".title a[href='#skills']").textContent = t.skills;
  document.querySelector(".title a[href='#education']").textContent = t.education;
  document.querySelector(".title a[href='#projects']").textContent = t.projects;

  document.querySelector(".hero .text h1").innerHTML = t.heroText;
  document.querySelector(".about-content h2").textContent = t.aboutTitle;
  document.querySelectorAll(".about-content p")[0].textContent = t.aboutText1;
  document.querySelectorAll(".about-content p")[1].textContent = t.aboutText2;

  document.querySelector(".skills-title").textContent = t.skillsTitle;
  document.querySelector(".education-title").textContent = t.educationTitle;
  document.querySelector(".info h3").textContent = t.educationCourse;
  document.querySelector(".info p").textContent = t.educationInstitution;
  document.querySelector(".projects-title").textContent = t.projectsTitle;

  document.querySelectorAll("figcaption span").forEach(span => {
    if (span.textContent.includes("PROJETO") || span.textContent.includes("PROJECT") || span.textContent.includes("開発中")) {
      span.textContent = t.projectInDev;
    }
  });

  document.querySelector("#btn-cv").textContent = t.btnCV;
}
