document.addEventListener('DOMContentLoaded', function () {
  const nav = `
  <header class="site-header">
    <div class="container">
      <a href="/" class="logo">My Insurance Calc</a>
      <nav class="site-nav">
        <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li class="dropdown">
            <a href="#">Calculators ▾</a>
            <ul class="dropdown-menu">
              <li><a href="/tools/life-insurance.html">Life Insurance Calculator</a></li>
              <li><a href="/tools/term-vs-whole.html">Term vs Whole Life</a></li>
              <li><a href="/tools/disability.html">Disability Insurance</a></li>
              <li><a href="/tools/home-insurance.html">Home Insurance</a></li>
              <li><a href="/tools/renters-insurance.html">Renters Insurance</a></li>
              <li><a href="/tools/umbrella-insurance.html">Umbrella Insurance</a></li>
              <li><a href="/tools/health-insurance-self-employed.html">Health Insurance (Self-Employed)</a></li>
              <li><a href="/tools/pet-insurance.html">Pet Insurance</a></li>
              <li><a href="/tools/freelancer-insurance.html">Freelancer Insurance</a></li>
              <li><a href="/tools/ev-insurance.html">EV Insurance</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/blog/">Blog ▾</a>
            <ul class="dropdown-menu" style="min-width:260px;">
              <li style="padding:6px 12px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);">Life Insurance</li>
              <li><a href="/blog/how-much-life-insurance-do-i-need.html">How Much Do I Need?</a></li>
              <li><a href="/blog/term-vs-whole-life-insurance.html">Term vs Whole Life</a></li>
              <li><a href="/blog/life-insurance-for-pilots.html">Life Insurance for Pilots</a></li>
              <li><a href="/blog/life-insurance-after-cancer.html">Life Insurance After Cancer</a></li>
              <li style="padding:6px 12px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:4px;">Freelancer / Gig</li>
              <li><a href="/blog/freelancer-insurance-guide.html">Freelancer Insurance Guide</a></li>
              <li><a href="/blog/insurance-for-gig-workers.html">Insurance for Gig Workers</a></li>
              <li style="padding:6px 12px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:4px;">Auto</li>
              <li><a href="/blog/ev-insurance-cost.html">Why EVs Cost More to Insure</a></li>
              <li><a href="/blog/how-to-lower-car-insurance.html">How to Lower Car Insurance</a></li>
              <li style="padding:6px 12px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:4px;">Other</li>
              <li><a href="/blog/disability-insurance-guide.html">Disability Insurance Guide</a></li>
              <li><a href="/blog/pet-insurance-worth-it.html">Is Pet Insurance Worth It?</a></li>
              <li><a href="/blog/umbrella-insurance-explained.html">Umbrella Insurance Explained</a></li>
              <li style="border-top:1px solid var(--border);margin-top:4px;"><a href="/blog/" style="font-weight:600;">View All Articles →</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo">My Insurance Calc</a>
          <p>Free insurance calculators — no signup, no fees, instant results.</p>
        </div>
        <div class="footer-links">
          <h4>Calculators</h4>
          <ul>
            <li><a href="/tools/life-insurance.html">Life Insurance</a></li>
            <li><a href="/tools/term-vs-whole.html">Term vs Whole Life</a></li>
            <li><a href="/tools/disability.html">Disability Insurance</a></li>
            <li><a href="/tools/home-insurance.html">Home Insurance</a></li>
            <li><a href="/tools/renters-insurance.html">Renters Insurance</a></li>
            <li><a href="/tools/umbrella-insurance.html">Umbrella Insurance</a></li>
            <li><a href="/tools/pet-insurance.html">Pet Insurance</a></li>
            <li><a href="/tools/freelancer-insurance.html">Freelancer Insurance</a></li>
            <li><a href="/tools/ev-insurance.html">EV Insurance</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Site</h4>
          <ul>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} MyInsuranceCalc.com &middot; <a href="/privacy.html">Privacy</a> &middot; <a href="/contact.html">Contact</a></p>
        <p class="disclaimer">This site provides estimates for informational purposes only. Always consult a licensed insurance professional.</p>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Active state highlighting
  const currentPath = window.location.pathname;

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    const isActive = linkPath === currentPath || (linkPath !== '/' && currentPath.startsWith(linkPath));

    if (isActive) {
      link.classList.add('nav-active');
      // Also highlight parent dropdown toggle
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const parentToggle = parentDropdown.querySelector(':scope > a');
        if (parentToggle) parentToggle.classList.add('nav-active');
      }
    }
  });

  // Home link active
  if (currentPath === '/') {
    const homeLink = document.querySelector('.nav-links > li > a[href="/"]');
    if (homeLink) homeLink.classList.add('nav-active');
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Dropdown: hover desktop / click mobile
  document.querySelectorAll('.dropdown').forEach(drop => {
    const dropToggle = drop.querySelector(':scope > a');

    drop.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) drop.classList.add('active');
    });
    drop.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) drop.classList.remove('active');
    });

    if (dropToggle) {
      dropToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          drop.classList.toggle('active');
        }
      });
    }
  });
});
