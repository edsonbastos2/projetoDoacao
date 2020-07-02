const btn = document.querySelector('[data-modal="click"]');
const modal = document.querySelector('#modal');
const close = document.querySelector('#modal .header a')
console.log(btn)

function handleClick(event) {
  event.preventDefault()
  modal.classList.toggle('hide')
}

function cliqueFora(event) {
  if (event.target === this) {
    handleClick(event)
  }
}

btn.addEventListener('click', handleClick)
close.addEventListener('click', handleClick)
modal.addEventListener('click', cliqueFora)