
const home = document.querySelector('[data-js="home"]');

const bookmark = document.querySelector ('[data-js="bookmark"]');

const profile = document.querySelector ('[data-js="profile"]');

home.addEventListener("click", () => {
  home.classList.add("marked-current");
});