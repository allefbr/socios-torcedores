import style from "./scss/main.scss"
import scrollAddClass from './js/menu'
import slick from 'slick-carousel'
import magnific from './js/magnific-popup'

(($) => {
    const top = $('.ls-top');
    scrollAddClass(top, document, 'fixed' );
    
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    
    // slick
    $('.single-item').slick();

    // slick
    $('.slick-planos').slick({        
        slidesToShow: 3,        
        slidesToScroll: 3,
        infinite: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    draggable: true,                    
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    // slick
    $('.slick-descontos').slick({        
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        draggable: false,
        centerMode: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    draggable: true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    // slick
    $('.slick-depoimentos').slick({        
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        draggable: false,
        centerMode: false,
        responsive: [            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    // slick
    $('.slick-marcas').slick({        
        slidesToShow: 9,
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]

    });
    
    // menu mobile
    $(document).on('click', '.btn-menu', function (e) {
        e.preventDefault();

        menuMobileShow(this);
    });

    $(document).on('click', '.ls-menu-mobile a', function (e) {
        menuMobileShow('.btn-menu');
    });

    function menuMobileShow(botao) {
        var $botao = $(botao);
        var $botaoFilho = $botao.find('i');

        $botao.toggleClass('open');

        $('.ls-menu-mobile').toggleClass('active');        
    }

    // accordion 
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