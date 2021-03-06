jQuery(function() {
    var offset = 500;
    var back_top = jQuery('.backtop');
    jQuery(window).scroll(function() {
        (jQuery(this).scrollTop() > offset) ? back_top.addClass('show_icon'): back_top.removeClass('show_icon');
    });
    if (jQuery('#progressbar').length > 0) {
        jQuery("#progressbar").progressbar({
            value: 70
        });
    }
    if (jQuery('#progressbar2').length > 0) {
        jQuery("#progressbar2").progressbar({
            value: 70
        });
    }
    if (jQuery('#horizontalTab').length > 0) {
        jQuery('#horizontalTab').easyResponsiveTabs({
            type: 'default',
            width: 'auto',
            fit: true,
            activate: function() {
                var $tab = jQuery(this);
                var $info = jQuery('#tabInfo');
                var $name = jQuery('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }
    if (jQuery('#chart1').length > 0) {
        var ctx = document.getElementById('chart1');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Marketing', 'Ops & Devs', 'Public Sale', 'Ecosystem', 'Financial','Private Sale','Private Sale'],
                datasets: [{
                    label: '# of Votes',
                    data: [16.2, 21.4, 4.7, 22.9, 7.6,5,20],
                    backgroundColor: ['#4845b4', '#4fc489', '#0ba1d6', '#efe943', '#e9734a','#e9734b','#0bc1d6','#4845b2', ],
                    borderWidth: 0,
                    hoverOffset: false
                }]
            },
            options: {
                legend: {
                    display: false
                }
            },
        });
    }
    if (jQuery('#chart2').length > 0) {
        var ctx = document.getElementById('chart2');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Operational Cost', 'Liquidity & Exchange', 'Product Development', 'Ecosystem Growth'],
                datasets: [{
                    label: '# of Votes',
                    data: [10, 30, 40, 20],
                    backgroundColor: ['#4845b4', '#4fc489', '#0ba1d6', '#efe943',],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
            },
        });
    }
    if (jQuery('#clock').length > 0) {
        var exp_date = "Dec 30, 2023 15:37:20";
        timer("clock", exp_date);
    }
    if (jQuery('#clock2').length > 0) {
        var exp_date = "Dec 25, 2023 10:17:25";
        timer("clock2", exp_date);
    }
    if (jQuery('#clock3').length > 0) {
        var exp_date = "Dec 20, 2023 20:50:40";
        timer("clock3", exp_date);
    }

    function timer(clockID, exp_date) {
        var countDownDate = new Date(exp_date).getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var days = (days < 10) ? '0' + days : days;
            var hours = (hours < 10) ? '0' + hours : hours;
            var minutes = (minutes < 10) ? '0' + minutes : minutes;
            var seconds = (seconds < 10) ? '0' + seconds : seconds;
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = minutes;
            document.getElementById("secs").innerHTML = seconds;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById(clockID).innerHTML = "EXPIRED";
            }
        }, 1000);
    }
    if (jQuery('.timeline').length > 0) {
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 767,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            visibleItems: 4
        });
    }
    if (jQuery('.video-button').length > 0) {
        jQuery(".video-button").modalVideo({
            youtube: {
                autoplay: 1,
                controls: 1
            },
            ratio: '16:9'
        });
    }
    if (jQuery('.client-logos-slider').length > 0) {
        jQuery(".client-logos-slider").owlCarousel({
            items: 6,
            margin: 0,
            loop: true,
            autoplay: true,
            mouseDrag: true,
            touchDrag: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            nav: false,
            dotsEach: false,
            smartSpeed: 750,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                767: {
                    items: 4
                },
                991: {
                    items: 5
                },
                992: {
                    items: 6
                }
            }
        });
    }
    if (jQuery('.wow').length > 0) {
        jQuery(function() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null,
            });
            wow.init();
        });
    }
});
jQuery(window).on('load', function() {
    setTimeout(function() {
        jQuery('.preloader').fadeOut('slow');
    }, 500);
});
jQuery(document).ready(function() {
    if (jQuery('.fat-nav').length > 0) {
        (function() {
            jQuery.fatNav();
        }());
        var fatContent = jQuery('.main-menu ul').html();
        var fatHeaderRight = jQuery('.header-right').html();
        var fatNav = '<div class="fat-nav__wrapper" id="fatmenu"><ul>' + fatContent + '<div class="header-right">' + fatHeaderRight + '</div></ul></div>';
        jQuery('.fat-nav').html(fatNav);
        jQuery('#fatmenu ul li.menu-item-has-children').append("<span class='toggle_button'><small></small></span>");
        jQuery('#fatmenu ul ul').hide();
        jQuery('ul li.menu-item-has-children > .toggle_button').click(function() {
            if (jQuery(this).parent().children('ul').hasClass('submenu')) {
                jQuery(this).parent().children('ul').removeClass("submenu").slideUp(400);
                jQuery(this).removeClass('active_item');
            } else {
                jQuery(this).parent().children('ul').addClass("submenu").slideDown(400);
                jQuery(this).addClass('active_item');
            }
        });
    }
    jQuery('.main-menu ul li ul').parent('li').addClass('menuarrow');
});
jQuery(window).resize(function() {
    var win_width = jQuery(window).width();
    if (win_width > 1099) {
        jQuery('.fat-nav').removeClass('active').css("display", "none");
        jQuery('.hamburger').removeClass('active');
    }
});