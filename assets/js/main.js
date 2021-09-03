$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav__bar').toggleClass('nav-toggle');
    });

    $('#share').click(function(){
        $(this).toggleClass('share-active');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.nav__bar').removeClass('nav-toggle');

        $('section').each(function(){

            let height = $(this).height();
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top >= offset && top < height + offset){
                $('.nav__bar ul li a').removeClass('active');
                $('.nav__bar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.screen-slider').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            710:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.content, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.home__title, .heading, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 50})
sr.reveal(`.private, .discount, .instant`,{origin: 'left', interval: 100})
sr.reveal(`.diret, .track, .wallet`,{origin: 'right'})
sr.reveal(`.about__img`,{origin: 'top'})
sr.reveal(`.about__data`)