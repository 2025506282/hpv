function scrollact(e,time) {
    var scrollTop = $(document).scrollTop() + $(window).height();
    var topMin = $(e).offset().top;
    console.log(topMin);
    console.log(scrollTop);
    var topMax = $(e).offset().top + $(e).height();
    console.log(topMax);
    if(scrollTop>=topMin&&scrollTop<topMax) {
        if($(e).hasClass('show')){
            return true;
        } else {
            $(e).addClass('show');
            return true;
        }
    }

}
$(".section7 .button-box>button").click(function(){
    var  index = $(this).index();
    $(".section7 .row-box>div").eq(index).removeClass('hide').siblings().addClass('hide');
});
$(".extend-read").click(function(){
    $('.myscroll').myScroll({
        speed: 40, //数值越大，速度越慢
        rowHeight: 46 //li的高度
    });
})
$(function(){
    $(".ngv").addClass('show');
    $('.carousel').carousel({
        interval: 2000,
        autoplay: false
    })
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        // scrollact(".ngv",5);
        scrollact(".section3",5);

    });
})


