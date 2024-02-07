$(document).ready(function () {
  $('#aktiv').click(function () {
    $('#content').html('');
    $('#content').load('aktiv_data.html')

    toggleNav()
  })

  $('#nemaktiv').click(function () {
    $('#content').html('');
    $('#content').load('nemaktiv_data.html')

    toggleNav()
  })

  $('#fuggvenyek').click(function () {
    $('#content').html('');
    $('#content').load('fuggvenyek_data.html')

    toggleNav()
  })
});


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
