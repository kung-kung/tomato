$(function(){
    $(".hd").hover(function(){
        $(".hd").css("background","#fff")
    },function(){
        $(".hd").css("background","transparent")
    })


    $(".main>li").hover(function(){
        $(this).find(".line").css("transform","scale(1)")
    },function(){
        $(".main>li").find(".line").css("transform","scale(0)")
    })


    $(".wrap").fullpage({
        scrollingSpeed: 1000,
        navigation: false,
        menu: ".main",
        anchors: ["one","two","three","four","five"],
        loopTop: true,
        loopBottom: true,
        continuousHorizontal:false,
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 2000);
        },

        afterLoad : function(anchorLink, index){
            var x = index.index
            console.log(x+"!!")
            if(x == 4){
                $(".hwa li").each(function(e){
                    $(this).find("img").delay(e*100).addClass("on",50, "easeOutElastic")
                })
            }else{
                $(".hwa li img").removeClass("on")
            }
        }
    })
    
/*     $(".slid").slick({
        autoplay: false,
        autoplaySpeed: 500,
        arrows: false,

    }) */
})