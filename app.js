
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var menuButtonContainer = document.getElementById("menuButtonContainer");

    if (sidenav.style.width === "0px" || sidenav.style.width === "") {
      sidenav.style.width = "90%";
      menuButtonContainer.style.left = "90%";
    } else {
      sidenav.style.width = "0";
      menuButtonContainer.style.left = "0";
    }
  }
