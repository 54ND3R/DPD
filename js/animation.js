var index;
var cycler;
var SPEED = 5000;

function initAnimation(){
	console.log("initAnimation");
	index=0;
	cycleDelivery();
	
}
function cycleDelivery(){
	var arr = ["login","delivery","details","payment","transport"];
	var delivery_el = document.getElementById("slide4_delivery");
	var img_name = getCurrentBG(delivery_el);
	cycler = setInterval(function(){
		showImage(delivery_el,img_name);
		var nextIndex = index+1;
		if(nextIndex==5)
			nextIndex=0;
		img_name=img_name.replace("_"+arr[index],"_"+arr[nextIndex]);
		if(index!=4){
			index++;
		}else{
			index=0;
		}
		setTimeout(function(){
			delivery_el.style.opacity=0;
		},0.7*SPEED);

	},SPEED);
}
function getCurrentBG(el){
	var style = el.currentStyle || window.getComputedStyle(el, false);
	var bi = style.backgroundImage;
	//bi = bi.slice(bi.lastIndexOf("/")+1);
	return bi;
}
function showImage(el,img){
	el.style.backgroundImage=img;
	el.style.opacity=1;
}