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

$('#table').bootstrapTable({
    //striped: true,
    //clickToSelect: true,
    //showColumns: true,
    //showRefresh: true,
    //detailView: true,
    pagination: true,
    pageList: [23, 30, 50, 100],
    pageSize: 23,
    search: true,
    columns: [{
        field: 'player',
        title: 'гравець'
    }, {
        field: 'club',
        title: 'клуб'
    }, {
        field: 'birthday',
        title: 'день народження'
    }, {
        field: 'height',
        title: 'зріст'
    }, {
        field: 'weight',
        title: 'вага'
    }, {
        field: 'match',
        title: 'матчі'
    }, {
        field: 'gool',
        title: 'голи'
    }],
    data: [{
        player: 'Андрій П\'ЯТОВ',
        club: 'Шахтар (Україна)',
        birthday: '28.06.1984',
        height: 190,
        weight: 78,
        match: 74,
        gool: 0
    }, {
        player: 'Євген ХАЧЕРІДІ',
        club: 'Динамо (Україна)',
        birthday: '28.07.1987',
        height: 197,
        weight: 80,
        match: 45,
        gool: 3
    }, {
        player: 'Ярослав РАКИЦЬКИЙ',
        club: 'Шахтар (Україна)',
        birthday: '03.08.1989',
        height: 180,
        weight: 70,
        match: 46,
        gool: 4
    }],
    formatSearch: function () {
        return 'Пошук...';
    },
    formatShowingRows: function (pageFrom, pageTo, totalRows) {
        return 'Відображено з ' + pageFrom + ' по ' + pageTo + '. Всього: ' + totalRows;
    }
});
