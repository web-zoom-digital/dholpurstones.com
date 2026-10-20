/**
 * DHOLPUR STONES - LUXURY NATURAL STONE ARCHITECTURE (ESTD. 1953)
 * Core Client Logic & Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header & Scroll Effects ---
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // --- 2. Mobile Drawer Navigation ---
  const hamburgerBtn = document.querySelector('.mobile-hamburger-btn');
  const navDrawer = document.querySelector('.mobile-nav-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileNav() {
    const isOpen = navDrawer.classList.contains('open');
    if (isOpen) {
      navDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
      hamburgerBtn.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      navDrawer.classList.add('open');
      drawerOverlay.classList.add('active');
      hamburgerBtn.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileNav);
  }
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', toggleMobileNav);
  }
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileNav();
    });
  });

  // --- 3. Active Nav Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- 4. Project Portfolio Filtering ---
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- 5. Operations Tab Switcher ---
  const opBtns = document.querySelectorAll('.op-tab-btn');
  const opPanels = document.querySelectorAll('.op-panel-content');

  opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      opBtns.forEach(b => b.classList.remove('active'));
      opPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = btn.getAttribute('data-target');
      const activePanel = document.getElementById(targetPanel);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });

  // --- 6. Stories / Link-in-Bio Modal Controller ---
  const storiesModal = document.getElementById('storiesModal');
  const openStoriesBtns = document.querySelectorAll('.trigger-stories-modal');
  const closeStoriesBtn = document.querySelector('.stories-close-btn');

  function openStories() {
    storiesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeStories() {
    storiesModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openStoriesBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openStories();
    });
  });

  if (closeStoriesBtn) {
    closeStoriesBtn.addEventListener('click', closeStories);
  }

  if (storiesModal) {
    storiesModal.addEventListener('click', (e) => {
      if (e.target === storiesModal) {
        closeStories();
      }
    });
  }

  // --- 7. Stories Accordion Pills ---
  const accordionPills = document.querySelectorAll('.stories-pill-accordion');

  accordionPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const contentId = pill.getAttribute('data-content');
      const content = document.getElementById(contentId);
      
      const isOpen = pill.classList.contains('active');
      
      // Close other accordions
      accordionPills.forEach(p => {
        p.classList.remove('active');
        const cId = p.getAttribute('data-content');
        const c = document.getElementById(cId);
        if (c) c.classList.remove('show');
      });

      if (!isOpen && content) {
        pill.classList.add('active');
        content.classList.add('show');
      }
    });
  });

  // --- 8. Tender / Inquiry Form Handling ---
  const inquiryForm = document.getElementById('stoneInquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = inquiryForm.querySelector('.btn-submit-inquiry');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'TRANSMITTING SPECIFICATION...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = '✓ SPECIFICATION TRANSMITTED';
        submitBtn.style.backgroundColor = '#008080';
        submitBtn.style.color = '#ffffff';
        alert('Thank you for your tender specification inquiry. Our Architectural Stone Contracting Desk (Estd. 1953) will review your drawing schedule and reach out within 24 hours.');
        inquiryForm.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }

  // --- 9. Material Column Card Click Action ---
  const materialCards = document.querySelectorAll('.material-column-card');
  materialCards.forEach(card => {
    card.addEventListener('click', () => {
      const materialName = card.querySelector('.material-column-title').textContent.trim();
      const stoneSelect = document.getElementById('stoneTypeSelect');
      if (stoneSelect) {
        // Scroll to form and preselect
        document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' });
        for (let i = 0; i < stoneSelect.options.length; i++) {
          if (stoneSelect.options[i].text.includes(materialName.split(' ')[0])) {
            stoneSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });
});
