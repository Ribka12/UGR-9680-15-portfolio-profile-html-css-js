
  // For nav-menu
const hamburger = document.querySelector(".hamburger-icon");
const dropdownMenu = document.querySelector(".drop");


hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("open"); 
   dropdownMenu.classList.toggle("open"); 
});


document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
        hamburger.classList.remove("open");
        dropdownMenu.classList.remove("open");
    }
});





/* Video play */
function playVideo() {
  var video = document.getElementById('myVideo');
  var playButton = document.querySelector('.play-button');

  video.play();
  playButton.style.display = 'none';

  video.controls = true;
}


/*show menu*/
document.addEventListener("DOMContentLoaded", function() {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownList = document.getElementById("dropdown-list");

  
  dropdownButton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    dropdownList.style.display = (dropdownList.style.display === "block") ? "none" : "block";
  });

 
  window.addEventListener("click", function(event) {
    if (!dropdownButton.contains(event.target)) {
      dropdownList.style.display = "none";
    }
  });
});
