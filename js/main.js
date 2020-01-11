  import { theme } from "./theme.js";
  import { navbarResponsive } from "./navbar.js";
  import { videoResponsive } from "./video.js";
  import { about } from "./slide.js";


  let $aboutBtn = document.getElementById("about-btn"),
      $contenido = document.querySelector(".contenido");

   theme();
   navbarResponsive();
    window.addEventListener("load", (e) => {
      videoResponsive();
    });
    window.addEventListener("resize", (e) => {
      videoResponsive();
    });
    

		
   

    $aboutBtn.addEventListener("click", async e => {
      e.preventDefault();
      $contenido.innerHTML = await about();
    });
  
    
    