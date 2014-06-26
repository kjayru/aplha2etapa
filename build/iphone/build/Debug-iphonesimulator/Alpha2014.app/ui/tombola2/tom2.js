function tombola(nivel){
var win1 = Titanium.UI.createWindow({  
   backgroundImage:"/assets/bg.jpg"
});

var display_lbl =  Titanium.UI.createLabel({
	text:"10",
	height:85,
	width:"100%",
	top:5,
	left:0,
	color:'#fff',
	borderRadius:0,
	backgroundColor:'#000',
	opacity:0.81,
	font:{
		fontSize:70,
		fontWeight:'bold'
	},
	textAlign:'center'
});

var tombola1 = Ti.UI.createImageView({
	image:"/assets/playa.png",
	width:"100%",
	top:150
});
var set_btn = Titanium.UI.createButton({
	title:'Set',
	width:200,
	height:30,
	top:200,
	left:60,	
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});

var start_btn = Titanium.UI.createButton({
	title:'Start',
	width:200,
	height:30,
	top:250,
	left:60,	
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});

var stop_btn = Titanium.UI.createButton({
	title:'Stop',
	width:200,
	height:30,
	top:300,
	left:60,	
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});

var countDown =  function( m , s, fn_tick, fn_end  ) {
	return {
		total_sec:m*60+s,
		timer:this.timer,
		set: function(m,s) {
			this.total_sec = parseInt(m)*60+parseInt(s);
			this.time = {m:m,s:s};
			return this;
		},
		start: function() {
			var self = this;
			this.timer = setInterval( function() {
				if (self.total_sec) {
					self.total_sec--;
					self.time = { m : parseInt(self.total_sec/60), s: (self.total_sec%60) };
					fn_tick();
				}
				else {
					self.stop();
					fn_end();
				}
				}, 1000 );
			return this;
		},
		stop: function() {
			clearInterval(this.timer);
			this.time = {m:0,s:0};
			this.total_sec = 0;
			return this;
		}
	};
};	
	

var my_timer = new countDown(0,10, 
		function() {
			display_lbl.text = my_timer.time.s;
		},
		function() {
				var numero = Math.floor((Math.random()*4)+1);
			                  var preg1 = require('/ui/tombola2/prega'+numero),
						      apreg1 = new preg1(nivel);
					  		  apreg1.open();
		}
	);

my_timer.start();

set_btn.addEventListener('click',function(){
	display_lbl.text = "0 : 10";
	my_timer.set(0,10);
});



win1.add(display_lbl);
win1.add(tombola1);
return win1;
}
module.exports = tombola;
