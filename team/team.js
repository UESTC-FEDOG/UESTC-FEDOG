	var body=document.getElementsByTagName("body");
	var ss=body[0].getAttribute("class");
	var re=document.getElementById("resume");
function  show(){
	ss=ss.replace("yy","op");
	body[0].setAttribute("class",ss);
	re.style.display="block";
}
function back(){
	re.style.display="none";
	ss=ss.replace("op"," ");
	body[0].setAttribute("class",ss);
}