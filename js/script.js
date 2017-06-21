var padding = 60;

var scrollPadding;

var onloadCallback = function () {
    grecaptcha.render('recaptcha', {
        sitekey: '6 Ldg4CUUAAAAALlrP_Y_JvA2gu1k2OrxAOUkkQMh',
        theme: 'dark',
        callback: function () {
            $('#button-mail').prop('disabled', false);
        }
    });
};

(function () {
    emailjs.init("user_w20XTeQLkQ2DY0hLEByAL");
})();



function mediaFunction() {
    var tooltipRows = $('tr[data-toggle="tooltip"]');
    var pills = $('.nav-pills');
    tooltipRows.tooltip('dispose');
    if ($(window).width() > 991) {
        tooltipRows.tooltip({
            placement: 'left'
        });
        pills.removeClass('flex-column');
        scrollPadding = padding;
    } else {
        tooltipRows.tooltip({
            placement: 'top'
        });
        if ($(window).width() > 767) {
            pills.removeClass('flex-column');
            scrollPadding = padding;
        } else {
            pills.addClass('flex-column');
            scrollPadding = 215;
        }
    }
}

function sendEmail() {
    var msg = $.trim($('#form-mail-message').val());
    if (msg !== '') {
        emailjs.send("testGmail", "template", {
            "message_html": msg
        });
        $("#alert-mail").fadeTo(2800, 1).slideUp(600);
    }
}



$("#alert-mail").hide();

mediaFunction();

$(window).on('resize', mediaFunction);

$('[data-toggle="tooltip"]').tooltip();

$('body').scrollspy({
    target: '#main-nav',
    offset: scrollPadding
});

$('#main-nav').on('click', 'a', function (event) {
    event.preventDefault();
    var item = $(this);
    var href = $(item).attr('href');
    var place = $(href).offset().top - scrollPadding;
    $('body,html').animate({
        scrollTop: place
    }, 700);
});

$('#table').bootstrapTable({
    pagination: true,
    pageList: [23, 30, 50, 100],
    pageSize: 23,
    search: true,
    columns: [{
        field: 'player',
        title: 'гравець',
        sortable: 'true',
    }, {
        field: 'position',
        title: 'позиція',
        align: 'center',
        sortable: 'true',
    }, {
        field: 'club',
        title: 'клуб',
        align: 'center',
        sortable: 'true'
    }, {
        field: 'birthday',
        title: 'день народження',
        align: 'center',
        sortable: 'true'
    }, {
        field: 'height',
        title: 'зріст',
        align: 'center',
        sortable: 'true'
    }, {
        field: 'weight',
        title: 'вага',
        align: 'center',
        sortable: 'true'
    }, {
        field: 'match',
        title: 'матчі',
        align: 'center',
        sortable: 'true'
    }, {
        field: 'gool',
        title: 'голи',
        align: 'center',
        sortable: 'true'
    }],
    data: [{
        player: 'Андрій П\'ЯТОВ',
        position: 'воротар',
        club: 'Шахтар (Україна)',
        birthday: '28.06.1984',
        height: 190,
        weight: 78,
        match: 74,
        gool: 0
    }, {
        player: 'Євген ХАЧЕРІДІ',
        position: 'захисник',
        club: 'Динамо (Україна)',
        birthday: '28.07.1987',
        height: 197,
        weight: 80,
        match: 45,
        gool: 3
    }, {
        player: 'Ярослав РАКИЦЬКИЙ',
        position: 'захисник',
        club: 'Шахтар (Україна)',
        birthday: '03.08.1989',
        height: 180,
        weight: 70,
        match: 46,
        gool: 4
    }, {
        player: 'Богдан БУТКО',
        position: 'захисник',
        club: 'Шахтар (Україна)',
        birthday: '13.01.1991',
        height: 180,
        weight: 68,
        match: 26,
        gool: 0
    }, {
        player: 'Едуард СОБОЛЬ',
        position: 'захисник',
        club: 'Зоря (Україна)',
        birthday: '20.04.1995',
        height: 186,
        weight: 73,
        match: 5,
        gool: 0
    }, {
        player: 'Тарас СТЕПАНЕНКО',
        position: 'півзахисник',
        club: 'Шахтар (Україна)',
        birthday: '08.08.1989',
        height: 181,
        weight: 76,
        match: 39,
        gool: 3
    }, {
        player: 'Руслан МАЛІНОВСЬКИЙ',
        position: 'півзахисник',
        club: 'Генк (Бельгія)',
        birthday: '08.08.1989',
        height: 181,
        weight: 79,
        match: 5,
        gool: 0
    }, {
        player: 'Денис ГАРМАШ',
        position: 'півзахисник',
        club: 'Динамо (Україна)',
        birthday: '19.04.1990',
        height: 187,
        weight: 77,
        match: 28,
        gool: 2
    }, {
        player: 'Андрій ЯРМОЛЕНКО',
        position: 'півзахисник',
        club: 'Динамо (Україна)',
        birthday: '23.10.1989',
        height: 187,
        weight: 76,
        match: 70,
        gool: 29
    }, {
        player: 'Євген КОНОПЛЯНКА',
        position: 'півзахисник',
        club: 'Шальке-04 (Німеччина)',
        birthday: '29.09.1989',
        height: 176,
        weight: 69,
        match: 63,
        gool: 14
    }, {
        player: 'Євген СЕЛЕЗНЬОВ',
        position: 'нападник',
        club: 'Карабюкспор (Туреччина)',
        birthday: '20.07.1985',
        height: 188,
        weight: 85,
        match: 55,
        gool: 11
    }, {
        player: 'Денис БОЙКО',
        position: 'воротар',
        club: 'Малага (Іспанія)',
        birthday: '29.01.1988',
        height: 197,
        weight: 85,
        match: 5,
        gool: 0
    }],
    formatSearch: function () {
        return 'Пошук...';
    },
    formatShowingtooltipRows: function (pageFrom, pageTo, totaltooltipRows) {
        return 'Відображено з ' + pageFrom + ' по ' + pageTo + '. Всього: ' + totaltooltipRows;
    }
});

$('#button-mail').prop('disabled', true);

$('.modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset();
    grecaptcha.reset();
    $('#button-mail').prop('disabled', true);
});
