function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.classList.add('active');
  }
}

// Expand project cards on click (for mobile)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
