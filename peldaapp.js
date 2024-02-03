
function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  var menuButtonContainer = document.getElementById("menuButtonContainer");
  var screenWidth = screen.width;

  sidenav.classList.toggle("open");
  
  if (screenWidth >= 1200) {
      if (sidenav.style.width === "0px" || sidenav.style.width === "") {
          sidenav.style.width = "45%";
          menuButtonContainer.style.left = "45%";
      } else {
          sidenav.style.width = "0";
          menuButtonContainer.style.left = "0";
      }
  } else {
      if (sidenav.style.width === "0px" || sidenav.style.width === "") {
          sidenav.style.width = "85%";
          menuButtonContainer.style.left = "85%";
      } else {
          sidenav.style.width = "0";
          menuButtonContainer.style.left = "0";
      }
  }
}


function activeContent() {
  aktiv.style.display = "block";
  nemaktiv.style.display = "none";
  fuggvenyek.style.display = "none";
  content.style.display = "none";
  toggleNav()
}

function nonactiveContent() {
  aktiv.style.display = "none";
  nemaktiv.style.display = "block";
  fuggvenyek.style.display = "none";
  content.style.display = "none";
  toggleNav()
}

function functionsContent() {
  aktiv.style.display = "none";
  nemaktiv.style.display = "none";
  fuggvenyek.style.display = "block";
  content.style.display = "none";
  toggleNav()
}
