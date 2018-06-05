import style from "./scss/main.scss"
import scrollAddClass from './js/menu'
import slick from 'slick-carousel'

(($) => {
    const top = $('.ls-top');

    scrollAddClass(top, document, 'fixed' );

    // slick
    $('.slick-planos').slick({        
        slidesToShow: 3,        
        slidesToScroll: 3,
        infinite: false,
        draggable: false
    });

    // slick
    $('.slick-descontos').slick({        
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        draggable: false,
        centerMode: false,
    });

    // slick
    $('.slick-depoimentos').slick({        
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        draggable: false,
        centerMode: false,
    });

    // slick
    $('.slick-marcas').slick({        
        slidesToShow: 9,
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.count').each(function () {

        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    const allPanels = $('.accordion > .accordion__desc').hide();
    
    $('.accordion > .accordion__tit > a').click(function(e) {
        e.preventDefault();

        const $this = $(this);
        const $target = $this.parent().next();

        if( !$target.hasClass('active') ){
            allPanels.removeClass('active').slideUp();
            $target.addClass('active').slideDown();
        }
        
        return false;
    });
    
})(jQuery);