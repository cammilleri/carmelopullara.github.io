$(document).ready(function(){

  $(window).load(function() {
    $("#preloader").fadeOut();
    $("#mask").delay(1000).slideUp(400);
  });

	$("#contact-form" ).validate({
    errorElement: "span",
    errorPlacement: function(error, element) {},
    highlight: function(element, errorClass) {        
      $(element).parent().removeClass('success').addClass('error');
    },
    unhighlight: function(element, errorClass) {
      $(element).parent().removeClass('error').addClass('success');
    },
    rules: {
      fullname: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true            
      }
    },
    submitHandler: function(form) {
    	$.ajax({
        dataType: 'jsonp',
        url: "http://getsimpleform.com/messages/ajax?form_api_token=abaa00418fede95fb4760b676ff77c24",
        data: {
          name: $('#fullname').val(),
          email: $('#email').val(),
          message: $('#message').val(),
        }
      }).done(function() {
       $('#form').slideUp(600);
       $('#sented').delay(600).slideDown(600);
     });
    }
  });

  $('.animated').appear(function(){
    var element = $(this);
    var animation = element.data('animation');
    var animationDelay = element.data('delay');
    if (animationDelay) {
      setTimeout(function(){
        element.addClass( animation + " visible" );
        element.removeClass('hiding');        
      }, animationDelay);
    }else {
      element.addClass( animation + " visible" );
      element.removeClass('hiding');      
    }    
  },{accY: -150});

  $('.slider').flexslider({
    controlNav: false,
    directionNav: false,
    animation: "slide",
    slideshowSpeed: 5000,
    keyboard: false
  });

  $('#toggle').click(function(){
    $('#nav').toggleClass('active');
    $('body').toggleClass('has-sidebar');
  });

  $('#main-menu li a').click(function(){
    if ($(window).width() < 992) {
      $('#nav').removeClass('active');
      $('body').removeClass('has-sidebar');
    }
  });

  $(window).resize(function(){
    $('body').removeClass('has-sidebar');
    $('#nav').removeClass('active');
  });

  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

  $('.socials li a').tooltip({trigger: 'hover', placement: 'top'});

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('body').removeClass('has-sidebar');
      $('#nav').removeClass('active');
    }
  });

  $('input, textarea').placeholder();

});
