$(function(){
    $(".more").hide()
    setInterval(function(){
        $(".m li").each(function(e){
            $(this).delay(e*500).fadeIn("slow")
        })
    },3000)
    $(".more").delay(5000).fadeIn(2000)

    $(".more").click(function(){
        $(".sh").addClass("on")
        var x = 0
        setInterval(function(){
            x++
            if(x > 0){
                location.href="main.html"
            }
        },1000)
    })
})