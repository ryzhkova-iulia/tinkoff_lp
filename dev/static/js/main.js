// $(function () {
//    $(".toggle").on("click", function () {
//       $(".menu-block").toggleClass("menu-block_mobile");
//    })
// });

$(function () {
    $(".js-category").select2({
        theme : "default flat"
    });

    $(".flat .select2-selection--multiple").mCustomScrollbar({
        scrollInertia: 0,
        alwaysShowScrollbar: 0,
        axis:"y",
        autoExpandScrollbar : true,
        contentTouchScroll: true,
        documentTouchScroll: true

    });


    $(".form-fieled input").on("change", function () {
        var $formField = $(this).parent(".form-fieled");
        if (this.value && this.value.length > 0) {
            $formField.addClass("form-fieled_has-content");
        } else {
            $formField.removeClass("form-fieled_has-content");
        }
    }).trigger("change");


    var cardItems = [
        {
            id : 1,
            title : "Tinkoff Black",
            sub : '78 000 Р',
            i : './static/img/content/card1.svg'
        },
        {
            id : 2,
            title : "All Airlines",
            sub : '50 000 Р',
            i : './static/img/content/card2.svg'
        },
        {
            id : 3,
            title : "Alfa Bank Debet",
            sub : '',
            i : './static/img/content/card3.svg'
        },
        {
            id : 4,
            title : "Новая карта",
            sub : '',
            i : './static/img/content/card4.svg'
        }
    ];

    function templateCardItem(state) {

        if (!state.id) {
            return state.title;
        }

        return $(
            "<span class='select-item clearfix'>" +
                "<span class='select-item__content" + (state.sub ? "" : " select-item__content_single") + "'>" +
                    "<span class='select-item__title'>" + state.title + "</span>" +
                    (function () {
                        if (state.sub) {
                            return "<span class='select-item__sub'>" + state.sub + "</span>";
                        } else {
                            return "";
                        }
                    })() +
                "</span>"  +
                "<img class='select-item__icon' src='" + state.i + "' />" +
            "</span>"
        );
    };

    $(".js-card").select2({
        data : cardItems,
        theme : "default card",
        templateSelection : templateCardItem,
        templateResult : templateCardItem
    });
});
