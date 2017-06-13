var pad = 60;



function mediaFunction() {
    var rows = $('tr[data-toggle="tooltip"]');
    var pills = $('.nav-pills');
    rows.tooltip('dispose');
    if ($(window).width() > 991) {

        rows.tooltip({
            placement: 'left'
        });
    } else {
        rows.tooltip({
            placement: 'top'
        });
        if ($(window).width() > 767) {
            pills.removeClass('flex-column')
            pad = 60;
        } else {
            pills.addClass('flex-column');
            pad = 180;
        }
    }
}



mediaFunction();

$(window).on('resize', mediaFunction);

$('#but-mail').tooltip({
    html: true,
    title: 'Відправити<br>повідомлення<br>про помилку',
    placement: 'bottom'
});

$('[data-toggle="tooltip"]').tooltip();

$('body').scrollspy({
    target: '#main-nav',
    offset: pad
});

$('#main-nav').on('click', 'a', function (event) {
    event.preventDefault();
    var item = $(this);
    var href = $(item).attr('href');
    var place = $(href).offset().top - pad;
    $('body,html').animate({
        scrollTop: place
    }, 700);
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
    //showFooter: true,
    columns: [{
        field: 'player',
        title: 'гравець',
        sortable: 'true',
        // footerFormatter: 'Головний тренер:'
    }, {
        field: 'position',
        title: 'позиція',
        sortable: 'true',
    }, {
        field: 'club',
        title: 'клуб',
        sortable: 'true'
    }, {
        field: 'birthday',
        title: 'день народження',
        sortable: 'true'
    }, {
        field: 'height',
        title: 'зріст',
        sortable: 'true'
    }, {
        field: 'weight',
        title: 'вага',
        sortable: 'true'
    }, {
        field: 'match',
        title: 'матчі',
        sortable: 'true'
    }, {
        field: 'gool',
        title: 'голи',
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
    }],
    formatSearch: function () {
        return 'Пошук...';
    },
    formatShowingRows: function (pageFrom, pageTo, totalRows) {
        return 'Відображено з ' + pageFrom + ' по ' + pageTo + '. Всього: ' + totalRows;
    }

    //	footerStyle: function footerStyle(value, row, index) {
    //		return {
    //			css: {
    //				'font-weight': 'bold',
    //				border: 'none'
    //			}
    //		};
    //	}

});
