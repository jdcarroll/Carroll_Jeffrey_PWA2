/**
 * Created by jeffreycarroll on 2/5/15.
 */
(function($) {

    /* ================= logged in menu ====================== */
        var user = false;
        $('body').on('click','#login', function(e){
            e.preventDefault();
            //ajax('#main','xhr/blank.html');
            $('#login').on('click', function(e){
                e.preventDefault;
                var username = $('#user').val();
                var pass = $('#pass').val();
                console.log("got values");

                $.ajax({

                    url: 'xhr/login.php',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        username: username,
                        password: pass
                    },

                    success: function(response){

                        console.log(user);
                        if (response.error){
                            window.location.assign('index.html');
                        }else{
                            user = response.user;
                            console.log(user.teamID);
                            $('#user_menu').slideDown(function(){
                            });
                            admin();
                        };
                    }
                })
            });
        });

        $('body').on('click','#signOut', function(e){
            e.preventDefault();
            $('#user_menu').slideUp();
            ajax('#main','xhr/home.html')
        });

    /* ================= logged in out menu ====================== */
    /* ======================= Projects ========================== */

    /* ======================= Projects ========================== */
    /* =============== Our Sports tabbed Menu ==================== */
        $('body').on('click','#baseball', function(e){
            e.preventDefault();
            ajax('.iconBox','xhr/baseball.html');
                    setTimeout(function(){

                        $.ajax({
                            url: 'xhr/get_projects.php',
                            type: 'get',
                            dataType: 'json',
                            success: function(response){
                                if(response.error){
                                    console.log(response.error);
                                }else{
                                   var result = response.projects;

                                    $.each(result, function(){

                                        $('#baseball_Links').append('<li><a id="'+ this.projectDescription +'" data-id="'+this.projectID+'">'+ this.projectName +'</a></li>')
                                    })
                                }
                            }
                        });
                    }, 1000)
        });


        $('speed');


    /* =============== Our Sports tabbed Menu ==================== */
    /* =============== accordion ==================== */

    /* =============== accordion ==================== */
    /* ================ Baseball tabbed Menu ===================== */

        $('body').on('click','#catching', function(e){
            e.preventDefault();
            var title = "Catching";
            ajax('#panel','xhr/tabbed_panel/'+title+'.html');
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
        $('body').on('click','#courseType', function(e){

            ajax('#modal', 'xhr/edit.html');
                var title = $('#courseType').html();
                console.log(title);
                $('#overlay').fadeIn().find('#modal').addClass('videoModal').fadeIn();
                setInterval(function(){
                        $('#courseTypeEditable').html("<h3>Edit " + title + " Categories</h3>");
                }, 300);
            var projID = $('#baseball_links').val();
            console.log("This is the project id: ",projID);
            $.ajax({
                url: 'xhr/get_projects.php',
                type: 'get',
                dataType: 'json',
                data : {
                    projectID: projID
                },
                success: function(response){
                    if(response.error){
                        console.log(response.error);
                    }else {
//                        var array = ['pitching', 'batting', 'catching'];
                        console.log(response);
                        var currentName = response.projects[0].projectName;
                        console.log(currentName);
                        $('').val();
                    }
                }
            });
        });

        $('body').on('click','#editSubmit', function(e){
            e.preventDefault();






            var changedCategoriesName = $('#editCategoriesName').val();
            var changedCategoriesDescription = $('#editCategoriesDescription').val();
            var changedCategoriesDate = $('#editCategoriesDate').val();

        });
    /* ================ Baseball tabbed Menu ===================== */
    /* ======================== modal ============================ */
            $('body').on('click', '.modalClick', function(event){
                if (user.teamID == 1){
                    $('#modal').removeClass('regModal').addClass('videoModal');
                    ajax('#modal', 'xhr/true_modal.html');
                } else if (user == false){
                    $('#modal').removeClass('videoModal').addClass('regModal');
                    ajax('#modal','xhr/false_modal.html');
                }
                event.preventDefault();
                $('#overlay')
                    .fadeIn()
                    .find('#modal')
                    .fadeIn();
            });


        $('body').on('click', '.close', function(event){
            event.preventDefault();
            $('#overlay')
                .fadeOut()
                .find('#modal')
                .fadeOut();
        });

    /* ======================== modal ============================ */
    /* ================== catagory modal ========================= */
        $('body').on('click','#categories', function(){
           ajax('#modal','xhr/categories.html');
            event.preventDefault();
            $('#overlay')
                .fadeIn()
                .find('#modal').addClass('Modal')
                .fadeIn();
                setInterval(function(){ $('#categoryCreationDate').ready(function(){
                    $(this).datepicker();
                })}, 3000);


            $.ajax({
                url: 'xhr/get_projects.php',
                type: 'get',
                dataType: 'json',


                success: function(response) {
                    setTimeout(function () {
                        var result = response.projects
                        $.each(result, function () {
                            $('#catagory_list').append('<option value="' + this.id + '">' + this.projectName + '</option>')
                        })
                    }, 1000)
                }
            });

        $('body').on('click','#deleteCategory', function(e){
            var projId = $('#catagory_list').val();
            e.preventDefault();
            $.ajax({
                url: 'xhr/delete_project.php',
                data: {
                    projectID: projId
                },
                type: 'post',
                dataType: 'json',

                success: function(response){
                    console.log('success')
                    if(response.error){
                        alert(response.error);
                    } else {


                    }
                }
            })
        });

        });

    $('body').on('click','#addButton164532', function(){
            var categoryName= $('#categoryName').val(),
                categoryDescription = $('#categoryDescription').val(),
                categoryCreationDate = $('#categoryCreationDate').val();
            $.ajax({
                url: "xhr/new_project.php",
                type: "post",
                dataType: "json",
                data: {
                    projectName: categoryName,
                    projectDescription:categoryDescription,
                    dueDate: categoryCreationDate,
                    status: ' '
                },
                success: function(response){
                    console.log('testing for success');
                    if(response.error){
                        alert(response.error);
                    }else{
                    };
                }
        });
    });

    $('body').on

    $('body').on('click', '.close', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal').removeClass('Modal')
            .fadeOut();
    });

    /* ================== catagory modal ========================= */
    /* ======================== admin ============================ */
            function admin(){
                if (user.teamID == 1) {
                    ajax('#admin', 'xhr/admin.html');
                }
            };
    /* ======================== admin ============================ */
    /* ======================== Ajax ============================= */
    function ajax(location, url) {
        $.ajax({
            type: "Post",
            url: url
        }).done(function(content){
            $(location).fadeOut(function(){
                $(location).html(content).fadeIn()
            });
        });
    }
    /* ======================== Ajax ============================= */
    /* ======================= account info =========================== */
        var updateAcct = function(){
            $.ajax({
                url: 'xhr/get_user.php',
                type: 'get',
                dataType: 'json',
                success: function(response){
                    if(response.error){
                        console.log(response.error);
                    }else{
                        var updatefirstname = response.user.first_name;
                        var updatelastname = response.user.last_name;
                        var updateemail = response.user.email;

                        $('#updatefirstname').val(updatefirstname);
                        $('#updatelastname').val(updatelastname);
                        $('#updateemail').val(updateemail);
                    };
                }
            });

            $('#updateAcctBtn').on('click', function(e){
                e.preventDefault();
                var changedfirstname = $('#updatefirstname').val();
               var changedlastname = $('#updatelastname').val();
               var changedemail = $('#updateemail').val();

                $.ajax({
                    url: 'xhr/update_user.php',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        first_name: changedfirstname,
                        last_name: changedlastname,
                        email: changedemail
                    },

                    success: function(response){
                        if(response.error){
                            console.log(response.error);
                        }else{
                            alert('account updated');
                        }
                    }
                })
            });
        };
        updateAcct();


    /* ======================= account info =========================== */
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
    /* ====================== Register =========================== */
        $('body').on('submit','#sign_up', function(e){
            e.preventDefault();
            var firstName = $('#fname').val(),
                 lastName = $('#lname').val(),
                    email = $('#email').val(),
                 password = $('#password').val();

                console.log(firstName + " " + lastName + " " + email + " " + password);
            $.ajax({
                url: 'xhr/register.php',
                type: 'post',
                datatype: 'json',
                data : {
                    firstname: firstName,
                    lastname: lastName,
                    username: email,
                    email: email,
                    password: password
                },

                success: function(response){
                    if(response.error){
                        alert(response.error)
                    }else{
                        console.log("success");
                    }
                }
            })

        });
    /* ====================== Register =========================== */
    /* ========================= data ============================ */

    /* ========================= data ============================ */
    /* ====================== show user =========================== */
    $.getJSON("xhr/check_login.php", function(data){
        $.each(data, function(key, value){
            $("#displayName").html(value.first_name);
        })
    });
    /* ====================== show user =========================== */
    /* ======================== logout =========================== */
        $('body').on('click','#signOut', function(e){
            e.preventDefault();
            $.get('xhr/logout.php', function(){
                $('#user_menu').slideUp(function(){
                });
            })
        });
    /* ======================== logout =========================== */

})(jQuery);

