

let hamburger = document.querySelector('.nav-button');
let menu = document.querySelector('.header__nav');
let link = document.querySelector('.header__link');
let body = document.body || document.getElementsByTagName('body')[0];

const toggleMenu = () => {
	menu.classList.toggle('header__nav--open');
	hamburger.classList.toggle('nav-button--close');
	body.classList.toggle('overflow-hidden');
}
hamburger.addEventListener('mouseup', e => {
	e.stopPropagation();
	toggleMenu();
});
document.addEventListener('mouseup', e => {
	let target = e.target;
	let its_menu = target == menu;
	let its_hamburger = target == hamburger;
	let menu_is_active = menu.classList.contains('header__nav--open');

	if (!its_menu && !its_hamburger && menu_is_active) {
		toggleMenu();

	};
})

