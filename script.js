const hamburger = document.getElementById('menu-bars');
const curtain = document.getElementById('overlay');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const navItems = [nav1, nav2, nav3];
const body = document.querySelector('body');

function trigger() {
  hamburger.classList.toggle('change');
  curtain.classList.toggle('overlay-active');
  if (curtain.classList.contains('overlay-active')) {
    curtain.classList.replace('overlay-slide-left', 'curtain-out');
  } else {
    curtain.classList.replace('curtain-out', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

hamburger.addEventListener('click', trigger);
navItems.forEach((trig) => {
  trig.addEventListener('click', trigger);
});

const speakerList = [
  {
    speakerName: 'Virea Tert',
    job: 'Talent Scout, AXER Academy',
    image: './img/1.jpeg',
    info: 'Nobody Scouts like he does',
  },
  {
    speakerName: 'Leroy Tim',
    job: 'Technical lead, RETA Football',
    image: './img/2.jpeg',
    info: 'A very important member',
  }, {
    speakerName: 'Bella Withers',
    job: 'Assistant Technical lead, RETA Football',
    image: './img/3.jpeg',
    info: 'A very important member',
  }, {
    speakerName: 'Shingiri Rivera',
    job: 'Assistant Technical lead, RETA Football',
    image: './img/4.jpeg',
    info: 'A very important member',
  }, {
    speakerName: 'FLox Pena',
    job: 'Assistant Technical lead, RETA Football',
    image: './img/5.jpeg',
    info: 'A very important member',
  }, {
    speakerName: 'Siempre Agua',
    job: 'President RETA Football ',
    image: './img/6.jpeg',
    info: 'A very important member',
  },

];
const speakers = document.querySelector('.speaker-list');
Array.from(speakers.children).forEach((child, index) => {
  child.innerHTML = `
      <div class="img-x">
        <img class="speaker-image" src="${speakerList[index].image}">
      </div>
      <div class="speaker-info">
        <div class="speaker-name">${speakerList[index].speakerName}</div>
        <div class="port">${speakerList[index].job}</div>
        <hr id="f-line-1">
        <div>${speakerList[index].info}</div>
      </div>
    `;
});
