$(document).ready(function(){
	$('#about p').waypoint(function(down) {
		$('#about p').each(function(index) {
		    $(this).delay(250*index*2).queue(function() { $(this).addClass('animated bounceIn one') });
		    $('#about img').addClass('animated bounceInRight one');
	    });
	}, { offset: '70%' });
    $('#whatido .ido').waypoint(function(down) {
		$('.ido').each(function(index) {
		    $(this).delay(250*index*2).queue(function() { $(this).addClass('animated flipInX one') });
	    });
	}, { offset: '70%' });
	$('#whatido .btn').waypoint(function(down) {
		$(this).addClass('animated bounceIn one');
	}, { offset: '70%' });
	$('#portfolio .work').waypoint(function(down) {
		$('.work').each(function(index) {
		    $(this).delay(250*index*2).queue(function() { $(this).addClass('animated bounceInDown one') });
	    });
	}, { offset: '70%' });
	$('#contact a').waypoint(function(down) {
		$('#contact a').each(function(index) {
		    $(this).delay(250*index*2).queue(function() { $(this).addClass('animated bounceIn one') });
	    });
	}, { offset: '70%' });

	$('#socials a').tooltip({trigger: 'hover', placement: 'bottom'});

	$("#contact-form" ).validate({
    errorElement: "span",
    errorPlacement: function(error, element) {        
        error.insertAfter(element).addClass('validation-error');        
    },
    success: function(success, element) {
        $(element).parent().removeClass('error').addClass('success');
    },
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
    messages: {
        fullname:{
            required: 'Compila questo campo'
        },
        email:{
            required: 'Compila questo campo',
            email: 'Inserisci un indirizzo email valido'
        },
        message: {
            required: 'Compila questo campo'
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
			$('.modal-header h2').text('Grazie!');
		 	$('.modal-body').html('<div class="sented"><i class="fa fa-check-circle"></i><h2>Messaggio inviato correttamente!</h2><p>Riceverai una risposta entro 48 ore lavorative.</p></div>');
		});
    }
});

$('input, textarea').placeholder();
});