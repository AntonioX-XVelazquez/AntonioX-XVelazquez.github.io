function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.classList.contains('hidden')) {
      section.style.display = 'block';  
      section.classList.remove('hidden');
    } else {
      section.style.display = 'none';  
      section.classList.add('hidden');
    }
  }