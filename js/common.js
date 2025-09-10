    // 슬라이드 업/다운 = 펼침 메뉴에서 많이 사용하는 기법
$(function(){

            $('#menu>li, .sub-menu-box').mouseenter(function(){
                $('.sub-menu-box').stop().slideDown('slow');
            });

            $('.sub-menu-box').mouseleave(function(){
                $('.sub-menu-box').stop().slideUp('slow');
            });


            $('#bt').click(function(){
                $('#mo-menu-box').toggleClass('showhide');

});
            $('.menu h2').click(function(){
                $(this).children('span').toggleClass('rotate_bt');
                $(this).parent('.menubox').siblings('.menubox').children('h2').children('span').removeClass('rotate_bt');

                $(this).next('div').slideToggle();
                $(this).parent('.menubox').siblings('.menubox').children('.menu-sub').hide();

            });






});

