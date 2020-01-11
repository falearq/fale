
 export async function theme(){
 let themeBtn = document.getElementById("theme-btn");
   
   
 
 async function lightMode() {
  document.documentElement.classList.remove("dark-mode");
  themeBtn.querySelector("div").classList.remove('sol');
  themeBtn.querySelector("div").classList.add('luna');
}

 async function darkMode() {
  document.documentElement.classList.add("dark-mode");
  themeBtn.querySelector("div").classList.add('sol');
  themeBtn.querySelector("div").classList.remove('luna');
}

themeBtn.addEventListener('click', (e) => {
  //alert("funciona");
  //document.body.classList.toggle("dark-mode"); //aplica al body
  //document.documentElement.classList.toggle("dark-mode"); //aplica al html
  //themeBtn.querySelector("i").classList.toggle('fa-sun');
  //themeBtn.querySelector("i").classList.toggle('fa-moon');

  if (themeBtn.querySelector("div").classList.contains("sol")) {
    localStorage.setItem("theme", "light");
    lightMode();
  } else {
    localStorage.setItem("theme", "dark");
    darkMode();
  }
}); 
document.addEventListener("DOMContentLoaded", (e) => {
  
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
    lightMode();
  }

  if (localStorage.getItem("theme") === "light") {
    lightMode();
  }

  if (localStorage.getItem("theme") === "dark") {
    darkMode();
  }
})

};   