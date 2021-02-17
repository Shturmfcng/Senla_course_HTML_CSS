/* БЛОК НОВОСТЕЙ */
let newsElem = document.getElementById('news__box');
let news__btnElem = newsElem.querySelector('#news__btn');

news__btnElem.onclick = function () {
newsElem.classList.toggle('open');
if (newsElem.classList.contains('news__box')) {
news__btnElem.textContent = 'Показать все новости';
} else {
news__btnElem.textContent = 'Скрыть все новости';
}
newsElem.classList.toggle('news__box');
};

/* УБИРАЕТ СКАЧЕК ПРИ ЗАКРЫТИИ МОДАЛЬНОГО ОКНА */
document.addEventListener("DOMContentLoaded", function () {
let scrollbar = document.body.clientWidth - window.innerWidth + 'px';

console.log(scrollbar);
document.querySelector('#help3, #openModal-car-assistance, #openModal-volunteering, #openModal-take-forever, #openModal-take-temporally, #openModal-map, #openModal-more-details')
.addEventListener('click', function () {
document.body.style.overflow = 'hidden';
document.querySelector('#help3, #openModal-car-assistance, #openModal-volunteering, #openModal-take-forever, #openModal-take-temporally, #openModal-map, #openModal-more-details')
.style.marginLeft = scrollbar;
});
document.querySelector('[href="#close"]').addEventListener('click', function () {
document.body.style.overflow = 'visible';
document.querySelector('#help3, #openModal-car-assistance, #openModal-volunteering, #openModal-take-forever, #openModal-take-temporally, #openModal-map, #openModal-more-details')
.style.marginLeft = '0px';
});
});

/* АНИМАЦИЯ */
let animateHTML = function() {
let elems;
let windowHeight;

function init() {
elems = document.querySelectorAll('.hidden-buttons, .hidden-pets, .hidden-news');
windowHeight = window.innerHeight;
addEventHandlers();
checkPosition();
}

function addEventHandlers() {
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);
}

function checkPosition() {
for (let i = 0; i < elems.length; i++) {
let positionFromTop = elems[i].getBoundingClientRect().top;
if (positionFromTop - windowHeight <= 0) {
elems[i].className = elems[i].className.replace(
'hidden-buttons',
'fade-in-buttons'
);
elems[i].className = elems[i].className.replace(
'hidden-pets',
'fade-in-pets'
);
elems[i].className = elems[i].className.replace(
'hidden-news',
'fade-in-news'
);
}

if ((positionFromTop - windowHeight > 1) || (positionFromTop < -500)) {
elems[i].className = elems[i].className.replace(
'fade-in-buttons',
'hidden-buttons'
);
elems[i].className = elems[i].className.replace(
'fade-in-pets',
'hidden-pets'
);
elems[i].className = elems[i].className.replace(
'fade-in-news',
'hidden-news'
);
}
}
}

return {
init: init
};
};