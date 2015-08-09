var scrollX=0;
var distance=20;
var speed=5;
var animator;
window.onload = init;

function init(){
	//nav links
	var listitems = document.getElementsByClassName("scroll");
	for(var i=0;i<listitems.length;i++){
		listitems[i].addEventListener("click", function(event){
				var listitem = event.target;
				var id = listitem.innerText;
				scrollTo(id.toLowerCase());
		});
	}
	//nav 
	var nav = document.getElementById("nav");
	document.addEventListener("scroll",function(){
		var sl = document.body.scrollLeft;
		var wrapper = document.getElementById("slide_wrapper");
		if(sl<wrapper.offsetWidth-screen.width){
			nav.style.marginLeft=sl+"px";
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
	
	if(currentX < targetX+distance/2){
		var scrollX = currentX+distance;
		window.scroll(scrollX,0);
	}else{
		clearTimeout(animator);
		animator=null;
	}
}
function scrollToLeft(el){
	var currentX = window.pageXOffset;
	var targetX = document.getElementById(el).offsetLeft;
	console.log("cur"+currentX)

	console.log("tar"+targetX);

	animator = setTimeout('scrollToLeft(\''+el+'\')',speed)

	if(currentX > targetX){
		var scrollX = currentX-distance;
		window.scroll(scrollX,0);
	}else{
		clearTimeout(animator);
		animator=null;

	}
}

