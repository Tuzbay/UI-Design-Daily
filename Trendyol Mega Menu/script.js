const deneme = document.querySelector(
  ".top-bottom .top-bottom-list li:nth-child(1)"
);

const article = document.querySelector("article");

deneme.addEventListener("mouseover", () => {
  article.style.backgroundColor = "#bdbbbb";
  article.style.transition = ".3s all ease";
});

deneme.addEventListener("mouseout", () => {
  article.style.backgroundColor = "#fff";
  article.style.transition = ".3s all ease";
});
