// 	var body=document.getElementsByTagName("body");
// 	var ss=body[0].getAttribute("class");
// 	var re=document.getElementById("resume");
// function  show(){
// 	ss=ss.replace("yy","op");
// 	body[0].setAttribute("class",ss);
// 	re.style.display="block";
// }
// function back(){
// 	re.style.display="none";
// 	ss=ss.replace("op"," ");
// 	body[0].setAttribute("class",ss);
// }
(function(){
	var TeamPage = function() {}
	TeamPage.prototype = {
		listener: true,
		body: document.getElementsByTagName('body')[0],
		detail: document.getElementById("resume"),
		pic: document.getElementById('yyl'),
		constructor: TeamPage,
		init: function() {
			this.addEvent();
		},
		addEvent: function() {
			var self = this;
			console.log(self.pic);
			this.pic.addEventListener('click', function(event) {
				if(self.listener) {
					self.show();
					self.listener = false
					event.stopPropagation();
				}
			});
			self.body.addEventListener('click', function() {
				if(!self.listener) {
					self.fade();
					self.listener = true;
				}
			})
		},
		show: function() {
			this.body.className = "op";
			this.detail.style.display = "block";
			console.log('show');
		},
		fade: function() {
			this.detail.style.display = "none";
			this.body.className = "yy";
			console.log('fade');
		}
	}
	var teampage = new TeamPage();
	teampage.init();
})()
