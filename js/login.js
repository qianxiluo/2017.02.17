/*
* @Author: Administrator
* @Date:   2017-02-18 00:23:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-28 11:58:58
*/

//登录页面
function newLogin(){
	
	//获取页面的高度与宽度
	var oWidth = document.body.scrollWidth;
	var oHeight = document.body.scrollHeight;

	//获取可视区域的高度和宽度
	var kHeight = document.documentElement.clientHeight;
	
	//创建#mask节点
	var oMask = document.createElement("aside");
		oMask.id = "mask";
		oMask.style.width = oWidth + "px";
		oMask.style.height = oHeight + "px";
		document.body.appendChild(oMask);

	//创建#login-in节点
	var oLogin = document.createElement("div");
		oLogin.id = "login-in";
		oLogin.innerHTML = "<div class='login-i'><div id='closed'></div></div>";
		document.body.appendChild(oLogin);

		//获取登录框的宽度与高度
		var dHeight = oLogin.offsetHeight;
		var dWidth = oLogin.offsetWidth;

		//设置登录框的left与top
		oLogin.style.left = (oWidth - dWidth)/2 + "px";
		oLogin.style.top = (kHeight - dHeight)/2 + "px";

		//获取点击的关闭按钮
		var oClosed = document.getElementById("closed");

		//点击关闭按钮和登录框以外的区域也可以关闭按钮
		oClosed.onclick = oMask.onclick = function(){
			document.body.removeChild(oMask);
			document.body.removeChild(oLogin);
		}
}

window.onload = function(){
	'use strict';
	//获取登录按钮节点
	var oBtn = document.getElementById("login");
	oBtn.onclick = function(){
		newLogin();
		return false;
	}
}