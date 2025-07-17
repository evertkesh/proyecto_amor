const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const initialCard = document.querySelector('.card:not(#successCard)');
const successCard = document.getElementById('successCard');

noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    initialCard.classList.add('hidden');
    successCard.classList.remove('hidden');
});
