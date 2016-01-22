$(function () {

    $('.slideshow').each(function () {        
        
        //  透過 jQuery 取得的物件，變數名稱前面以 '$' 為開頭
        var $slideshow = $(this),
            $slideshowSlides = $slideshow.find('.slideshow-slides'),
            $imgs = $slideshowSlides.find('img'),
            $nav = $slideshow.find('.slideshow-nav'),
            $indicator = $slideshow.find('.slideshow-indicator'),
            imgsCount = $imgs.length,
            indicatorHtml = '',
            easing = 'easeInOutExpo',   //  效果的運動方程式
            duration = 3000,    //  效果執行的時間
            interval = 1000,    //  圖片切換的時間
            currentIndex = 0,
            timer;

        $imgs.each(function (i) {

            $(this).css({ left: 100 * i + '%' });
            indicatorHtml += '<a href="javascript:goToSlide(' + i + ')">' + (i) + '</a>';
        });

        $indicator.html(indicatorHtml);
        
        //  移動圖片，更新導覽按鈕
        function goToSlide(index) {
            $slideshowSlides.animate({
                left: -100 * index + '%'
            }, duration, easing);
            currentIndex = index;
            updateNav();
        }

        function updateNav() {
            var $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');
            if (currentIndex === 0) {
                $navPrev.addClass('disable');
            }else if (currentIndex === imgsCount - 1) {
                $navNext.addClass('disable');
            }else {
                $navPrev.removeClass('disable');
                $navNext.removeClass('disable');
            }
        }
        
        $indicator.find('a')
            .removeClass('active')
            .eq(currentIndex)
            .addClass('active');   
        
        //  顯示下一張
        function startTimer() {
            
            timer = setInterval(function() {
                var nextIndex = (currentIndex + 1) % imgsCount;
                goToSlide(nextIndex);
            }, interval);
        }
        
        function stopTimer() {
            
            clearInterval(timer);
        }
        
        //  設定定時呼叫
        //setInterval(slide, interval)
    });
});