// Google Analytics
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TB2KNRH23W';
  document.head.appendChild(script);
})();
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TB2KNRH23W');

document.addEventListener('DOMContentLoaded', function () {
  const nav = `
  <header class="site-header">
    <div class="container">
      <a href="/" class="logo">My Insurance Calc</a>
      <nav class="site-nav">
        <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
        <ul class="nav-links">
          <li><a href="/tools/" id="nav-tools">Tools</a></li>
          <li><a href="/states/" id="nav-states">States</a></li>
          <li><a href="/blog/" id="nav-blog">Blog</a></li>
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
          <h4>Tools</h4>
          <ul>
            <li><a href="/tools/life-insurance.html">Life Insurance</a></li>
            <li><a href="/tools/term-vs-whole.html">Term vs Whole Life</a></li>
            <li><a href="/tools/life-insurance-seniors.html">Life Insurance for Seniors</a></li>
            <li><a href="/tools/long-term-care-insurance.html">Long-Term Care Insurance</a></li>
            <li><a href="/tools/disability.html">Disability Insurance</a></li>
            <li><a href="/tools/home-insurance.html">Home Insurance</a></li>
            <li><a href="/tools/renters-insurance.html">Renters Insurance</a></li>
            <li><a href="/tools/dwelling-coverage.html">Dwelling Coverage</a></li>
            <li><a href="/tools/umbrella-insurance.html">Umbrella Insurance</a></li>
            <li><a href="/tools/health-insurance-self-employed.html">Health Insurance (Self-Employed)</a></li>
            <li><a href="/tools/pet-insurance.html">Pet Insurance</a></li>
            <li><a href="/tools/freelancer-insurance.html">Freelancer Insurance</a></li>
            <li><a href="/tools/ev-insurance.html">EV Insurance</a></li>
            <li><a href="/tools/car-insurance.html">Car Insurance</a></li>
            <li><a href="/tools/sr22-insurance.html">SR-22 Insurance</a></li>
            <li><a href="/tools/motorcycle-insurance.html">Motorcycle Insurance</a></li>
            <li><a href="/tools/travel-insurance.html">Travel Insurance</a></li>
            <li><a href="/tools/boat-insurance.html">Boat Insurance</a></li>
            <li><a href="/tools/business-insurance.html">Business Insurance</a></li>
            <li><a href="/tools/" style="font-weight:600;">View All Tools →</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>States</h4>
          <ul>
            <li><a href="/states/car-insurance/">Car Insurance by State</a></li>
            <li><a href="/states/home-insurance/">Home Insurance by State</a></li>
            <li><a href="/states/life-insurance/">Life Insurance by State</a></li>
            <li><a href="/states/health-insurance/">Health Insurance by State</a></li>
            <li><a href="/states/workers-comp/">Workers Comp by State</a></li>
            <li><a href="/states/" style="font-weight:600;">View All States →</a></li>
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

  const currentPath = window.location.pathname;

  // Home active
  if (currentPath === '/' || currentPath === '/index.html') {
    const homeLink = document.querySelector('.nav-links > li > a[href="/"]');
    if (homeLink) homeLink.classList.add('nav-active');
  }

  // Tools active
  if (currentPath.startsWith('/tools/')) {
    const toolsLink = document.getElementById('nav-tools');
    if (toolsLink) toolsLink.classList.add('nav-active');
  }

  // States active
  if (currentPath.startsWith('/states/')) {
    const statesLink = document.getElementById('nav-states');
    if (statesLink) statesLink.classList.add('nav-active');
  }

  // Blog active
  if (currentPath.startsWith('/blog/') || currentPath === '/blog') {
    const blogLink = document.getElementById('nav-blog');
    if (blogLink) blogLink.classList.add('nav-active');
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
});
