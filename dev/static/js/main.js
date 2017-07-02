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
});
