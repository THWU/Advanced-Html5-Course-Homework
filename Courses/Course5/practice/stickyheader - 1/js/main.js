$(function () {

    $('.page-header').each(function () {

        var $header = $(this),
            $window = $(window),
            $body = $('body'),
            headerOffsetTop = $header.offset().top;

        $window.on('scroll', function () {

            $window.scrollTop() > headerOffsetTop ? $header.addClass('sticky'): $header.removeClass('sticky');
        });
    });
});