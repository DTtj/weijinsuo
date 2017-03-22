/*
* @Author: Administrator
* @Date:   2017-03-22 16:44:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-22 19:10:05
*/

'use strict';
$(function () {
	var $items = $("#slide .item");

	var isSmall = 768;

	// 添加屏幕变化事件
	$(window).on("resize",function(){
		// 屏幕宽度
		var windowWidth = $(window).width();

		// 根据屏幕宽度设置大小图片
		if (windowWidth > isSmall) {
			$items.each(function(index, el) {
				var $item = $(this);
				var $imgSrc = $item.data("large-image");

				$item.css("background-image","url("+$imgSrc+")");
			});
		}else if(windowWidth < isSmall){
			$items.each(function(index, el) {
				var $item = $(this);
				var $imgSrc = $item.data("small-image");

				$item.html('<img src="'+$imgSrc+'" alt="" />');
			});	
		};
	}).trigger('resize')//定义事件的时候立即触发

	//初始化工具提示插件
    $('[data-toggle="tooltip"]').tooltip();

    var slide = document.querySelector('.carousel');
    var startX = 0;
    var endX = 0;
    slide.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    slide.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            //从左往右滑
            $('.carousel').carousel('prev');
        } else {
            //是从右往左滑
            $('.carousel').carousel('next');
        }
    });

})

