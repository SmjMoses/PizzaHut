'use strict';


////////////////////////////////
// Modal Window

const modal = document.querySelector('.orders');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-sharp');
const btnOpenModal = document.querySelectorAll('.btn');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});


////////////////////////////////
// Drop down input field

const icons = document.querySelectorAll('.arr-down');
const inputField = document.querySelectorAll('.enter-location');

const transform = function (rotate) {
  icons.forEach((icon) => (icon.style.transform = `rotate(${rotate}deg)`));
  console.log(e.target);
};

icons.forEach((opncls) =>
  opncls.addEventListener('click', function () {
    inputField.forEach((c) => c.classList.toggle('hidden'));

    for (let i = 0; i < inputField.length; i++) {
      inputField[i].classList.contains('hidden')
        ? transform(-90)
        : transform(0);
    }
  })
);


////////////////////////////////
// Menu Tabbed component

const tabs = document.querySelectorAll('.tab');
const tabsContainer = document.querySelector('.tab-container');
const tabsContent = document.querySelectorAll('.content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab');
  console.log(clicked);
  // Guard Clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove('tab--active'));
  tabsContent.forEach((c) => c.classList.remove('content--active'));

  // Activate clicked tab
  clicked.classList.add('tab--active');

  // Activate content area
  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add('content--active');
});


////////////////////////////////
// Orders Tabbed component

const ordersTabs = document.querySelectorAll('.orders__tab');
const ordersTabsContainer = document.querySelector('.orders__tab-container');
const ordersTabsContent = document.querySelectorAll('.orders__content');

ordersTabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.orders__tab');
  console.log(clicked);
  // Guard Clause
  if (!clicked) return;

  // Remove active classes
  ordersTabs.forEach((t) => t.classList.remove('orders__tab--active'));
  ordersTabsContent.forEach((c) =>
    c.classList.remove('orders__content--active')
  );

  // Activate clicked tab
  clicked.classList.add('orders__tab--active');

  // Activate content area
  document
    .querySelector(`.orders__content--${clicked.dataset.orderstab}`)
    .classList.add('orders__content--active');
});


//////////////////////////////
// Aside Food Slide

const arwForward = document.querySelector('.arrow-forward');
const arwBackward = document.querySelector('.arrow-back');
const foodCardFirstChild = document.querySelector(
  '.aside-food-card:first-child'
);
const foodCardLastChild = document.querySelector('.aside-food-card:last-child');

arwForward.addEventListener('click', function () {
  arwForward.classList.add('hidden');
  foodCardLastChild.scrollIntoView({ behavior: 'smooth' });
  arwBackward.classList.remove('hidden');
});

arwBackward.addEventListener('click', function () {
  arwForward.classList.remove('hidden');
  foodCardFirstChild.scrollIntoView({ behavior: 'smooth' });
  arwBackward.classList.add('hidden');
});
