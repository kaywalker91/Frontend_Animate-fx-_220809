$(document).ready(function(){

    var stat = true;

    $(".box1").click(function(){
        $(this).hide();
    });

    $("#btn2").click(function(){
        if(stat){
            $("#box2").hide();
            stat = false;
        }else{
            $("#box2").show();
            stat = true;
        }
    });

    $("#btn3").click(function(){
        $("#box3").fadeOut(1000);
        $("#box3").fadeIn(1000);
        $("#box3").slideUp(1000);
        $("#box3").slideDown(1000);
        $("#box3").fadeOut();
        $("#box3").show(2000, function(){
            $(this).css("background-color", "green");
        });
    });

    $(".item_title").click(function(){

        $(this).parent(".item").siblings().children(".item_cont").slideUp();
        $(this).parent(".item").siblings().children(".item_title").children(".caret").css("transform", "rotate(45deg)");
        $(this).parent(".item").siblings().removeClass("active");

        // $(this).next(".item_cont").slideToggle();
        if($(this).parent(".item").hasClass("active")){
            $(this).next(".item_cont").slideUp();
            $(this).children(".caret").css("transform", "rotate(45deg)");
            $(this).parent(".item").removeClass("active");
        }else{
            $(this).next(".item_cont").slideDown();
            $(this).children(".caret").css("transform", "rotate(225deg)");
            $(this).parent(".item").addClass("active");
        }
    });

    $("#box4").click(function(){

        $(this).animate({marginLeft: "1100px"}, 1000, "swing", function(){
            $(this).animate({marginTop: "700px"});
            $(this).animate({marginLeft: "0px"});
            $(this).animate({marginTop: "0px"});
        });

        // $(this).animate({marginLeft: "0px"}, 1000, "swing", function(){
        //     // $(this).animate({marginLeft: "200px"});
        // });
        
    });

    $("#box5").click(function(){

        $(this).animate({
            marginLeft: "1100px"
        }, {
            duration: 1000, 
            easing: "swing",
            complete: function(){
                $(this).animate({marginTop: "700px"});
                $(this).animate({marginLeft: "0px"});
                $(this).animate({marginTop: "0px"});
            }
        });
        
    });

    $("#box6").click(function(){

        $(this).animate({
            jiho: 360
        }, {
            duration: 1000, 
            easing: "swing",
            step: function(now){
                $(this).css("transform", "rotate("+now+"deg)");
            },
            complete: function(){}
        });
        
    });


});
