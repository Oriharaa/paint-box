'use strict';

const productImgDiv = document.querySelectorAll('.product__img');
const productImg = document.querySelectorAll('.product__img > img');
const price = document.querySelectorAll('.price');

for(let i=0; i<3; i++){
    productImgDiv[i].addEventListener('mouseover',()=>{
        price[i].innerHTML = 'VIEW DETALS';
        price[i].style.textDecoration = 'underline';
    });

    productImgDiv[i].addEventListener('mouseleave', ()=>{
        price[i].innerHTML = '$40.00';
        price[i].style.textDecoration = 'none';
    });
};
