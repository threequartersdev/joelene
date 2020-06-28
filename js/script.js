// Variables for Timelines

let tlIntro = gsap
  .timeline()
  .to('.reveal-img', {
    duration: 0.7,
    xPercent: -100,
    delay: 1.8,
  })
  .fromTo('.hero', { xPercent: -100 }, { xPercent: 0, duration: 0.7 }, '-=0.7')
  .fromTo('.hero-title', { opacity: 0 }, { opacity: 1, duration: 0.5 })
  .fromTo(
    '.button-icon',
    { y: '-50px', opacity: 0 },
    { y: '0', opacity: 1, duration: 0.5 },
    '-=0.5'
  );

let tl = gsap
  .timeline({ paused: true })
  .to('.reveal-img', {
    duration: 0.8,
    xPercent: -100,
  })
  .fromTo('.hero1', { xPercent: -100 }, { xPercent: 0, duration: 0.8 })
  .fromTo('.hero-title1', { opacity: 0 }, { opacity: 1, duration: 1 })
  .fromTo('.button-icon', { y: '-50px' }, { y: '0', duration: 1 });

// For pace.js

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
  elements: {
    selectors: ['#showcase', '#about', '#gallery'],
  },
};

Pace.on('done', function () {
  gsap.to('.p', { yPercent: -30, opacity: 0, duration: 0.5 });

  gsap.to('#preloader', { yPercent: -100, duration: 1, delay: 0.5 });

  // $('.p')
  //   .delay(500)
  //   .animate({ top: '30%', opacity: '0' }, 2800, $.bez([0.19, 1, 0.22, 1]));

  // $('#preloader')
  //   .delay(1500)
  //   .animate({ top: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));

  // gsap.to('.reveal-img', {
  //   duration: 0.8,
  //   delay: 2.5,
  //   x: '-100%',
  // });

  // gsap.fromTo('.hero', { x: '-100%' }, { x: '0', duration: 0.8, delay: 2.5 });

  tlIntro.play();
});

// For hoverEffect

new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.6,
  image1: './img/img-09.jpg',
  image2: './img/img-09.jpg',
  displacementImage: './img/diss.png',
  imagesRatio: 921 / 614,
});

// Selectors

const about = document.querySelector('.nav-about');
const projects = document.querySelector('.nav-projects');
const close1 = document.querySelector('.icon-x');
const close2 = document.querySelector('.icon-xx');

// For cursor

let mouse = { x: 0, y: 0 };
let pos = { x: 0, y: 0 };
let ratio = 0.15;
let active = false;
let ball = document.querySelector('#ball');

gsap.set(ball, { xPercent: -50, yPercent: -50 });

document.addEventListener('mousemove', mouseMove);

function mouseMove(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
}

gsap.ticker.add(updatePosition);

function updatePosition() {
  if (!active) {
    pos.x += (mouse.x - pos.x) * ratio;
    pos.y += (mouse.y - pos.y) * ratio;

    gsap.set(ball, { x: pos.x, y: pos.y });
  }
}

$('.icon-wrap').mouseenter(function (e) {
  gsap.to(this, 0.3, { scale: 1.3 });
  gsap.to(ball, 0.3, { scale: 4 });
  active = true;
});

$('.icon-wrap').mouseleave(function (e) {
  gsap.to(this, 0.3, { scale: 1 });
  gsap.to(ball, 0.3, { scale: 1 });
  gsap.to(this.querySelector('.button-icon'), 0.3, { x: 0, y: 0 });
  active = false;
});

$('.icon-wrap').mousemove(function (e) {
  parallaxCursor(e, this, 3);
  callParallax(e, this);
});

function callParallax(e, parent) {
  parallaxIt(e, parent, parent.querySelector('.button-icon'), 10);
}

function parallaxIt(e, parent, target, movement) {
  let boundingRect = parent.getBoundingClientRect();
  let relX = e.pageX - boundingRect.left;
  let relY = e.pageY - boundingRect.top;

  gsap.to(target, 0.3, {
    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
    y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
    ease: Power2.easeOut,
  });
}

function parallaxCursor(e, parent, movement) {
  let rect = parent.getBoundingClientRect();
  let relX = e.pageX - rect.left;
  let relY = e.pageY - rect.top;
  pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
  pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
  gsap.to(ball, 0.3, { x: pos.x, y: pos.y });
}

// Functions

function aboutToggle(e) {
  tlIntro.reverse();

  let tlTrans = gsap
    .timeline({ paused: true, delay: 1.5 })
    .fromTo('.transition-1', { xPercent: 0 }, { xPercent: 200, duration: 1.5 })
    .to('#about', { xPercent: 100, duration: 1.5 }, '-=1.5')
    .fromTo('.heading', { yPercent: 100 }, { yPercent: 0, duration: 1 }, '<1')
    .fromTo(
      '.about-text-p, .about-text-link, .icon',
      { yPercent: 100 },
      { yPercent: 0, duration: 0.6, stagger: 0.2 },
      '-=0.5'
    )
    .fromTo(
      '.img-rev',
      { xPercent: 0 },
      { xPercent: 100, duration: 0.7, stagger: 0.1 },
      '-=1.4'
    );

  tlTrans.play();
}

function projectsToggle(e) {
  tlIntro.reverse();

  let tlTrans1 = gsap
    .timeline({ paused: true, delay: 1.5 })
    .fromTo('.transition-1', { xPercent: 0 }, { xPercent: 200, duration: 1.5 })
    .to('#gal', { xPercent: 100, duration: 1.5 }, '-=1.5');

  tlTrans1.play();
}

function aboutClose(e) {
  let closeAb = gsap
    .timeline({ paused: true, delay: 0.5 })
    .fromTo(
      '.about-text-p, .about-text-link, .icon, .heading',
      { yPercent: 0 },
      { yPercent: 100 }
    )
    .fromTo(
      '.img-rev',
      { xPercent: 100 },
      { xPercent: 0, duration: 0.7, stagger: 0.1 },
      '-=1'
    )
    .to('#about', { xPercent: 0, duration: 1.5 })
    .fromTo(
      '.transition-1',
      { xPercent: 200 },
      { xPercent: 0, duration: 1.5 },
      '-=1.4'
    );

  closeAb.play();
  // gsap.to('#about', { xPercent: -100, duration: 3.6 });
  // gsap.fromTo('.transition-1', { xPercent: 200 }, { xPercent: 0, duration: 2 });
  tlIntro.play();
}

function projectClose(e) {
  gsap.to('#gal', { xPercent: -100, duration: 3.6 });
  gsap.fromTo('.transition-1', { xPercent: 200 }, { xPercent: 0, duration: 2 });
  tlIntro.play();
}

// Event Listeners
about.addEventListener('click', aboutToggle);
projects.addEventListener('click', projectsToggle);
close1.addEventListener('click', aboutClose);
close2.addEventListener('click', projectClose);
