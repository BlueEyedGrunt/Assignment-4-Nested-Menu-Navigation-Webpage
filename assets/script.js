// assets/script.js
// Handles expanding/collapsing subject cards to reveal nested topics on the homepage.
// The homepage loads with all sections collapsed. Clicking a 'View topics' button toggles the list.
// If navigated from a topic page's Back button, we still start collapsed by default.

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-toggle]');
  toggles.forEach(btn => {
    const targetId = btn.getAttribute('data-toggle');
    const target = document.getElementById(targetId);
    if (!target) return;
    btn.addEventListener('click', () => {
      const isHidden = target.classList.contains('hidden');
      // Collapse all lists first (accordion-like for clarity on mobile)
      document.querySelectorAll('.topic-list').forEach(list => list.classList.add('hidden'));
      if (isHidden) target.classList.remove('hidden'); else target.classList.add('hidden');
    });
  });
});