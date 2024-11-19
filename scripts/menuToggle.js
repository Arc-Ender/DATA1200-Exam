const menuToggleCheckbox = document.getElementById('menu-toggle-checkbox')
const navMenu = document.querySelector('nav ul')

menuToggleCheckbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Prevent scrolling when Space is pressed
      e.preventDefault();

      // Toggle the menu's state
      menuToggleCheckbox.checked = !menuToggleCheckbox.checked;

      // Update `aria-expanded` based on the menu state
      menuToggleCheckbox.setAttribute(
        'aria-expanded',
        menuToggleCheckbox.checked ? 'true' : 'false'
      );

      // If menu is open, move focus to the first link
      if (menuToggleCheckbox.checked) {
        const firstLink = navMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggleCheckbox.checked) {
      menuToggleCheckbox.checked = false;
      menuToggleCheckbox.setAttribute('aria-expanded', 'false');
    }
  });

  // Keep focus within the menu when open
  const focusableElements = navMenu.querySelectorAll('a');
  navMenu.addEventListener('keydown', (e) => {
    if (!menuToggleCheckbox.checked) return; // Only apply when menu is open

    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % focusableElements.length;
      focusableElements[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
      focusableElements[prevIndex].focus();
    }
  });