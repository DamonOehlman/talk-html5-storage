$(function() {
    $('section[data-bg]').each(function() {
        var el = $(this),
            bgImage = el.data('bg') || el.attr('data-bg');
        
        el.css('background-image', 'url(' + bgImage + ')');
    });
});