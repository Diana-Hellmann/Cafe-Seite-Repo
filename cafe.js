
// Hamburger und Navi auswählen
const hamburger = document.getElementById('hamburger');
const navi = document.getElementById('navi');
//px Wert angeben, em x 16
const desktopBreakpoint = 656;


// Beim Klicken: Klasse "open" hinzufügen oder entfernen
hamburger.addEventListener('click', () => {
  navi.classList.toggle('open');
});

// Überwachen, ob das Fenster größer wird
window.addEventListener('resize', () => {
  if (window.innerWidth > desktopBreakpoint) {
    // Entferne die Klasse "open", wenn das Fenster groß genug ist
    navi.classList.remove('open');
  }
});


















