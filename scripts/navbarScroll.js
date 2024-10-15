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
    document.getElementById("navbar").style.top = "-6rem"; // Hide navbar (adjust -50px based on your navbar height)
  }
  
  // Update the previous scroll position to the current position
  prevScrollpos = currentScrollPos;
};
