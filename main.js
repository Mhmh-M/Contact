let center = document.querySelector(".center");
let social = document.querySelectorAll('.social');

center.addEventListener('click', () => {
  social.forEach((e) => {
    e.classList.toggle('rotate')
  })
  social.classList.remove("rotate")

}
)