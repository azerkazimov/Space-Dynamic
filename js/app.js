let burgerMenu = document.getElementById("burger-menu");
let nav = document.querySelector(".header-body");

if (burgerMenu) {
  burgerMenu.addEventListener("click", () => {
	nav.classList.toggle('active')
  });
}
