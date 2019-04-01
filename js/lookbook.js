// Lookbook images pop-up
$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});


$(document).ready(function(){
            
    // Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#Back-top').fadeIn();
        } else {
            $('#Back-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#Back-top').click(function(){
        $('html, body').animate({scrollTop : 0},'slow');
        return false;
    });

});
