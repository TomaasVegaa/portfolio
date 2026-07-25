/* Módulo de Reproductor de Video Demo - Portfolio Lorena Jerez */

export function initVideoPlayer() {
  const playBtn = document.getElementById('heroPlayVideoBtn');
  const videoModal = document.getElementById('videoDemoModal');
  const closeVideoBtn = document.getElementById('closeVideoModalBtn');
  const demoIframe = document.getElementById('demoVideoIframe');

  if (!playBtn || !videoModal) return;

  playBtn.addEventListener('click', () => {
    openVideoModal();
  });

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', closeVideoModal);
  }

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });

  function openVideoModal() {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    // Pause video if iframe
    if (demoIframe) {
      const src = demoIframe.src;
      demoIframe.src = '';
      demoIframe.src = src;
    }
  }
}
