$(function(){
    // 
    var duration = 800;

    // typo ----------------------------------------
    //$('#typo').typoShadow();
    $('#buttons1 button:nth-child(-n+4)')
        .on('mouseover', function() {
            $(this).stop(true).animate({
               backgroundColor : '##ae5e9b',
               color: '#FFF' 
            }, duration);
        })
        .on('mouseout', function() {
            $(this).stop(true).animate({
               backgroundColor : '#fff',
               color: '#ebc000' 
            }, duration);
        })
    
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseover', function() {
            $(this).stop(true).animate({
               borderWidth : '10px',
               color: '##ae5e9b' 
            }, duration, 'easeOutCubic');
        })
        .on('mouseout', function() {
            $(this).stop(true).animate({
               borderWidth : '0px',
               color: '#ebc000' 
            }, duration, 'easeOutCubic');
        })
        
    $('#buttons1 button:nth-child(n+9):nth-child(-n+12)')
        .on('mouseover', function() {
            $(this).children('.bg').stop(true).animate({
               width: '224px'
            }, duration, 'easeOutBounce');
        })
        .on('mouseout', function() {
            $(this).children('.bg').stop(true).animate({
               width: '0px'
            }, duration, 'easeInOutBack');
        })
    /*
    $('#buttons1 button:nth-child(4)').hover(
    function() {
        $(this).stop(true).animate({
            
        });
    }, function() {
        $(this).animate({backgroundcolor:"#fff"}); 
    });
    */
});
