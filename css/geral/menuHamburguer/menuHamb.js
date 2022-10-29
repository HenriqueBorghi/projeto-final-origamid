const header_navegacao = document.querySelector(".header-nav");
const navegacao_itens = document.querySelectorAll(".nav-itens");
const navegacao_mobile = document.querySelector(".menu-hamb");
const mobile_open = document.querySelector(".open");
const mobile_close = document.querySelector(".close");

function abrir_menu() {
  if (header_navegacao.classList.contains("mostrar-menu")) {
    header_navegacao.classList.remove("mostrar-menu");
    mobile_close.style.display = "none";
    mobile_open.style.display = "block";
  } else {
    header_navegacao.classList.add("mostrar-menu");
    mobile_close.style.display = "block";
    mobile_open.style.display = "none";
  }
}

navegacao_mobile.addEventListener("click", abrir_menu);

navegacao_itens.forEach(function (navegacao_itens) {
  navegacao_itens.addEventListener("click", abrir_menu);
});
