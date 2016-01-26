$(function() {
   
   $('.page-header').each(function() {
      
      var $window = $(window),
          $header = $(this),
          $headerClone = $header.contents().clone(),
          $headerCloneContainer = $('<div class="page-header-clone"></div>');
          
      $headerCloneContainer.append($headerClone);
      $headerCloneContainer.appendTo('body');
      
      var threshold = $header.offset().top + $header.outerHeight();
      
      $window.on('scroll', $.throttle(1000/15, function() {
          
          $window.scrollTop() > threshold? $headerCloneContainer.addClass('visible'): $headerCloneContainer.removeClass('visible');
      }));
      
      $window.trigger('scroll');
   });
});