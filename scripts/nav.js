const links = document.querySelectorAll(".title a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(el => el.classList.remove("active")); // remove dos outros
    link.classList.add("active"); // adiciona no clicado
  });
});
