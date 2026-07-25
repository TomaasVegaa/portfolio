/* Entry Point Principal JS - Portfolio Lorena Jerez */

import { initModal } from './modules/modal.js';
import { initVideoPlayer } from './modules/video-player.js';
import { initFilter } from './modules/filter.js';
import { initContact } from './modules/contact.js';
import { initTerminalDemo } from './modules/terminal-demo.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize All Modules
  initModal();
  initVideoPlayer();
  initFilter();
  initContact();
  initTerminalDemo();

  // 1. Sticky Header & Active Nav Link Observer
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Nav Toggle Drawer
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Scroll Reveal Observer for Micro-interactions
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Laptop Mockup Slideshow (Hero)
  const laptopSlides = document.querySelectorAll('.laptop-slide');
  if (laptopSlides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      laptopSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % laptopSlides.length;
      laptopSlides[currentSlide].classList.add('active');
    }, 3500); // Change image every 3.5 seconds
  }
});
