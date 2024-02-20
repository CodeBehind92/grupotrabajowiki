function showSection(sectionId) {
  // Oculta todas las secciones
  var sections = document.querySelectorAll('.content > div');
  sections.forEach(function(section) {
      section.classList.add('hidden');
  });

  // Muestra la sección seleccionada
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.classList.remove('hidden');
  }
}