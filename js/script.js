$('tr[data-toggle="tooltip"]').tooltip({
    placement: 'left'
});

$('[data-toggle="tooltip"]').tooltip();

$('#main-nav').on('click', 'a', function (event) {
    event.preventDefault();
    var item = $(this);
    var href = $(item).attr('href');
    var place = $(href).offset().top - 60;
    $('body,html').animate({
            scrollTop: place
        }, 700,
        function () {
            //$('.navbar-nav').find('.active').removeClass('active');
            //$(item).parent().addClass('active');
        });
});
