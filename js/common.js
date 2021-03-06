head.ready(function() {
	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});
	//dropdown
	$('.navigation__button').on('click', function() {
		$('.dropdown').toggleClass('is-open');
		$('.navigation__left').toggleClass('is-active');
		$(this).toggleClass('is-active');
		return false;
	});
	//valid
	$('.registerForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            dd: {
                validators: {
                    digits: {
                        format: 'DD',
                    }
                }
            },
            mm: {
                validators: {
                    digits: {
                        format: 'MM',
                    }
                }
            },
            yy: {
                validators: {
                    digits: {
                        format: 'YY',
                    }
                }
            }
        }
    });


	//calendar
	$('#calendar').fullCalendar({
		header: {
			left: 'today',
			right: 'month,agendaWeek,agendaDay',
			center: 'prev,title,next'
		},
		defaultDate: '2014-11-12',
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'Clean...',
				start: '2014-11-03'
			},
			{
				title: 'Clean...',
				start: '2014-11-10'
			},
			{
				title: 'Clean...',
				start: '2014-11-17'
			},
			{
				title: 'wtf...',
				start: '2014-11-17'
			},
			{
				title: 'wtf2...',
				start: '2014-11-17'
			},
			{
				title: 'Clean...',
				start: '2014-11-24'
			},
			{
				title: 'Clean...',
				start: '2014-12-01'
			}
		]
	});
	$('.box__button').on('click', function() {
		if($(this).parent('.box').hasClass('box-open')) {
			$(this).removeClass('is-open');
			$(this).addClass('is-close');
			$(this).parent('.box').removeClass('box-open');
			$(this).parent('.box').find('.box__inner').slideUp('fast');
		}
		else {
			$(this).addClass('is-open');
			$(this).removeClass('is-close');
			$(this).parent('.box').addClass('box-open');
			$(this).parent('.box').find('.box__inner').slideDown('fast');
		}
		return false;
	});
	$('.js-date').on('click', function() {
		$('.js-footer').slideToggle('fast');
		$('.is-geo').toggleClass('is-geo_grey');
		$('.is-image').toggleClass('is-image_grey');
	});
	$('.js-task-btn').on('click', function() {
		if($(this).hasClass('task__close')) {
			$(this).parents('.task').find('.task__inner').slideUp('fast');
			$(this).removeClass('task__close');
			$(this).addClass('task__open');
		}
		else {
			$(this).parents('.task').find('.task__inner').slideDown('fast');
			$(this).removeClass('task__open');
			$(this).addClass('task__close');
		}
		return false;
	});
	// $('.task__close').on('click', function() {
	// 	$(this).parents('.task').find('.task__inner').slideUp('fast');
	// 	$(this).removeClass('task__close');
	// 	$(this).addClass('task__open');
	// 	return false;
	// });
	// $('.task__open').on('click', function() {
	// 	$(this).parents('.task').find('.task__inner').slideDown('fast');
	// 	$(this).removeClass('task__open');
	// 	$(this).addClass('task__close');
	// 	return false;
	// });
});