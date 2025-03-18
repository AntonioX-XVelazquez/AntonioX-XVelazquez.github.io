function toggleSection(sectionId) {

    const sections = document.querySelectorAll('div[id^="section"]');
    sections.forEach((section) => {
      section.classList.add('hidden');
    });

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
  }

  window.onload = function() {
    toggleSection('section1');
  };