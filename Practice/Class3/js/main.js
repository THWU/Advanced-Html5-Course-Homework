$(document).ready(function() {
            
    $('p').fadeOut();
    //$('p').fadeIn();
    
    var docList = $('a[href$=doc]');
    $('#hide').click(function() {
       docList.hide(); 
    });
    
    $('#show').click(function() {
       docList.show(); 
    });
    
    $('#toggle').click(function() {
       docList.toggle(); 
    });
});