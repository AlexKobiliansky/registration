$(document).ready(function(){

    /**
     * mobile-mnu customization
     */
    var mmenu = $('#mobile-mnu');
    var menuLogo = mmenu.data("logo");
    var $mmenu = mmenu.mmenu({
        navbars: [{
            content: [ "<img src=" + menuLogo + " class=\"img-responsive mm-logo\" alt=\"alt\"/>" ],
            height: 3
        }],
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
            "fx-listitems-slide",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    /**
     * end mobile-mnu customization
     */

    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
            $img.replaceWith($svg);
            $img.replaceWith($svg);
        }, 'xml');
    });

    $('.tags-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 2,
        margin: 7,
        dots: false,
        autoHeight: false,
        navText: ["",""],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            }
        }
    });


    $('.second-tags-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 2,
        margin: 7,
        dots: false,
        autoHeight: false,
        navText: ["",""],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 5
            },

            // breakpoint from 480 up
            1400 : {
                items: 5
            }
        }
    });

    $('.offers-slider').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        margin: 15,
        dots: true,
        autoHeight: false,
    });

    $('.reviews-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 1,
        margin: 15,
        dots: false,
        autoHeight: false,
        navText: ["",""],
    });


    function heightses() {
        if ($(window).width()>480) {
            $('.fact-item-title').height('auto').equalHeights();
        }

        $('.tag-slide .tag-item').height('auto').equalHeights();
    }



    if (($(window).width() >= 1200)) {
        $('#fullpage').fullpage({
            // scrollBar: true
            // menu: '#main-mnu'
        });
    }

    if (($(window).width() >= 768) && ($(window).width() < 1200)) {
        $('#fullpage').fullpage({
            scrollBar: true,
            // menu: '#main-mnu'
        });
    }

    $(window).resize(function() {
        heightses();
    });


    $(document).on('scroll', function() {
        var posDoc = $(this).scrollTop();

        $('section').each(function(){
            var id = $(this).attr("id");
            var topHeader = $(this).offset().top - 100;
            var botHeader = topHeader + $(this).height() - 100;

            if (
                posDoc > topHeader &&
                posDoc < botHeader &&
                id
            ) {
                $('#section-counter span').text(id);

                if($(this).hasClass('light-counter') == true){
                    $('#section-counter').addClass('light')
                } else {
                    $('#section-counter').removeClass('light')
                }

            }
        });
    });

    heightses();


    // $(document).on('scroll', function() {
    //     var posDoc = $(this).scrollTop();
    //
    //     $('section').each(function(){
    //         var id = $(this).attr("id");
    //         var topHeader = $(this).offset().top - 100;
    //         var botHeader = topHeader + $(this).height() - 100;
    //
    //         if (
    //             posDoc > topHeader &&
    //             posDoc < botHeader &&
    //             id
    //         ) {
    //             $('.main-mnu li').removeClass("active");
    //             $( '.main-mnu li a[href="#' + id + '"]' ).parents("li").addClass("active");
    //         }
    //     });
    // });

    // $(".main-mnu a").mPageScroll2id();

    $('.preloader').fadeOut();



    //FORMS
    $('input[type="file"]').styler({
        filePlaceholder: 'Прикрепите Ваше фото'
    });

    var uPhone = $('.user-phone');
    uPhone.mask("+7 (999) 999-99-99",{autoclear: false});

    uPhone.on('click', function (ele) {
        var needelem = ele.target || event.srcElement;
        needelem.setSelectionRange(4,4);
        needelem.focus();
    });

    $.validate({
        form : '.contact-form',
        scrollToTopOnError: false
    });

    $("a[href='#callback'], a[href='#review']").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        $.magnificPopup.close();
    });


    $('.more-tags').on('click', function(e){
        e.preventDefault();
        var parent = $(this).parents('.tags-wrap-wrap');
        var container = $(this).parents('.tags-wrap-container');
        var tags = parent.find('.tags-wrap');

        $(this).toggleClass('active');
        tags.toggleClass('active');
        container.toggleClass('active');
    });


    if ($(window).width()<=480) {
        $('.tag-item').on('click', function () {
            var link = $(this).attr('href');
            if (link.indexOf('#') != -1) {
                var newlink = link.replace(new RegExp('#', 'g'), "");
                $('html, body').animate({
                    scrollTop: $('[data-anchor="' + newlink + '"]').offset().top - 50
                });
            }
        });
    }


    /**
     * toTop functionality start
     */
    // $('#totop').click(function(e) {
    //     e.preventDefault();
    //     $('body,html').animate({scrollTop:0},600);
    // });
    /**
     * toTop functionality end
     */
            setTimeout(function(){
                if ($('#map').length) {
                    function initMap() {
                        var mapAttr = $('#map'),
                            latitude = mapAttr.data('lat'),
                            longitude = mapAttr.data('lng'),
                            zoom = mapAttr.data('zoom'),
                            image = mapAttr.data('marker'),
                            location = {lat: latitude, lng: longitude};

                        var map = new google.maps.Map(document.getElementById('map'), {
                            center: location,
                            zoom: zoom,
                            disableDefaultUI: true,
                            zoomControl: true,
                            streetViewControl: true,
                            fullscreenControl: true,

                            styles: [
                                {
                                    "featureType": "administrative",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": "-100"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "administrative.province",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "landscape",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": -100
                                        },
                                        {
                                            // "lightness": 65
                                        },
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": -100
                                        },
                                        {
                                            // "lightness": "50"
                                        },
                                        {
                                            "visibility": "simplified"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": "-100"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            // "visibility": "simplified"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "lightness": "30"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.local",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "lightness": "40"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "transit",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": -100
                                        },
                                        {
                                            "visibility": "simplified"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "hue": "#ffff00"
                                        },
                                        {
                                            "lightness": -25
                                        },
                                        {
                                            "saturation": -97
                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "labels",
                                    "stylers": [
                                        {
                                            "lightness": -25
                                        },
                                        {
                                            "saturation": -100
                                        }
                                    ]
                                }
                            ]
                        });

                        var marker = new google.maps.Marker({
                            position: location,
                            map: map,
                            icon: image,
                        });

                        marker.setMap(map);
                    }

                    initMap();
                }
            }, 2000)

});



