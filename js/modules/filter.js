/* Módulo de Filtrado Dinámico de Proyectos - Portfolio Lorena Jerez */

export function initFilter() {
  const filterBtns = document.querySelectorAll('.js-filter-btn');
  const projectCards = document.querySelectorAll('.js-project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter project cards with fade transition
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
