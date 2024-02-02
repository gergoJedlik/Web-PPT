
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var menuButtonContainer = document.getElementById("menuButtonContainer");

    let screenWidth = screen.width;

    if (sidenav.style.width === "0px" || sidenav.style.width === "") {
      if (screenWidth >= 1200) {
        sidenav.style.width = "45%";
        menuButtonContainer.style.width = "45%";
      } else {
        sidenav.style.width = "85%";
        menuButtonContainer.style.left = "85%";
      }
    } else {
      sidenav.style.width = "0";
      menuButtonContainer.style.left = "0";
    }
  }

function activeContent() {
  const contentBox = document.getElementById("content");
  contentBox.innerHTML = ''
  contentBox.innerHTML += '<div id="temacim"><h1 class="text-center">Aktív Játékállapot</h1></div>';

  toggleNav()
}
// -------------jquery.load---------------

function nonactiveContent() {
  const contentBox = document.getElementById("content");
  contentBox.innerHTML = ''
  contentBox.innerHTML += '<div id="temacim"><h1 class="text-center">Nem Aktív Játékállapot</h1></div>';

  toggleNav()
}

function functionsContent() {
  const contentBox = document.getElementById("content");
  contentBox.innerHTML = ''
  contentBox.innerHTML += '<div id="temacim"><h1 class="text-center">Függvények</h1></div>';

  toggleNav()
}
