function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.classList.add('active');
  }
}
