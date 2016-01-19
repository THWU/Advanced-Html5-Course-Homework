$(function(){
    // 
    var duration = 300;

    // typo ----------------------------------------
    //$('#typo').typoShadow();
    var $aside = $('.page-main > aside');
    var $asideButton = $aside.find('button');
    $asideButton.click(function() {
        
        $aside.toggleClass('open');
        
        if ($aside.hasClass('open')) {
            
            $aside.animate({
                left: '-50px'
            }, duration, 'easeOutBack', function() {
                $asideButton.children('img').prop('src', 'img/btn_close.png');
            });
        }else {
            
            $aside.animate({
                left: '-350px'
            }, duration, 'easeInBack', function() {
                $asideButton.children('img').prop('src', 'img/btn_open.png');
            });
        }
        
    });
});
