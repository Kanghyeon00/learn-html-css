<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const flipButton = document.querySelector('.flip-button');
  const card = document.querySelector('.card');

  flipButton.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
=======
document.querySelector('.flip-button').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('is-flipped');
>>>>>>> b8c5ad83d50963d22db18d850f72ff84cce1c9d7
});
