'use strict';

const productImgDiv = document.querySelectorAll('.product__img');
const productImg = document.querySelectorAll('.product__img > img');
const price = document.querySelectorAll('.price');


const navbar = document.querySelector('#navbar');
const navbarLeft = document.querySelector('.navbar__menu__left');
const navbarRight = document.querySelector('.navbar__menu__right');
const navbarMenuLogo = document.querySelector('.navbar__menu__logo');
const toggleBtn = document.querySelector('.navbar__toggle-btn');


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

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        reviseNavbar();
    }
    else if(window.scrollY < 30){
        returnNavbar();
    }
});


toggleBtn.addEventListener('click', ()=>{
    navbarMenuLogo.style.display='none';
    addClickAndHide();
    createXbtn();
});




function reviseNavbar(){
    navbar.style.position='fixed';
    navbarMenuLogo.classList.add('mini');
};

function returnNavbar(){
    navbar.style.position='static';
    navbarMenuLogo.classList.remove('mini');
};

function addClickAndHide(){
    toggleBtn.classList.add('hide');
    navbar.classList.add('click');
    navbarLeft.classList.add('click');
    navbarRight.classList.add('click');
};

function removeClickAndHide(){
    toggleBtn.classList.remove('hide');
    navbar.classList.remove('click');
    navbarLeft.classList.remove('click');
    navbarRight.classList.remove('click');
};

function createXbtn(){
    const navbarTop = document.createElement('ul');
    navbarTop.setAttribute('class', 'navbar__menu__top');
    navbarTop.innerHTML = '<i class="fas fa-times"></i>'
    navbarTop.style.display='block';
    navbar.insertBefore(navbarTop, navbarLeft);

    navbarTop.addEventListener('click', ()=>{
        removeClickAndHide();
        navbarMenuLogo.style.display='block';
        navbarTop.remove();
    });

}