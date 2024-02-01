
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

function activeContent() {
  const contentBox = document.getElementById("content");
  contentBox.innerHTML = ''
  contentBox.innerHTML += '<div id="temacim"><h1 class="text-center">Aktív Játékállapot</h1></div>';

  toggleNav()
}

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
