onLoad()
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



function onLoad() {
  openFirstAccordion()
}

function openFirstAccordion() {
  const accordionContent = document.querySelectorAll('.accordion-content')
  
  accordionContent.forEach((item, index) => {
    if (index == 0) {
      item.classList.add('open')

      let description = item.querySelector('.description')
      description.style.height = `${description.scrollHeight}px`
      item.querySelector('i').classList.replace('fa-plus', 'fa-minus')
    }
  })
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
      // Opening the job card
      header.classList.remove('closed')

      description.style.height = `${description.scrollHeight}px`
      item.querySelector('i').classList.replace('fa-plus', 'fa-minus')
    } else {
      // Closing the job card
      header.classList.add('closed')

      description.style.height = '0px'
      item.querySelector('i').classList.replace('fa-minus', 'fa-plus')

      let detailsSection = item.querySelector('.extra-details')
      detailsSection.classList.add('hide')
    }

    removeOpen(item)
  })
}

function removeOpen(inputItem) {
  accordionContent.forEach((item, index) => {
    if (inputItem != item) {
      item.classList.remove('open')

      let header = item.querySelector('.header')
      header.classList.add('closed')

      let description = item.querySelector('.description')
      description.style.height = '0px'
      item.querySelector('i').classList.replace('fa-minus', 'fa-plus')
    }
  })
}


const detailsButtons = document.querySelectorAll('.details-button')
detailsButtons.forEach(item => {
  item.addEventListener('click', () => {
    let detailsSection = item.querySelector('.extra-details')
    const detailsSectionHeight = detailsSection.scrollHeight
    detailsSection.classList.toggle('hide')

    // Adjust the height of the corresponding job card
    const descriptionSections = document.querySelectorAll('.description')
    descriptionSections.forEach(description => {
      if (description.id == item.id) {
        if (detailsSection.classList.contains('hide')) {
          const newHeight = description.scrollHeight - detailsSectionHeight
          description.style.height = `${newHeight}px`
        } else {
          description.style.height = `${description.scrollHeight}px`
        }
      }
    })
  })
})
