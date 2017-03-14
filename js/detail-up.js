$(function(){
	var indexB,bigClick=false;

	var draws = [
		["大师画作" , "传世佳作"],
		["现代玉器", "古代玉器"],
		["木雕"]
	];

	$(".works-search .works-li2").eq(0).on('click',function(){
		$(".work-type").show();
	});

	$(".work-ul li").click(function(event){
		event.stopPropagation();//阻止冒泡行为
		bigClick = true;//确认第一菜单已经选择(指请选择这级菜单)
		indexB = $(this).index();//使一级菜单与二级菜单的索引号一致
		var bigText = $(this).html();//声明一个变量接受二级菜单的内容
		$(this).parent().parent().parent().find('.search-span').html(bigText);
		$(".work-type").hide();
		smallBig();
	});

	function smallBig(){
		$(".works-search .works-li").eq(1).find('.small-search').html(draws[indexB][0]);
	}

	$(".works-search .works-li").eq(1).on('click',function(){
		if(bigClick){
			$(".small-type").show();
			var $li = [];
			$.each(draws[indexB],function(i){
				$li.push("<li>"+draws[indexB][i]+"</li>");
			});
			$(".small-ul").html($li.join(" "));
		}
	});

	$(".small-ul").delegate('li', 'click', function(event) {
		event.stopPropagation();
		var index = $(this).index();
		var smallText = $(this).html();
		$(this).parent().parent().parent().find('.small-search').html(smallText);
		$(".small-type").hide();
	});

	// 表单提交
	$(".next-one").click(function(){
		$(".works-form").attr('action', 'javascript:;');
		$(".works-form").submit();
	});

	 /*上传图片start*/
	$('#works').diyUpload({
		width:"690px"
	});

})