createStars()

function createStars() {
  let count = 250
  let scene = document.querySelector('body')
  let i = 0

  while (i < count) {
    let star = document.createElement('i')
    star.classList.add('star')
    let x = Math.floor(Math.random() * (window.innerWidth - 25))
    let y = Math.floor(Math.random() * (window.innerHeight - 5))
    let duration = Math.random() * 10
    let size = Math.random() * 2

    star.style.left = x + 'px'
    star.style.top = y + 'px'
    star.style.width = 1 + size + 'px'
    star.style.height = 1 + size + 'px'
    star.style.animationDuration = 5 + duration + 's'
    star.style.animationDelay = duration + 's'

    scene.appendChild(star)
    i++
  }
}

