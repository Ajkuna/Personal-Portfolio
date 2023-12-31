onLoad()
createStars()

window.addEventListener('resize', () => {
  let starsList = document.querySelectorAll('.star')
  if (starsList.length > 0) {
    starsList.forEach(star => star.remove())
  }
  createStars()
})

// Create random stars for landing page background with random brighness and animation
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
    star.style.width = 1.5 + size + 'px'
    star.style.height = 1.5 + size + 'px'
    star.style.opacity = size / 2

    star.style.animationDuration = 5 + duration + 's'
    star.style.animationDelay = duration + 's'

    scene.appendChild(star)
    i++
  }
}



function onLoad() {
  openFirstAccordion()
}

// Open the first job card in the Experience section on page load
function openFirstAccordion() {
  const accordionContent = document.querySelectorAll('.accordion-content')
  accordionContent[0].classList.add('open')

  let description = accordionContent[0].querySelector('.description')
  description.style.height = `${description.scrollHeight}px`
  accordionContent[0].querySelector('i').classList.replace('fa-plus', 'fa-minus')
}

const accordionContent = document.querySelectorAll('.accordion-content')
accordionContent.forEach((item, index) => {
  handleAccordion(item, index)
})

// Opens/closes clicked accordion and changes properties within it
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

// Closes all the job cards who haven't been opened
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

// Toggle the extra details sections in the job cards
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



// Sticky Navbar logic
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar')
  const scrollButton = document.querySelector('.scroll-up')

  if (window.scrollY > (window.innerHeight - 25)) {
    navbar.classList.add('sticky-navbar')
    scrollButton.style.display = 'block'
    scrollButton.style.visibility = 'visible'
  } else {
    navbar.classList.remove('sticky-navbar')
    scrollButton.style.display = 'none'
    scrollButton.style.visibility = 'hidden'
  }
})

let globalTimeout = null


// Email Popup
function copyEmailToClipboard() {
  const emailPopup = document.querySelector('.email-popup')
  emailPopup.style.display = 'block'
  emailPopup.style.visibility = 'visible'

  clearTimeout(globalTimeout)
  globalTimeout = setTimeout(() => {
    closeEmailPopup()
  }, '10000')
}

function closeEmailPopup() {
  const emailPopup = document.querySelector('.email-popup')
  emailPopup.style.display = 'none'
  emailPopup.style.visibility = 'hidden'
}



// Open Project Modals
function openProjectModal(item) {
  const projectName = item.id
  console.log('project ID: ' + projectName)

  const pageMask = document.querySelector('.page-mask')
  pageMask.style.display = 'block'
  pageMask.style.visibility = 'visible'

  const projectModals = document.querySelectorAll('.project-modal')
  projectModals.forEach(modal => {
    if (modal.id == projectName) {
      modal.style.display = 'block'
      modal.style.visibility = 'visible'
    } else {
      modal.style.display = 'none'
      modal.style.visibility = 'hidden'
    }
  })
}

// Close Project Modals
function closeProjectModals() {
  const projectModals = document.querySelectorAll('.project-modal')
  projectModals.forEach(modal => {
    modal.style.display = 'none'
    modal.style.visibility = 'hidden'
  })

  const pageMask = document.querySelector('.page-mask')
  pageMask.style.display = 'none'
  pageMask.style.visibility = 'hidden'
}



// Open Mobile Menu
function openMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-navbar')
  mobileMenu.style.display = 'block'
  mobileMenu.style.visibility = 'visible'
}

// Close Mobile Menu
function closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-navbar')
  mobileMenu.style.display = 'none'
  mobileMenu.style.visibility = 'hidden'
}