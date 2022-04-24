var basket = document.querySelector('.basket-popup');
var openBasketButton = document.querySelector('.opened-basket');

openBasketButton.addEventListener('click', function () {
   basket.classList.remove('element-closed-basket');
});

basket.addEventListener('click', function () {
   basket.classList.add('element-closed-basket');
});
