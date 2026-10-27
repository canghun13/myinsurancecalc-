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
      <div class="ft-top">
        <a href="/" class="logo">My Insurance Calc</a>
        <nav class="ft-nav" aria-label="Footer">
          <a href="/tools/">Calculators</a>
          <a href="/states/">State guides</a>
          <a href="/blog/">Guides</a>
          <a href="/about.html">About</a>
          <a href="/privacy.html">Privacy policy</a>
          <a href="/contact.html">Contact</a>
        </nav>
      </div>
      <div class="ft-bottom">
        <p class="ft-note">Estimates and guides are for information only and are not insurance, legal or tax advice. Rules and prices change, so confirm details with your state insurance department or a licensed agent.</p>
        <p class="ft-copy">&copy; ${new Date().getFullYear()} MyInsuranceCalc.com</p>
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
