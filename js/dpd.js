window.onload = init;
var httpRequest;
var base = getBase();
//exemplaar in DB hash van janklaas & Wachtwoord01
function init(){
	console.log("init");
	initScrolling();
	initAnimation();
	var btnTracking = document.getElementById("btnTracking");
	btnTracking.addEventListener("click",btnTracking_click);
}
//0.button click
function btnTracking_click(event) {
 	var el = event.target;
 	if(el.value=="Get started") {
 		loggedIn();
 	} else if(el.value=="Log in") {
 		var user = document.getElementById("txtUser").value;
 		var pass = document.getElementById("txtPass").value;
 		authenticate(user,pass);
 	}else if(el.value="Track") {
 		var reference = document.getElementById("txtReference").value;
 		track(reference);
 	}
}
function getBase(){
	var url = document.location.href;
	return url.slice(0,url.lastIndexOf("/")-url.length);
}
//1.Remember (am I logged in?)
function loggedIn(){
	httpRequest=new createXmlHttpRequestObject();
	httpRequest.open("POST",base+"/php/dpd.php",true);
	var params = "isLoggedIn="+"TBD";
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.onload = handleLoggedIn;
	httpRequest.send(params);
}
function createXmlHttpRequestObject() {
	var xmlHttp;
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHtpp = new ActiveXObject("Microsoft.XMLHTTP");
	}	
	return xmlHttp;
}
function handleLoggedIn(){
	var loggedIn = httpRequest.response;
	if(loggedIn==1){
		showTrackMenu();
	}else{
		showLogin();
	}
}
//2.Authenticate
function showLogin(){
	var button = document.getElementById("btnTracking");
	button.setAttribute("value","Log in");
	var container = document.getElementById("slide3_tracking"),c=container.style;
	c.background="url()";
	var form = create("<input type='text' size='16' placeholder='your username' id='txtUser' class='field'>"+
		"<input type='password' placeholder='your password' size='16' id='txtPass' class='field'>");
	container.appendChild(form);
}
//!!!!!!!!!!! some DOM functions here
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
function removeChildren(el) {
	while (el.firstChild) {
    	el.removeChild(el.firstChild);
	}
}
function authenticate(user,pass) {
	httpRequest=new createXmlHttpRequestObject();
	httpRequest.open("POST",base+"/php/dpd.php",true);
	var params = "isAuthentic="+"TBD&user="+user+"&pass="+pass;
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.onload = handleAuthenticate;
	httpRequest.send(params);
}
function handleAuthenticate(){
	var isAuthentic = httpRequest.response;
	if(isAuthentic==1){
		showTrackMenu();
	}
}
//3.Acces menus
function showTrackMenu(){
	var button = document.getElementById("btnTracking");
	var track_content = document.getElementById("slide3_tracking");
	//clean prev 
	track_content.style.background="url()";
	removeChildren(track_content);
	//show
	var menu = create("<input type='text' placeholder='your packet&#39;s reference' id='txtReference' class='field'><span class='link'>Search</span>");
	track_content.appendChild(menu);
	button.value="Track";
}
function track(reference){
	httpRequest=new createXmlHttpRequestObject();
	httpRequest.open("POST",base+"/php/dpd.php",true);
	var params = "isTrackable="+"TBD&ref="+reference;
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.onload = handleTrack;
	httpRequest.send(params);
}
function handleTrack(){
	showTrackResult(httpRequest.response);
}
//4.Report result
function showTrackResult(parcel) {
	var button = document.getElementById("btnTracking");
	var track_content = document.getElementById("slide3_tracking");
	removeChildren(track_content);
	parcel = JSON.parse(parcel);
	console.log(parcel);
	var track_result = "<label><span>State : </span>"+parcel["state"]+"</label>"+
	"<label><span>Origin : </span>"+parcel["origin"]+"</label>"+
	"<label><span>Destination : </span>"+parcel['destination']+"</label>"+
	"<label><span>Retrieved : </span>"+parcel['retrieved']+"</label>"+
	"<label><span>ETA : </span>"+parcel['eta']+"</label>"+
	"<label><span>Sender : </span>"+parcel['sender']+"</label>";
	track_result=create(track_result);
	track_content.appendChild(track_result);
}