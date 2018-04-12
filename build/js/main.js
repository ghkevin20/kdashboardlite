/**/
/*  K-SOLUTIONS 2018    */
/*  Created By: Kevin Rosario   */
/**/
/**
 * Created by kevin on 05/03/2018.
 */

$('#sidebar-wrapper li>a.collap').on("click",function (e) {
    var childCollaps = $(this).parent().siblings("li");
    childCollaps.removeClass('active');
    childCollaps.children(".child-menu").slideUp(250);
    childCollaps.children().find('.menu-arrow').removeClass("fa-caret-down").addClass("fa-caret-left");

    if ($(this).parent().children(".child-menu").is(":visible")){
        //SlideUP
        $(this).parent().removeClass('active');
        $(this).parent().children(".child-menu").slideUp(250);
        $(this).children('.menu-arrow').removeClass("fa-caret-down").addClass("fa-caret-left");

    }else{
        $(this).parent().addClass("active");
        $(this).parent().children(".child-menu").slideDown(250);
        $(this).children(".menu-arrow").removeClass("fa-caret-left").addClass("fa-caret-down");
    }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
