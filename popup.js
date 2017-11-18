$('.popuptext').hide();
    $(".popup").on('click', function () {
         $('.popuptext').show();
});
    $('.popuptext').on('mouseleave', function() {
        $(this).hide();
    })

