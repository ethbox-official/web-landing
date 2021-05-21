function scroll_to(element)
{
    var offset = $(element).offset().top;
    var margin_padding = parseInt($(element).css("margin-top"), 10) + parseInt($(element).css("padding-top"), 10);
    $('html, body').animate({scrollTop: (offset - margin_padding)}, 250);
}