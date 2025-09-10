$(function(){
            $('.search i').click(function(){
                $('.m-search').slideDown();
                $(this).hide();
            });
            $('.m-search-bar i').click(function(){
                $('.m-search').slideUp();
                $('.search i').show();
            });
            
                        $('.menu').click(function(){
                $('.m-list').toggleClass('show');
});


            });