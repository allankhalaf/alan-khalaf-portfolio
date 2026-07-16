// remove-duplicate-sections.js
// This script removes duplicate sections that appear twice on the page

export function removeDuplicateSections() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // List of section headings to check for duplicates
    const sectionHeadings = [
      'Development Services',
      'Translation Services',
      'Technical Skills',
      'Academic Background',
      'Making a Difference',
      'My Projects',
      'Professional Translation',
      'Who I Am'
    ];

    // Find all sections
    const sections = document.querySelectorAll('section');
    const seenHeadings = new Set();

    sections.forEach((section) => {
      // Get the heading text (h2, h3, or element with section-title class)
      const heading = section.querySelector('h2, h3, .section-title, [class*="title"]');

      if (heading) {
        const headingText = heading.textContent.trim();

        // Check if this heading has been seen before
        if (seenHeadings.has(headingText)) {
          // Hide the duplicate section
          section.style.display = 'none';
          console.log(`Removed duplicate section: ${headingText}`);
        } else {
          seenHeadings.add(headingText);
        }
      }
    });

    // Also fix section gaps
    fixSectionGaps();
  }

  function fixSectionGaps() {
    // Get all visible sections
    const visibleSections = Array.from(document.querySelectorAll('section')).filter(
      (s) => s.style.display !== 'none' && window.getComputedStyle(s).display !== 'none'
    );

    // Remove any empty elements between sections
    visibleSections.forEach((section, index) => {
      if (index < visibleSections.length - 1) {
        let nextElement = section.nextElementSibling;

        while (nextElement && nextElement.tagName !== 'SECTION') {
          // If it's an empty div, remove it
          if (nextElement.tagName === 'DIV' && !nextElement.innerHTML.trim()) {
            const toRemove = nextElement;
            nextElement = nextElement.nextElementSibling;
            toRemove.remove();
          } else {
            nextElement = nextElement.nextElementSibling;
          }
        }
      }
    });
  }
}

// Auto-run when imported
removeDuplicateSections();

// Also run on route changes (for SPA)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(removeDuplicateSections, 100);
  }
}).observe(document, { subtree: true, childList: true });
