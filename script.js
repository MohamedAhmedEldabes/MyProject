$("docoment").ready(function(){
    // start Navbar

    $(".navbar i").click(function(){
        $(".nav li").slideToggle(500);
    });

            //  scroll Navbar
            $(".nav li a").click(function(e){
                e.preventDefault();

                console.log($(this).data('set'));
                $("html").animate({
                    scrollTop: $("."+$(this).data('set')).offset().top -80
                },700);
            });
            //End scroll Navbar
    // End Navbar

    // start slider code

    $(".slider-pointer span:first-child").click(function(){
        $(this).addClass("pointer-active");
        $(this).siblings().removeClass("pointer-active");
        $(".slider img").attr("src","img/about/about1.jpeg").fadeIn(1000);
    });
    $(".slider-pointer span:nth-child(2)").click(function(){
        $(this).addClass("pointer-active");
        $(this).siblings().removeClass("pointer-active");
        $(".main-slide").attr("src","img/about/about2.webp").fadeIn(3000);
    });
    $(".slider-pointer span:last-child").click(function(){
        $(this).addClass("pointer-active");
        $(this).siblings().removeClass("pointer-active");
        $(".main-slide").attr("src","img/about/about3.webp");
    });

    $(".slider i:first-of-type").click(function(){
        if( $(".slider-pointer span:first-child").hasClass("pointer-active")){
            $(".slider-pointer span:last-child").click();
        }
        else{
            $(".pointer-active").prev().click();
        }
    });

    $(".slider i:last-of-type").click(function(){
        if( $(".slider-pointer span:last-child").hasClass("pointer-active")){
            $(".slider-pointer span:first-child").click();
        }
        else{
            $(".pointer-active").next().click();
        }
    });
    
    // End slider code
});