/* Módulo de Contacto & Enlaces Directos - Portfolio Tomás Vega */

export function initContact() {
  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        showStatus('Por favor, completa todos los campos para enviar tu mensaje.', 'error');
        return;
      }

      // Simulate ultra-fast submission
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Enviando...</span>`;
      }

      setTimeout(() => {
        showStatus(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente. Tomás se pondrá en contacto a la brevedad.`, 'success');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Enviar Mensaje Directo</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>`;
        }
      }, 1000);
    });
  }

  function showStatus(msg, type) {
    if (!statusBox) return;
    statusBox.textContent = msg;
    statusBox.className = `form-status ${type}`;
    statusBox.style.display = 'block';

    if (type === 'success') {
      setTimeout(() => {
        statusBox.style.display = 'none';
      }, 6000);
    }
  }
}
