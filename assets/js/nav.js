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
          <li><a href="/blog/">Blog</a></li>
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

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Dropdown hover for desktop
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    drop.addEventListener('mouseenter', () => drop.classList.add('active'));
    drop.addEventListener('mouseleave', () => drop.classList.remove('active'));
  });
});
