/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER POPULAR ===============*/

var swiperPopular = new Swiper(".popular__contaner", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accortion__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__sccortion-header')

    accordionHeader.addEventListener('click', () =>{

        const openItem = document.querySelector('.accordion-open')


        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.vaule__accortion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{

        accordionContent.style.height = accordionContent.scrolHeader + 'px'
        item.classList.add('accordion-open')
        
    }



}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 

const themaButton = document.getElementById('thema-button')
    const darkThema = 'dark-thema'
    const iconThema = 'bx-sun'

    const selectedThema = localStorage.getItem('selected-Thema')
    const selectedIcon = localStorage.getItem('selected-Icon')

    const getCurrentThema = () => document.body.classList.contains(darkThema) ? 'dark' : 'light'
    const getCurrentIcon = () => document.body.classList.contains(iconThema) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedThema) {

    document.body.classList[selectedThema === 'dark' ? 'add' : 'remove'](darkThema)
    themaButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconThema)
}


themaButton.addEventListener('click', () => {
    document.body.classList.toggle(darkThema)
    themaButton.classList.toggle(iconThema)

    localStorage.setItem('selected-Thema', getCurrentThema())
    localStorage.setItem('selected-Icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.home__title' ,  { delay: 500, origin: 'top', });
ScrollReveal().reveal('.logos__date' ,  { delay: 500, origin: 'top', });
ScrollReveal().reveal('.popular__contaner' ,  { delay: 500, origin: 'top', });
ScrollReveal().reveal('.home__text', { delay: 500, origin: 'top', });
ScrollReveal().reveal('.home__search' ,  { delay: 600, origin: 'top', });
ScrollReveal().reveal('.home__vaule', { delay: 700, origin: 'top', });
ScrollReveal().reveal('.home__images' ,  { delay: 800, origin: 'bottom', });
ScrollReveal().reveal('.logos__img', {Interval: 100});
ScrollReveal().reveal('.vaule__img', {origin: 'left'});
ScrollReveal().reveal('.vaule__content', {origin: 'right'});
ScrollReveal().reveal('.contact__content', {origin: 'left'});
ScrollReveal().reveal('.contact__img', {origin: 'right'});
ScrollReveal().reveal('.subscribe__container' ,  { delay: 500, origin: 'top', });
ScrollReveal().reveal('.footer__container' ,  { delay: 500, origin: 'top', });
ScrollReveal().reveal('.footer__info', { delay: 500, origin: 'top', });