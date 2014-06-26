function Bienvenida2(niveles) {
	
	var self = Ti.UI.createView({
		backgroundImage:"/assets/bg.jpg"
	});	
		
var titulo2 = Ti.UI.createLabel({
    text:'¿Listo para el desafio? ¡Aprieta  "Comenzar" y Elige tu tipo de desafio!',
 	color: '#123e8c',
 	font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	top: 230
});
var button2 = Titanium.UI.createButton({
	   title: 'COMENZAR',
	   bottom:55,
	   width: 100,
	   height: 33,
		zIndex:1,
		backgroundColor:"#98dfa4",
		borderRadius:13,
		font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
		color:"#fff",
		shadowColor:"#3b8047",
		shadowOffset:{x:0.5,y:0.5
		}
	});	

 var clogo  = require("/ui/logo"); 
 var mlogo  = new clogo(); 
    button2.addEventListener('click',function(e){
    	var categorias = require('/ui/common/categorias'),
	    acategorias = new categorias(niveles);
    	acategorias.open(); 	
    });
    
    self.add(titulo2);
    self.add(mlogo);
    self.add(button2);
    self.orientationModes =[Ti.UI.PORTRAIT];
	return self;
};
module.exports= Bienvenida2;