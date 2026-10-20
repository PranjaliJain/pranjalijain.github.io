(() => {
  // Preserve links to retained sections of the former one-page homepage.
  const sections = {
    news: 'news', awards: 'news', education: 'education', experience: 'experience',
    publications: 'publications', 'teaching-and-mentoring-experience': 'teaching',
    miscellaneous: 'art', art: 'art'
  };
  function redirectHomeSection() {
    const hash = location.hash.slice(1);
    if (sections[hash] && (location.pathname === '/' || location.pathname === '/index.html')) {
      location.replace(`${location.pathname.replace(/(?:index\.html)?$/, '')}${sections[hash]}/`);
    }
  }
  redirectHomeSection();
  window.addEventListener('hashchange', redirectHomeSection);
})();
