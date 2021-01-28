const loader = document.querySelector('.loader');
const headerLogo = document.querySelector('.header__logo');
const aboutWrapper = document.querySelector('.about__wrapper');
const aboutLetter = aboutWrapper.querySelector('.about__letter');

const onLoaderRemove = () => {
  if (loader) {
    loader.classList.add('loader--clicked');
    setTimeout(() => {
      loader.remove();
    }, 1000);
    setTimeout(() => {
      headerLogo.classList.add('header__logo--fadein');
    }, 1000);
    setTimeout(() => {
      aboutWrapper.classList.add('about__wrapper--fadein');
    }, 1000);
    setTimeout(() => {
      aboutLetter.classList.add('about__letter--blink');
    }, 2000);
  }
};

const onEnterPress = (evt) => {
  const isEnterKey = evt.key === 'Enter';
  if (isEnterKey) {
    onLoaderRemove();
  }
};

const setupPreload = () => {
  loader.classList.remove('loader--nojs');
  aboutWrapper.classList.remove('about__wrapper--nojs');
  loader.addEventListener('click', () => {
    onLoaderRemove();
  });
  document.addEventListener('keydown', (evt) => {
    onEnterPress(evt);
  });
};

export {setupPreload};
