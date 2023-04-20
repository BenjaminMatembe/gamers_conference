const hambergerMenu = document.querySelector('.hamberger');

const body = document.querySelector('body');

const openMenu = document.querySelector('.hambergerContent');

const closeMenu = document.querySelector('.closeMenu');

const speakersSection = document.querySelector('.dynamic');

const speakers = [
  { name: ['Steven Gerald', 'Frank Lampard', 'Paul Scholes', 'Darren Fletcher'] },
  { role: ['Right wing back of Liverpool Football Club and England National Team', 'Right wing back of Liverpool Football Club and England National Team', 'Right wing back of Liverpool Football Club and England National Team', 'Right wing back of Liverpool Football Club and England National Team'] },
  { award: ['He was nominated as the best wing back with most assists in the e-premier league.', 'He was nominated as the best wing back with most assists in the e-premier league.', 'He was nominated as the best wing back with most assists in the e-premier league.', 'He was nominated as the best wing back with most assists in the e-premier league.'] },
  { image: ['./images/profile.jpg', './images/prof.jpg', './images/profile.jpg', './images/prof.jpg'] },
];

hambergerMenu.addEventListener('click', (event) => {
  openMenu.style.display = 'block';
  body.style.overflow = 'hidden';
  event.stopPropagation();
});

closeMenu.addEventListener('click', (event) => {
  openMenu.style.display = 'none';
  body.style.overflow = 'visible';
  event.stopPropagation();
});

speakersSection.innerHTML = `<section class="speakersPara">
<p>Featured Speakers</p>
<div></div>
</section>
<section class="speakers">
<article class="mobileArticle">
    <div class="image">
        <!-- <div class="barcode"><img src="./images/qrCode.svg.png" alt=""></div> -->
        <div class="barImage"><img src="./images/profile.jpg" alt=""></div>
    </div>
    <div class="details">
        <h1>Alexander Arnold</h1>
        <p class="red">Right wing back of Liverpool Football Club and England National Team</p>
        <div></div>
        <p class="black">He was nominated as the best wing back with most assists in the e-premier league.</p>
    </div>
</article>

<article class="mobileArticle">
    <div class="image">
        <!-- <div class="barcode"><img src="./images/qrCode.svg.png" alt=""></div> -->
        <div class="barImage"><img src="./images/prof.jpg" alt=""></div>
    </div>
    <div class="details">
        <h1>Phil Foden</h1>
        <p class="red">Right wing forward of Manchester City Football Club and England National Team</p>
        <div></div>
        <p class="black">He was nominated as the best wing forward with most assists and goals in the e-premier league.</p>
    </div>
</article>
</section>
`;

const speakersDesktop = document.querySelector('.speakers');

for (let i = 0; i < speakers[0].name.length; i += 1) {
  speakersDesktop.innerHTML += `<article class="desktopArtical">
  <div class="image">
      <!-- <div class="barcode"><img src="./images/qrCode.svg.png" alt=""></div> -->
      <div class="barImage"><img src=${speakers[3].image[i]} alt=""></div>
  </div>
  <div class="details">
      <h1>${speakers[0].name[i]}</h1>
      <p class="red">${speakers[1].role[i]}</p>
      <div></div>
      <p class="black">${speakers[2].award[i]}</p>
  </div>
</article>`;
}

const mobileMore = document.querySelectorAll('.desktopArtical');

const more = document.querySelector('.more');
const less = document.querySelector('.less');

more.addEventListener('click', () => {
  mobileMore.forEach((card) => {
    card.style.display = 'flex';
    more.style.display = 'none';
    less.style.display = 'block';
  });
});

less.addEventListener('click', () => {
  mobileMore.forEach((card) => {
    card.style.display = 'none';
    more.style.display = 'block';
    less.style.display = 'none';
  });
});