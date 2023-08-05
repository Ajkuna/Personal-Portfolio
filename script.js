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
}





themeButton.addEventListener('click', () => {
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