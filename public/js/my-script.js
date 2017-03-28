"use strict"

// Start Zurb Foundation
$(document).foundation();

//  Foundation reactive feature: rewrite top-bar in small media
$(window).resize(function() {
  var isSmallMedia = (Foundation.MediaQuery.current === "small");
  var dpnaElement = document.getElementById("dpnaText");
  if (dpnaElement === null) { return }
  if ( isSmallMedia ) {
    dpnaElement.innerHTML = "DPNA";
  } else {
      dpnaElement.innerHTML = "Deer Park Neighborhood Association";
  }
}); //end on-resize
