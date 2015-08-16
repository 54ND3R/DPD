var scrollX=0;
var distance=20;
var speed=5;
var animator;

function initScrolling(){
	console.log("initScrolling");
	//nav links
	var listitems = document.getElementsByClassName("scroll");
	for(var i=0;i<listitems.length;i++){
		listitems[i].addEventListener("click", function(event){
				var listitem = event.target;
				var id = listitem.textContent || listitem.innerText;
				scrollTo(id.toLowerCase());
		});
	}
	//nav 
	var header = document.getElementById("header");
	document.addEventListener("scroll",function(){
		var sl = document.body.scrollLeft || window.pageXOffset;
		var wrapper = document.getElementById("slide_wrapper");
		if(sl<wrapper.offsetWidth*0.75) { 
			header.style.marginLeft=sl+"px";
		}
	});
}

//nav
function scrollTo(el){
	if(animator!=null || animator!=undefined){
		animator=null;
		return;
	}
	var currentX = window.pageXOffset;
	var targetX = document.getElementById(el).offsetLeft;
	console.log("max X"+document.getElementById("slide_wrapper").offsetWidth);


	if(currentX<targetX){
		if(currentX+distance>targetX){
			animator=null;
			return;
		}else{
			animator = setTimeout('scrollToRight(\''+el+'\')',speed)
		}
	}else{
		if(currentX-distance<targetX){
			animator=null;
			return;
		}else{
			animator = setTimeout('scrollToLeft(\''+el+'\')',speed)
		}
	}
}
function scrollToRight(el){
	var currentX = window.pageXOffset;
	var targetX = document.getElementById(el).offsetLeft;
	animator = setTimeout('scrollToRight(\''+el+'\')',speed)

	if(currentX < targetX){
		var scrollX = currentX+distance;
		window.scroll(scrollX,0);
		if(currentX==window.pageXOffset){
			//!window.scroll
			clearTimeout(animator);
			animator=null; 
		}
	}else{
		clearTimeout(animator);
		animator=null;
	}
}
function scrollToLeft(el){
	var currentX = window.pageXOffset;
	var targetX = document.getElementById(el).offsetLeft;

	animator = setTimeout('scrollToLeft(\''+el+'\')',speed)

	if(currentX > targetX){
		var scrollX = currentX-distance;
		window.scroll(scrollX,0);
	}else{
		clearTimeout(animator);
		animator=null;

	}
}

