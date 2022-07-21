document.querySelector('header .menu-btn').addEventListener('click', () => {
	document.querySelector('header .nav-menu').classList.toggle('show');
});

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});