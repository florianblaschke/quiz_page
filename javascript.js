console.clear();

const marked = document.querySelector('[data-js="marked"]');

const bookmark = document.querySelector('[data-js="bookmark"]');

const profile = document.querySelector('[data-js="profile"]');

const bodyElement = document.querySelector('[data-js="body"]')

marked.addEventListener("click", () => {
  marked.classList.toggle("marked-current");
});