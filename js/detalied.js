/*
* @Author: Administrator
* @Date:   2017-02-18 17:42:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-20 19:18:36
*/

$(document).ready(function() {
	//测试数据 
	
	var data=[
		['https://docs.angularjs.org/api','image/test1.jpg','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_13.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_13.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_14.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_15.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_13.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_14.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_13.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_15.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_12.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_13.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_14.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_15.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_12.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_13.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_14.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
		['https://docs.angularjs.org/api','image/index_15.png','图片007','已出售','四儿分解符文换手机覅额无法弄四儿分解符文换手机覅额无法弄'],
	];

	var nums = 4;//每页出现的数量
	var pages = Math.ceil(data.length/nums);//得到总页数
	var $picture = $("#works-picture");
		//console.log(33);
	function thisDate(curr){
		//console.log(33);
		last = curr*nums-1;
		last = last >= data.length ? (data.length-1) : last;
		$picture.html(" ");
		
		for(var i=(curr*nums-nums);i<=last;i++){
			var datas = data[i];
			var $figure = $("<figure class='figure clear'>");
			var $a = $("<a href='javascript:;' class='fl figure-img'>");
			$("<img>").attr("src",datas[1]).appendTo($a);
			$a.appendTo($figure).attr('href', datas[0]);
			var $figcap = $("<figcaption class='text-img'>");
			var $ul = $("<ul class='figcaption-ul fl'>");
			$ul.appendTo($figcap);
			var $li1 = $("<li class='fl title-li title-on'>");
			$li1.appendTo($ul);
			$("<a>").attr('href', 'javascript:;').html(datas[2]+"<span id='span-li'>"+datas[3]+"</span>").appendTo($li1);
			var $li2 = $('<li class="fl title-off">');
			$("<a href='javascri:;'>").html("删除").appendTo($li2).on('click',function(){
				$(this).parents(".figure").hide();
			});
			$li2.appendTo($ul);
			$('<li class="fl title-li">').html(datas[4]).appendTo($ul);
			var $li4 = $('<li class="fl title-off">');
			$('<a href="javascript:;">').attr('href', 'javascript:;').html("转店铺出售").appendTo($li4);
			$li4.appendTo($ul);
			$figcap.appendTo($figure);
        	$figure.appendTo($picture);

		}
	}

	thisDate(4);

	//调用分页
	laypage({
	    cont: 'page-ul',
	    pages: pages,
	    curr:1,
	    first: '首页', //若不显示，设置false即可  
	    last: '尾页',
	    groups:4,
	  
	  jump: function(obj){
	         thisDate(obj.curr);
	    }
	})
});