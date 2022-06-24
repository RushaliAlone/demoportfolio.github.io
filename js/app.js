$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let menu=document.querySelector('.menu');
    let close= document.querySelector('.close');
    let mobileNav= document.querySelector('.mobile-nav');
    let mobBar=document.querySelector('.mob-bar');

    menu.addEventListener('click',function(){
      mobileNav.classList.add('open')  ;
    });
    close.addEventListener('click',function(){
        mobileNav.classList.remove('open')  ;
    });
    mobBar.addEventListener('click',function(){
        mobileNav.classList.remove('open')  ;
    });
})