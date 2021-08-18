const menuBtn = document.querySelector(".menu");
const burger = document.querySelector(".menu__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__item");

let showMenu = false;

menuBtn.addEventListener("click", () => {
	if (!showMenu) {
		burger.classList.add("open");
		nav.classList.add("open");
		navMenu.classList.add("open");
		navItems.forEach((item) => item.classList.add("open"));

		showMenu = true;
	} else {
		burger.classList.remove("open");
		nav.classList.remove("open");
		navMenu.classList.remove("open");
		navItems.forEach((item) => item.classList.remove("open"));

		showMenu = false;
	}
});
