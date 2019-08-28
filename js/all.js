var bodyh = document.body;
function windowsHeight() {
    bodyh.style.height = window.innerHeight + "px";
}
windowsHeight();




(function () {
    $(document).ready(function () {

        $('#wrap').on('click', function () {
            $('.menudown').collapse('hide');
        })


        $('.owl-carousel').owlCarousel({
            nav: true,
            navText: ['<span class="fas fa-angle-left "></span>', '<span class="fas fa-angle-right "></span>'],
            dots: false,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                586: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
         
        // $('.menudown').on('show.bs.collapse', function(){
        //     $(".menu-list-down").addClass('rotate');
        // })

        for (var i = 0; i < $(".memudown").length; i++) {
            $(".menudown:eq(" + i + ")").click({ id: i }, function (e) {
                n = e.data.id
                $(".menudown:eq(" + n + ")").on('show.bs.collapse', function(){
                    $(".menu-list-down:eq(" + n + ")").addClass('rotate')
                })
                $(".menudown:not(:eq(" + n + "))").on('hide.bs.collapse', function(){
                    $(".menu-list-down:not(:eq(" + n + "))").removeClass('rotate')
                })

            })
        }



        $('.mb-menu').css('transform', 'translateX(-105%)')

        $('.menu-btn').on('click', function () {
            let menu = document.querySelector('.mb-menu')
            if (menu.style.transform == "translateX(-105%)") { menu.style.transform = "translateX(0)" } else {
                menu.style.transform = "translateX(-105%)"
            }
        });


        $('.wrap').click(function () {
            if ($('.mb-menu').css('transform', 'translateX(0%)')) {
                $('.mb-menu').css('transform', 'translateX(-105%)')
            }
        })

        $(".goTop a").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {

                    window.location.hash = hash;
                });
            }
        });
        $(window).scroll(function () {
            $(".header").each(function () {
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop - 112) {
                    $(".main-navbar").addClass("top0");
                }
                else {
                    $(".main-navbar").removeClass("top0");
                }

            });
        });

        $(window).scroll(function () {
            $(".mb-header").each(function () {
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop - 48) {
                    $(".mb-menu").addClass("top0");
                }
                else {
                    $(".mb-menu").removeClass("top0");
                }

            });
        });

    });
})()