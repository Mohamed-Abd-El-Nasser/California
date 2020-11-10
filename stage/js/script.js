$(document).ready(function(){
    // sidebar jquery
    // $('.sidbar-nav').niceScroll({cursorcolor:"#ccc",autohidemode:false})
    $('.sidbar-nav .times .fa-times').click(function(){
        $('.sidbar-nav').toggleClass('sidebar')

    })
    $(".nav-bar .contain .navbars .bar").click(function(){
        $('.sidbar-nav').toggleClass('sidebar')
    })
    $('.sidbar-nav .list-icons ul li i').click(function(){
        $(this).toggleClass(' rot ')
        // $(this).parent('li').toggleClass('looping');
        $(this).siblings('ul').slideToggle();
        
    })
    $('.sidbar-nav .list-icons ul li .act').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    })
    $('.sidbar-nav .list-icons ul li .acv').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    })
    
    $('.sidbar-nav .list-icons ul li .act-1').click(function(){
        $('.sidbar-nav .list-icons ul li .acv-1').addClass('active').parent().siblings().find('a').removeClass('active');
    })
    $('.sidbar-nav .list-icons ul li .act-2').click(function(){
        $('.sidbar-nav .list-icons ul li .acv-2').addClass('active').parent().siblings().find('a').removeClass('active');
    })
    $('.sidbar-nav .list-icons ul li .act-3').click(function(){
        $('.sidbar-nav .list-icons ul li .acv-3').addClass('active').parent().siblings().find('a').removeClass('active');
    })
    $('.sidbar-nav .list-icons ul li .act-4').click(function(){
        $('.sidbar-nav .list-icons ul li .acv-4').addClass('active').parent().siblings().find('a').removeClass('active');
    })
    $('.sidbar-nav .list-icons ul li .act-5').click(function(){
        $('.sidbar-nav .list-icons ul li .acv-5').addClass('active').parent().siblings().find('a').removeClass('active');
    })
    $('.sidbar-nav .list-icons ul li .act-6').click(function(){
        $('.sidbar-nav .list-icons ul li .acv-6').addClass('active').parent().siblings().find('a').removeClass('active');
    })
    // navbar fixed

    $(window).scroll(function(){


        if($(this).scrollTop() > 250){

            $('.nav-bar .chang').addClass('hi');
            $('.nav-bar').addClass('fix-nav');
            $('.nav-bar .contain .navbars').addClass('fix-bor');
            $('.nav-bar .contain .navbars .hid').removeClass('shw');
            $('.nav-bar .contain .navbars .logo-1').addClass('mr-5');
            

        }else{
            $('.nav-bar .chang').removeClass('hi');
            $('.nav-bar').removeClass('fix-nav');
            $('.nav-bar .contain .navbars').removeClass('fix-bor');
            $('.nav-bar .contain .navbars .hid').addClass('shw');
            $('.nav-bar .contain .navbars .logo-1').removeClass('mr-5');
           
    }




    })
    $('.nav-bar .contain .navbars .pow').click(function(){

        $(this).addClass('power').parent().siblings().find('a').removeClass('power');





    })
     
    // swiper
    var swiper = new Swiper('.swiper-container', {
        
        centeredSlides: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


        $('.fa-calendar-alt').click(function(){
            $(this).siblings().focus();
        })















  });