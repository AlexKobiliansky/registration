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
        if ($(window).width()<480) {
            /**/
        }

        $('.fact-item-title').height('auto').equalHeights();
        $('.tag-slide').height('auto').equalHeights();
    }


        if ($(window).width()>=768) {
            $('#fullpage').fullpage();
        }

    $(window).resize(function() {
        heightses();
    });

    heightses();







    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });




    $(window).on('load', function() {
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
    });











});
