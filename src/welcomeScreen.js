const firstSideButton = document.querySelector('.first');
const secondSideButton = document.querySelector('.second');

const welcomeScreen = document.querySelector('.welcome-screen');
const gameScreen = document.querySelector('.game-screen');

const firstSideScreen = document.querySelector('.first-side');
const secondSideScreen = document.querySelector('.second-side');

const startGameOnFirstSide = () => {
  welcomeScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  firstSideScreen.style.display = 'block';
  secondSideScreen.style.display = 'none';
};

firstSideButton.addEventListener('click', startGameOnFirstSide);

const startGameOnSecondSide = () => {
  welcomeScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  firstSideScreen.style.display = 'none';
  secondSideScreen.style.display = 'block';
};

secondSideButton.addEventListener('click', startGameOnSecondSide);
