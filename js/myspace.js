/*
* @Author: Administrator
* @Date:   2017-02-16 12:42:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-20 14:29:06
*/
'use strict';
(function(jQuery){
	//banner导航菜单
	$(".banner-li").mouseover(function(){
		$(this).children('ul').show();
	});
	$(".banner-li").mouseout(function(){
		$(this).children('ul').hide();
	});

	//搜索框上的
	$(".search-ul>li").click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
	});

	//搜索框
	$(".key-text").focus(function(){
		$(this).val('');
	});

	$("#my").click(function(){
		$(this).css('padding-bottom', '0px').children('ul').hide();
	});

	 /*输入信息字数限制start*/
	$(".areaCom").each(function(index) {
		$(this).keyup(function() {
			var len = $(this).val().length;
			if(len>199){
               $(this).val($(this).val().substring(0,200));
			}
			$(".use-text").eq(index).html('已输入'+len+'个字').show();
			$(".limit-text").eq(index).html(',最多可输入200个字');
		});
	});

	$(".textarea").focus(function(){
		 $(this).css("border-color","#222");
	});
	$(".textarea").blur(function(){
		 $(this).css("border-color","#D1D1D1");
		 useText();
	});

	$(".article-textarea").focus(function(){
		 $(this).css("border-color","#222");
	});
	$(".article-textarea").blur(function(){
		 $(this).css("border-color","#D1D1D1");
		 useText();
	});

	$(".exp-textarea").focus(function(){
		 $(this).css("border-color","#222");
	});
	$(".exp-textarea").blur(function(){
		 $(this).css("border-color","#D1D1D1");
		 useText();
	});

	function useText(){
		$(".use-text").hide();
		$(".limit-text").html("限200个字以内");
	}

	
})(jQuery);