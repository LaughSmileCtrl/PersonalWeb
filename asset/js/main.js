// selector.event
$(document).ready(function () {
    $(".flag").hover(function () {
        $(this).parent().parent().children(".desc").css("display", "block");
    }, function() {
        $(this).parent().parent().children(".desc").css("display", "none");
    });
});


// $(".flag").hover(akan jalan ketika di hover, akan jalan ketika tidak di hover)


