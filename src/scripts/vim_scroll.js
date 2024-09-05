document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();
  const scrollAmount = 50; // Adjust this value to change scroll speed

  if (key === 'j') {
    // Scroll down
    window.scrollBy(0, scrollAmount);
  } else if (key === 'k') {
    // Scroll up
    window.scrollBy(0, -scrollAmount);
  }
});
