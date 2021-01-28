const aboutSection = document.querySelector('.about');
const aboutInfo = document.querySelector('.about__info');
const pageBody = document.querySelector('body');

const onContentToggle = () => {
  aboutSection.addEventListener('click', () => {
    aboutInfo.classList.toggle('about__info--clicked');
    pageBody.classList.toggle('scroll-lock');
  });
};

export {onContentToggle};
