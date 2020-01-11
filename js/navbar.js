export function navbarResponsive() {
        let mq576 = window.matchMedia("(max-width: 576px)"),
          navbar = document.getElementById("logotipo");
  
        if (mq576.matches) {
          navbar.removeAttribute("src");
          navbar.setAttribute("src","img/isotipo.svg");
          
        } else {
          navbar.removeAttribute("src");
          navbar.setAttribute("src","img/logotipo.svg");
        }
      };
      window.addEventListener("load", (e) => {
        navbarResponsive();
      });
  
      window.addEventListener("resize", (e) => {
        navbarResponsive();
      });
