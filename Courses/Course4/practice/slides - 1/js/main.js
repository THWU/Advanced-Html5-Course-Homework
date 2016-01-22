$(function() {

    
    $('.slideshow').each(function() {
        
        //  透過 jQuery 取得的物件，變數名稱前面以 '$' 為開頭
        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;
            
        //  設定第一張
        $slides.eq(currentIndex).fadeIn();
        
        //  顯示下一張
        function showNextSlide() {
            //  設定 Index 範圍
            //var nextIndex = (currentIndex ++ > slideCount)? 0: currentIndex ++;
            var nextIndex = (currentIndex + 1) % slideCount;
            //  隱藏上一張
            $slides.eq(currentIndex).fadeOut();
            //  顯示下一張
            $slides.eq(nextIndex).fadeIn();
            //  替換 currentIndex
            currentIndex = nextIndex;
        }
        
        //  設定定時呼叫
        setInterval(showNextSlide, 2000)
    });
});