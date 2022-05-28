const darkMode = document.querySelector('#darkMode');
const html = document.querySelector('html');
let darkModeState = false;

const toggleMode = () => {
  darkModeState = !darkModeState;
  switchTheme();
};

const switchTheme = () => {
  if (darkModeState) {
    // html.classList.add('dark');
    document.documentElement.classList.add('dark');
  } else {
    // html.classList.remove('dark');
    document.documentElement.classList.remove('dark')
  }
}

darkMode.addEventListener('click', toggleTheme);






