const sections = document.querySelectorAll("section");

sections.forEach(section => {
  const id = section.id;
  const text = section.dataset.nav;

  const a = document.createElement("a");

  // Link HREF
  a.href = "#" + id;

  // JS Scroll
  // a.onclick = () => {
  //   document.getElementById()
  // }

  a.textContent = text;
  a.className = "menu__link";
  a.id = id + "-nav";

  document.getElementById("navbar__list").appendChild(a);
  section.onfocus = () => console.log(id);
});

// document.querySelector('nav').scrollIntoView({
//   behavior: 'smooth'
// });

// Scrolling Hide
let timeout;
window.addEventListener("scroll", () => {
  clearTimeout(timeout);

  const navigationbar = document.querySelector("nav");
  navigationbar.style.display = "block";

  timeout = setTimeout(() => {
    navigationbar.style.display = "none";
  }, 2000);
});

const btnToTop = document.querySelector("#btnToTop");

btnToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

links = document.querySelectorAll("a")
window.onhashchange = function(){
  links.forEach (link => {
   link.classList.remove("uactive")
   })
  aObject = document.getElementById(window.location.hash.split("#")[1] + "-nav")
  aObject.classList.add("uactive")
}

window.onhashchange = function(){
  sections.forEach(section =>{
    section.classList.remove("your-active-class");
  })
  sectionBody = document.getElementById(window.location.hash.split("#")[1]);
  sectionBody.classList.add("your-active-class")
}
