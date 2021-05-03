(function ($) {
    var currentQuestionsPage = 1;
    var currentSteps =['@Setp 1','Step 2 ','Step 3 ']

    $("#hamburger").on("click", function () {
        var sideBar = $("nav ul");
        $(this).toggleClass('open');
        sideBar.toggleClass("opened")

    })

    $(window).on('resize', function () {
        var sideBar = $("nav ul");
        var hamburger = $("#hamburger")
        var win = $(this);
        if (win.width() >= 810) {
            hamburger.removeClass('open');
            sideBar.removeClass("opened")
        }
        if(win.width()>650){
           if( $(".min-action-nav-btn").find("i").hasClass("fa-minus")){
               $(".min-action-btns").css("height","45px")
               $(".min-action-btns #btn2,.min-action-btns #btn1").css("display","none")
               $(".min-action-nav-btn").find("i").removeClass("fa-minus").addClass("fa-plus")
           }
        }

    });


$(".min-action-nav-btn").on("click",function (){
    if($(this).find("i").hasClass("fa-minus")){
        $(".min-action-btns").css("height","45px")
        $(".min-action-btns #btn2,.min-action-btns #btn1").css("display","none")
        $(this).find("i").removeClass("fa-minus").addClass("fa-plus")
    }else {
        $(".min-action-btns").css("height","140px")
        $(".min-action-btns #btn2,.min-action-btns #btn1").css("display","flex")
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus")
    }


})


function resetSteps(){
    $(`#questions1`).addClass("hide_section")
    $(`#questions2`).addClass("hide_section")
    $(`#questions3`).addClass("hide_section")
    currentSteps =['Setp 1','Step 2 ','Step 3 ']
    $('#steps').remove()
    // $("<div id='steps'></div>").insertAfter('#steps-container')
    $('#steps-container').append($("<div id='steps'></div>"))
}

    $("#next-btn").on("click",function (){
        if(currentQuestionsPage<3){

            resetSteps()

            currentQuestionsPage++
            currentSteps[currentQuestionsPage-1] ='@'+ currentSteps[currentQuestionsPage-1]


            $('#steps').progressbar({
                steps: currentSteps
            });
            $(`#questions`+currentQuestionsPage).removeClass("hide_section")

        }
    })


    $("#back-btn").on("click",function (){
        if(currentQuestionsPage>1){
            resetSteps()
            currentQuestionsPage--
            currentSteps[currentQuestionsPage-1] ='@'+ currentSteps[currentQuestionsPage-1]


            $('#steps').progressbar({
                steps: currentSteps
            });


            $(`#questions`+currentQuestionsPage).removeClass("hide_section")
            if(currentQuestionsPage===1){
                $(this).css("color",'#f1c7c7')
            }

        }

    })




    $("#obj1 .obj-card").flip({axis: 'x',trigger:'manual'});
    $("#obj2 .obj-card").flip({axis: 'x',trigger:'manual'});
    $("#obj3 .obj-card").flip({axis: 'x',trigger:'manual'});
    $("#obj4 .obj-card").flip({axis: 'x',trigger:'manual'});


    $("#obj1 .stars").starRating({
        initialRating: 4,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 15
    });
    $("#obj2 .stars").starRating({
        initialRating: 2.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 15
    });
    $("#obj3 .stars").starRating({
        initialRating: 4.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 15
    });
    $("#obj4 .stars").starRating({
        initialRating: 4.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 15
    });

    $("#recipe-info .stars").starRating({
        initialRating: 4.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 20
    });

    $("#related1 .stars").starRating({
        initialRating: 4.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 20
    });

    $("#related2 .stars").starRating({
        initialRating: 4.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 20
    });

    $("#related3 .stars").starRating({
        initialRating: 4.5,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 20
    });



    $('#steps').progressbar({
        steps: ['@Setp 1','Step 2 ','Step 3 ']
    });

})(jQuery);
