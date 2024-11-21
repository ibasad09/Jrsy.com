
// Header Section

const navOpen = document.querySelector('.mobile-open-btn')
const navClose = document.querySelector('.mobile-close-btn')
const primaryNavigation = document.getElementById('primary-navigation');


navOpen.addEventListener('click', ()=>{

    const visibility = primaryNavigation.getAttribute('data-visible');
    if(visibility === 'false'){
        primaryNavigation.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible', true);
    }else{
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
})

navClose.addEventListener('click', ()=>{

    const visibility = primaryNavigation.getAttribute('data-visible');
    if(visibility === 'true'){
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
})


// ========== Cart Menu===================

const shoppingBag = document.getElementById('cart-box');
const cartItem = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

shoppingBag.addEventListener('click', ()=>{
    const showCart = cartItem.getAttribute('data-visible');

    if(showCart === 'false'){
        cartItem.setAttribute('data-visible', true)
    }else{
        cartItem.setAttribute('data-visible', false)
    }
})

crossBtn.addEventListener('click', ()=>{
    const showCart = cartItem.getAttribute('data-visible');

    if(showCart === 'true'){
        cartItem.setAttribute('data-visible', false)
    }
})