$('tr[data-toggle="tooltip"]').tooltip({
	placement: 'left'
});

$('[data-toggle="tooltip"]').tooltip();


$('#main-nav').on('click', 'a', function (event) {
	event.preventDefault();
	var id = $(this).attr('href');
	var top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 700);
});
