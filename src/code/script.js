// Custom Cursor
const cursor = document.querySelector('.cursor')
const miniCursor = document.querySelector('.mini-cursor')

document.addEventListener('mousemove', event => {
  cursor.setAttribute("style", "top: " + (event.pageY - 14) + "px;" + 
                               "left: " + (event.pageX - 14) + "px;")

  miniCursor.setAttribute("style", "top: " + (event.pageY - 4) + "px;" + 
                                   "left: " + (event.pageX - 4) + "px;")
})



// Light/Dark Mode button logic
const body = document.querySelector('body')
const themeButton = document.querySelector('.theme-button')
const themeIcon = document.querySelector('.theme-icon')


// Making landing theme dependent on LocalStorage value
load()

function setThemeValue(value) {
  localStorage.setItem('lightMode', value)
}

function load() {
  const lightTheme = localStorage.getItem('lightMode')

  if (!lightTheme) {
    setThemeValue(false)
    themeIcon.classList.add('fa-moon')
  } else if (lightTheme == 'true') {
    body.classList.add('light-mode')
    themeIcon.classList.add('fa-sun')
  } else {
    themeIcon.classList.add('fa-moon')
  }

  // Set default skill section (about me)
  // const defaultSkill = 'languages'

  // const sectionTitles = document.querySelectorAll('.single-skill')
  // sectionTitles.forEach(title => {
  //   if (title.id == defaultSkill) {
  //     title.classList.add('skill-selected')
  //     title.style = 'font-size: 16px; font-weight: 600;'
  //   } else {
  //     title.classList.remove('skill-selected')
  //     title.style = 'font-size: 14px; font-weight: 500;'
  //   }
  // })

  // const sections = document.querySelectorAll('.skill-display')
  // sections.forEach(item => {
  //   item.style.display = item.id == defaultSkill ? 'block' : 'none'
  //   item.style.visibility = item.id == defaultSkill ? 'visible' : 'hidden'
  // })
}

themeButton.addEventListener('click', event => {
  console.log('Switching to dark mode')
  body.classList.toggle('light-mode')
  themeIcon.classList.add('animated')

  setThemeValue(body.classList.contains('light-mode'))

  if (body.classList.contains('light-mode')) {
    // setThemeValue(false)
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
  } else {
    // setThemeValue(true)
    themeIcon.classList.remove('fa-sun')
    themeIcon.classList.add('fa-moon')
  }

  setTimeout( () => {
    themeIcon.classList.remove('animated')
  }, 500)
})


// Skills Sections dynamic display
function displaySkillSection() {
  const selectedSection = event.target.id
  console.log('User selected: ' + selectedSection)

  const sectionTitles = document.querySelectorAll('.single-skill')
  sectionTitles.forEach(title => {
    if (title.id == selectedSection) {
      title.classList.add('skill-selected')
      title.style = 'font-size: 16px; font-weight: 600;'
    } else {
      title.classList.remove('skill-selected')
      title.style = 'font-size: 14px; font-weight: 500;'
    }
  })

  const sections = document.querySelectorAll('.skill-display')
  sections.forEach(item => {
    item.style.display = item.id == selectedSection ? 'block' : 'none'
    item.style.visibility = item.id == selectedSection ? 'visible' : 'hidden'
  })
}


// Job Cards
function handleJobCards() {
  console.log('Dealing with JOBS!')
  const selectedJob = event.target.id
  console.log('User selected this job: ' + selectedJob)
  let isJobOpen = false

  const iconsList = document.querySelectorAll('.inner-icon')
  iconsList.forEach(icon => {
    if (icon.id === selectedJob) {
      if (icon.classList.contains('fa-plus')) {
        isJobOpen = true
        icon.classList.remove('fa-plus')
        icon.classList.add('fa-minus')
      } else {
        icon.classList.remove('fa-minus')
        icon.classList.add('fa-plus')
      }
    } else {
      icon.classList.remove('fa-minus')
      icon.classList.add('fa-plus')
    }
  })

  const jobHeaders = document.querySelectorAll('.job-header')
  jobHeaders.forEach(item => {
    if (item.id === selectedJob && isJobOpen) {
      item.classList.add('open-header')
    } else {
      item.classList.remove('open-header')
    }
  })

  const jobCards = document.querySelectorAll('.job-card')
  jobCards.forEach(item => {
    if (item.id === selectedJob && isJobOpen) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}

function handleCardDetails() {
  const currentJob = event.target.id
  const moreDetails = document.querySelectorAll('.more-details')
  const detailsSections = document.querySelectorAll('.extra-info')
  let changeDetails = false

  detailsSections.forEach(item => {
    if (item.id == currentJob) {
      if (item.classList.contains('hide')) {
        item.classList.remove('hide')
        changeDetails = true
      } else {
        item.classList.add('hide')
      }
    }
  })

  moreDetails.forEach(item => {
    if (changeDetails) {
      item.innerHTML = 'Less Details'
    } else {
      item.innerHTML = 'More Details...'
    }
  })
}