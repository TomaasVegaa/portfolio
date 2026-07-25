/* Módulo de Modal de Caso de Estudio y Demos - Portfolio Desarrollador */

import { PROJECTS } from '../data/projects-data.js';

export function initModal() {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeModalBtn');
  
  // Demo Viewer Elements
  const demoViewer = document.getElementById('demoViewerOverlay');
  const demoCloseBtn = document.getElementById('demoCloseBtn');

  if (!modalBackdrop) return;

  // Global handler for project cards 'Ver Detalles' buttons
  document.addEventListener('click', (e) => {
    const cardBtn = e.target.closest('.js-open-case-study');
    const demoBtn = e.target.closest('.js-open-demo-direct');
    
    if (cardBtn) {
      const projectId = cardBtn.getAttribute('data-project-id');
      const project = PROJECTS.find(p => p.id === projectId);
      if (project) {
        openModal(project);
      }
    }
    
    if (demoBtn) {
      e.preventDefault();
      const projectId = demoBtn.getAttribute('data-project-id');
      const project = PROJECTS.find(p => p.id === projectId);
      if (project && project.demoPath) {
        openDemo(project);
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking outside content container
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (demoViewer && demoViewer.classList.contains('active')) {
        closeDemo();
      } else if (modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    }
  });

  // Demo Viewer close button
  if (demoCloseBtn) {
    demoCloseBtn.addEventListener('click', closeDemo);
  }
}

function openModal(project) {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDemoLink = document.getElementById('modalDemoLink');
  const featuresList = document.getElementById('projectFeaturesList');

  // Fill Header Content
  if (modalCategory) {
    modalCategory.textContent = project.categoryLabel;
  }
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
  
  // Setup Demo Link / Action
  if (modalDemoLink) {
    // Remove previous event listeners by cloning the button (quick reset)
    const newDemoLink = modalDemoLink.cloneNode(true);
    modalDemoLink.parentNode.replaceChild(newDemoLink, modalDemoLink);
    
    if (project.demoPath) {
      newDemoLink.removeAttribute('href');
      newDemoLink.removeAttribute('target');
      newDemoLink.style.cursor = 'pointer';
      newDemoLink.innerHTML = `<span>Probar Demo Interactiva</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
      
      newDemoLink.addEventListener('click', (e) => {
        e.preventDefault();
        openDemo(project);
      });
    } else if (project.liveUrl) {
      newDemoLink.href = project.liveUrl;
      newDemoLink.setAttribute('target', '_blank');
      newDemoLink.innerHTML = `<span>Visitar Sitio en Vivo</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
    } else {
      newDemoLink.href = "#contacto";
      newDemoLink.removeAttribute('target');
      newDemoLink.innerHTML = `<span>Solicitar Demo / Cotización</span>`;
    }
  }

  // Fill Features List
  if (featuresList && project.features) {
    featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  } else if (featuresList) {
    featuresList.innerHTML = '<li>Información no disponible</li>';
  }

  // Render Interactive Media Gallery (Images & MP4 Videos)
  renderMediaGallery(project);

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderMediaGallery(project) {
  const showcaseContainer = document.getElementById('modalMediaShowcase');
  const carouselContainer = document.getElementById('modalMediaCarousel');

  if (!showcaseContainer || !carouselContainer) return;

  const gallery = project.gallery || [{ type: "image", src: project.thumb, title: project.title }];

  // Render Thumbnail Carousel Strip
  carouselContainer.innerHTML = '';
  gallery.forEach((item, index) => {
    const thumbBtn = document.createElement('button');
    thumbBtn.className = `gallery-thumb-btn ${index === 0 ? 'active' : ''}`;
    thumbBtn.setAttribute('data-index', index);

    if (item.type === 'video') {
      thumbBtn.innerHTML = `
        <div class="thumb-video-icon">▶ Video</div>
        <span class="thumb-title">${item.title}</span>
      `;
    } else {
      thumbBtn.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <span class="thumb-title">${item.title}</span>
      `;
    }

    thumbBtn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
      thumbBtn.classList.add('active');
      displayMediaItem(item, showcaseContainer);
    });

    carouselContainer.appendChild(thumbBtn);
  });

  // Display initial media item (item 0)
  displayMediaItem(gallery[0], showcaseContainer);
}

function displayMediaItem(item, container) {
  if (item.type === 'video') {
    container.innerHTML = `
      <div class="media-viewport video-mode">
        <video controls autoplay class="modal-video-element">
          <source src="${item.src}" type="video/mp4">
          Tu navegador no soporta reproducción de video HTML5.
        </video>
        <span class="media-caption">🎥 ${item.title}</span>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="media-viewport image-mode">
        <img src="${item.src}" alt="${item.title}" class="modal-image-element">
        <span class="media-caption">📸 ${item.title}</span>
      </div>
    `;
  }
}

function closeModal() {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const showcaseContainer = document.getElementById('modalMediaShowcase');

  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Stop any playing video
  if (showcaseContainer) {
    const videoElement = showcaseContainer.querySelector('video');
    if (videoElement) {
      videoElement.pause();
      videoElement.src = '';
    }
  }
}

/* DEMO VIEWER LOGIC */
function openDemo(project) {
  const demoViewer = document.getElementById('demoViewerOverlay');
  const demoIframe = document.getElementById('demoIframe');
  const demoTitle = document.getElementById('demoViewerTitle');
  const spinner = document.getElementById('demoLoadingSpinner');

  if (!demoViewer || !demoIframe) return;

  if (demoTitle) demoTitle.textContent = "Demo: " + project.title;
  
  demoIframe.classList.remove('loaded');
  if (spinner) spinner.style.display = 'flex';

  demoIframe.onload = () => {
    demoIframe.classList.add('loaded');
    if (spinner) spinner.style.display = 'none';
  };

  // Add cache buster query parameter to force browser to load latest version
  const cacheBuster = `?v=${new Date().getTime()}`;
  demoIframe.src = project.demoPath + cacheBuster;
  demoViewer.classList.add('active');
}

function closeDemo() {
  const demoViewer = document.getElementById('demoViewerOverlay');
  const demoIframe = document.getElementById('demoIframe');

  if (demoViewer) {
    demoViewer.classList.remove('active');
  }
  if (demoIframe) {
    demoIframe.src = '';
    demoIframe.classList.remove('loaded');
  }
}
