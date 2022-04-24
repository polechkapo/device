var popup = document.querySelector('.overlay');
var openPopupButton = document.querySelector('.open-button');
var closePopupButton = popup.querySelector('.close-button');

openPopupButton.addEventListener('click', function () {
    popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
    popup.classList.remove('modal--show');
});





