const mobileMenu = ()=>{
const menu = document.querySelector('.header__bars')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav__menu')
const mobileLinks = document.querySelectorAll('.header__link-mobile')



menu.addEventListener('click',()=>{
nav.classList.add('open-nav')
 document.body.style.overflow = 'hidden';
})

close.addEventListener('click',()=>{
nav.classList.remove('open-nav')
})

document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    // Add click event listener to each mobile link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open-nav'); // Close the mobile menu
      document.body.style.overflow = ''; // Restore the overflow property
    });
  });
  });
  



    /* new menu*/ 

   
}

export default mobileMenu;