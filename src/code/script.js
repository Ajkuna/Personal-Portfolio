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


const accordionContent = document.querySelectorAll('.accordion-content')
accordionContent.forEach((item, index) => {
  handleAccordion(item, index)
})

function handleAccordion(item, index) {
  let header = item.querySelector('.header')
  header.addEventListener('click', () => {
    item.classList.toggle('open')

    let description = item.querySelector('.description')
    if (item.classList.contains('open')) {
      header.classList.remove('open')

      description.style.height = `${description.scrollHeight}px`
      item.querySelector('i').classList.replace('fa-plus', 'fa-minus')
    } else {
      header.classList.add('open')

      description.style.height = '0px'
      item.querySelector('i').classList.replace('fa-minus', 'fa-plus')
    }

    removeOpen(index)
  })
}

function removeOpen(inputIndex) {
  accordionContent.forEach((item, index) => {
    if (inputIndex != index) {
      item.classList.remove('open')

      let description = item.querySelector('.description')
      description.style.height = '0px'
      item.querySelector('i').classList.replace('fa-minus', 'fa-plus')
    }
  })
}


const detailsButtons = document.querySelectorAll('.details-button')
detailsButtons.forEach((item, index) => {
  item.addEventListener('click', () => {
    let detailsSection = item.querySelector('.extra-details')
    detailsSection.classList.toggle('hide')
  })
})
