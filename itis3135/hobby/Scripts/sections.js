function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      section.classList.add('hidden');
    });

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
  }


  window.onload = function() {
    toggleSection('What');};