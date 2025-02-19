document.addEventListener('DOMContentLoaded', () => {
  const flipButton = document.querySelector('.flip-button');
  const card = document.querySelector('.card');

  flipButton.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
