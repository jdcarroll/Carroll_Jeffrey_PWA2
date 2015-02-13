/**
 * Created by jeffreycarroll on 2/5/15.
 */
(function($) {

    /* ================= logged in out menu ====================== */

        $('body').on('click','#login', function(e){
            e.preventDefault();
           $('#user_menu').slideDown(function(){
           });
            ajax('#main','xhr/blank.html')
        });

        $('body').on('click','#signOut', function(e){
            e.preventDefault();
            $('#user_menu').slideUp();
            ajax('#main','xhr/home.html')
        });

    /* ================= logged in out menu ====================== */
    /* =============== Our Sports tabbed Menu ==================== */
        $('body').on('click','#baseball', function(e){
            e.preventDefault();
            ajax('.iconBox','xhr/baseball.html');
        });

        $('speed');
    /* =============== Our Sports tabbed Menu ==================== */
    /* ================ Baseball tabbed Menu ===================== */

        $('body').on('click','#catching', function(e){
            e.preventDefault();
            var title = "Catching";
            ajax('#panel','xhr/tabbed_panel/catch.html');
            $('#courseType').html(title);
            $('#catching').parent().addClass('active');
        });

        $('body').on('click','#pitching', function(e){
            e.preventDefault();
            var title = "Pitching";
            ajax('#panel','xhr/tabbed_panel/pitch.html');
            $('#courseType').html(title);
        });
        $('body').on('click','#batting', function(e){
            e.preventDefault();
            var title = "Batting";
            ajax('#panel','xhr/tabbed_panel/bat.html');
            $('#courseType').html(title);
        });

    /* ================ Baseball tabbed Menu ===================== */
    /* ======================== modal ============================ */

        $('.modalClick').on('click', function(event){
            event.preventDefault();
            $('#overlay')
                .fadeIn()
                .find('#modal')
                .fadeIn();
        });

        $('.close').on('click', function(event){
            event.preventDefault();
            $('#overlay')
                .fadeOut()
                .find('#modal')
                .fadeOut();
        });

    /* ======================== modal ============================ */
    /* ======================== Ajax ============================= */
    function ajax(location, url) {
//    function industry() { // this function is to load the industry page
//        var request = new XMLHttpRequest(); // this object XMLHttpRequest() is the ajax object making asynchronous javascript
//        // possible and puts it into a variable called request
//        request.open('GET', 'data/industry.html'); // this line takes the request variable and applies the open method to it
//        // which takes two arguments ('the method to grab info either GET or POST', 'The Path to the file')
//        request.onreadystatechange = function () { // the onreadystatechange method determines the success on completion of
//            // an XMLHttpRequest 4 means success and 1 means failure.
//            if ((request.readyState === 4) && (request.status === 200)) { // I am checking the readystate for success and
//                // status of the request ajax object to verify that success.  If it fails it does nothing.
//                var personalContent = request.response; // I am setting the variable to of the ajax object value to then use
//                // in the document object model
//                document.getElementById("content").innerHTML = personalContent; // I am entering html into the id of the
//                // object to display on the html page
//            }
//        };
//        request.send();// This is the command that then sends everything back to the browser from the server in this case it
//        // is the local host
//    }
        $.ajax({
            type: "Post",
            url: url,
        }).done(function(content){
            $(location).fadeOut(function(){
                $(location).html(content).fadeIn()
            });
        });
    }
    /* ======================== Ajax ============================= */
    /* ======================= tooltip =========================== */


    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');

    }, function() {
        //Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).on("mousemove", (function(e) {
        var mousex = e.pageX + 20; // Get X position
        var mousey = e.pageY + 10; // Get Y position
        $('.tooltip').css({
            top: mousey,
            left: mousex
        })
    }));

    /* ======================= tooltip =========================== */

})(jQuery);