var backgroundImg = document.querySelector(".background-img");

  window.addEventListener("scroll", function(e) {
    e.preventDefault();
    var scrollPosition = window.scrollY;

    
    var translation = (8 * scrollPosition) / window.innerHeight; 

    backgroundImg.style.transform = "translateX(" + translation + "%)";
    
  });