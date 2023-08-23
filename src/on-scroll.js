const onScroll = ()=>{

    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) { // Adjust the scroll threshold as needed
        header.classList.add('small');
      } else {
        header.classList.remove('small');
      }
    });
}

export default onScroll;

