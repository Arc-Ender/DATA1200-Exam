// Adapted from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
// Initialize previous scroll position
var prevScrollpos = window.scrollY;

// Event listener for scrolling
window.onscroll = function() {
  // Get the current scroll position
  var currentScrollPos = window.scrollY;
  
  // If the user is scrolling up, show the navbar; if scrolling down, hide it
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0"; // Show navbar
  } else {
    document.getElementById("navbar").style.top = "-20rem"; // Hide navbar (adjust - 20rem based on your navbar height)
  }
  
  // Update the previous scroll position to the current position
  prevScrollpos = currentScrollPos;
};
