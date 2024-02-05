
let btn = document.querySelector(".header-menu-toggle");
btn.addEventListener('click', (e) => {
  e.preventDefault();

  let activ = document.querySelector(".header-nav-mobile");
  
  activ.classList.toggle('activ')

});

