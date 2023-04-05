$(document).ready(function(){
    //jquery function to toggle design explanation paragraph with image
    $(".designimg").click(function(){
        $(".designimg").toggle();
        $(".designexplain").toggle();
    })
    $(".designexplain").click(function(){
        $(".designexplain").toggle();
        $(".designimg").toggle();
    })

    //jquery function to toggle development explanation paragraph with image
    $(".devimg").click(function(){
        $(".devimg").toggle();
        $(".devexplain").toggle();
    })
    $(".devexplain").click(function(){
        $(".devexplain").toggle();
        $(".devimg").toggle();
    })

    //jquery function to toggle product management explanation paragraph with image
    $(".pmimg").click(function(){
        $(".pmimg").toggle();
        $(".pmexplain").toggle();
    })
    $(".pmexplain").click(function(){
        $(".pmexplain").toggle();
        $(".pmimg").toggle();
    })
})