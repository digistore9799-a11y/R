// Digi Store - High-Tech Modern Script
// Telegram Bot: @Digistore5_bot | Support: @Alirezadaneshman
// Developer: علیرضا دانشمند

const BOT_USERNAME = "Digistore5_bot";
const BOT_URL = "https://t.me/" + BOT_USERNAME;
const SUPPORT_USERNAME = "Alirezadaneshman";
const SUPPORT_URL = "https://t.me/" + SUPPORT_USERNAME;

// Logos SVG constants
const ICONS = {
  instagram: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  telegram: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.196 1.006.128.832.926z"/></svg>`,
  bomb: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M11.25 4.533V3a.75.75 0 011.5 0v1.533C17.78 5.093 21 8.877 21 13.5c0 4.97-4.03 9-9 9s-9-4.03-9-9c0-4.623 3.22-8.407 8.25-8.967zM12 7.5a6 6 0 100 12 6 6 0 000-12zm6.22-4.72a.75.75 0 011.06 0l1.5 1.5a.75.75 0 11-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm-13.5 0a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 01-1.06-1.06l1.5-1.5a.75.75 0 011.06 0z"/></svg>`,
  v2ray: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm-8 8.5v6.5l8 4.5 8-4.5V10.5l-8 4-8-4z"/></svg>`,
  bot: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 18h8v-1H8v1z"/></svg>`,
  code: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 4v12h16V7H4zm4.707 3.293a1 1 0 010 1.414L6.414 14l2.293 2.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm6.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L17.586 14l-2.293-2.293a1 1 0 010-1.414z"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  initFilters();
  initModalEvents();
});

// Navbar scroll & mobile menu
function initNavbar() {
  const header = document.getElementById("main-header");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Scroll reveal animations
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => observer.observe(el));
}

// Category filter
function initFilters() {
  const filterBtns = document.querySelectorAll("[data-filter]");
  const productCards = document.querySelectorAll("[data-category]");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.className = "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 bg-white/5 border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105";
      });
      btn.className = "px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:scale-105";

      const filter = btn.getAttribute("data-filter");
      productCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          setTimeout(() => { card.style.opacity = "1"; }, 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Modal handling
function openTelegramModal(serviceTitle, serviceDesc, iconType) {
  const modal = document.getElementById("telegram-connect-modal");
  if (!modal) {
    window.open(BOT_URL, "_blank");
    return;
  }

  document.getElementById("modal-service-title").textContent = serviceTitle;
  document.getElementById("modal-service-desc").textContent = serviceDesc || "برای اطلاع از لیست قیمت‌ها، تعرفه‌های تخفیفی و خرید آنی به ربات رسمی تلگرام متصل شوید.";
  
  const iconContainer = document.getElementById("modal-service-icon-container");
  if (iconContainer && ICONS[iconType]) {
    iconContainer.innerHTML = ICONS[iconType];
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeTelegramModal() {
  const modal = document.getElementById("telegram-connect-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Make functions globally accessible for inline HTML onclick handlers
window.openTelegramModal = openTelegramModal;
window.closeTelegramModal = closeTelegramModal;

function initModalEvents() {
  const modal = document.getElementById("telegram-connect-modal");
  const closeBtn = document.getElementById("close-telegram-modal");
  const directBtn = document.getElementById("modal-connect-bot-btn");
  const supportBtn = document.getElementById("modal-connect-support-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeTelegramModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeTelegramModal();
      }
    });
  }

  if (directBtn) {
    directBtn.addEventListener("click", () => {
      window.open(BOT_URL, "_blank");
      closeTelegramModal();
    });
  }

  if (supportBtn) {
    supportBtn.addEventListener("click", () => {
      window.open(SUPPORT_URL, "_blank");
      closeTelegramModal();
    });
  }
}
