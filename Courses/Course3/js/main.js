$(document).ready(function() {
            
    //$('p').fadeOut();
    //$('p').fadeIn();
    var $title = $('#title');
    
    $('#titleSwitch').click(function() {
         $title.toggle('slow');
    });
    
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