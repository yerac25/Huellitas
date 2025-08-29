// Toggle de navegación móvil
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!expanded));
		siteNav.style.display = expanded ? 'none' : 'block';
	});
}

// Acciones de botones (demo)
document.querySelectorAll('.action-card').forEach((btn) => {
	btn.addEventListener('click', () => {
		alert(`Acción: ${btn.querySelector('.action-title')?.textContent ?? 'Botón'}`);
	});
});


