
function siguiente(nivel){
		var win = Ti.UI.createWindow({
			backgroundImage:"/assets/bg.jpg",
			zIndex:0	
		});
		
		var titulo = Ti.UI.createImageView({
		image:"/assets/titmemoria.png",
		width:300,	
		zIndex:21,
		top:100
	    });
	
		
		 var mitexto = Ti.UI.createLabel({
	     text: "A continuación te mostrarémos una imagen con unos segundos. Mírala aténtamente que cuando el tiempo termine la imagen desaparecerá y te haremos una pregunta. ",
	     top:250,
	     height: 33,
		 zIndex:101,
		 color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	     });
	
		var button = Titanium.UI.createButton({
		   title: "Empezar",
		    bottom:55,
		    width:150,
		    height: 33,
			zIndex:101,
			backgroundColor:"#98dfa4",
			borderRadius:10,
			font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
			color:"#fff",
			shadowColor:"#3b8047",
			shadowOffset:{x:0.5,y:0.5}
		});	
		
	if(nivel=="scool"){	
		button.addEventListener('click',function(){
			var numero = Math.floor((Math.random()*3)+1);
			
			 var tom1 = require('/ui/tombola/tom'+numero),
		      atom1 = new tom1(nivel);
	  		  atom1.open();
		});
		}else{
			
			
			button.addEventListener('click',function(){
				var numero = Math.floor((Math.random()*3)+1);
			var tom1 = require('/ui/tombola2/tom'+numero),
		      atom1 = new tom1(nivel);
	  		  atom1.open();   
		});
		}
		win.add(titulo);
		win.add(button);
		win.add(mitexto);
		win.orientationModes =[Ti.UI.PORTRAIT];
		return win;
};

module.exports =siguiente;


