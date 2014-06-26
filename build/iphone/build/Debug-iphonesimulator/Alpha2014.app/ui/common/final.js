function final(){
 var self = Ti.UI.createWindow({
		backgroundImage:"/assets/bg.jpg"	
	});	

	var imglogo = Ti.UI.createImageView({
		image: "assets/logo.png",
		width: 140,
		height: 130,
		top: 10,
		zIndex:1
	});

var titulo = Ti.UI.createLabel({
		text:"¡YA TIENES 100 PUNTOS!",
		top:195,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:23, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
         zIndex:112
	});
var titulo2 = Ti.UI.createLabel({
		text:"¿Listo para más?",
		top:225,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:14, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
         zIndex:112
	});
var titulo3 = Ti.UI.createLabel({
		text:"¡Elige otro desafio y gana mas puntos!",
		top:260,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:14, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
         zIndex:112
	});
var textboot = Ti.UI.createLabel({
		text:"Comparte la aplicación y gana 10 puntos extras.",
		top:380,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
         zIndex:112
	});	
var elige = Ti.UI.createButton({
		Title:"Elige otro desafio",
		top:330,
		width:190,
		height:33,	
		backgroundColor:"#98dfa4",
		borderRadius:13,
		font:{fontFamily:'helvetica',fontSize:17, fontWeight:'bold'},
		color:"#fff",
		shadowColor:"#3b8047",
		shadowOffset:{x:0.5,y:0.5},
		zIndex:112
	});
elige.addEventListener('click',function(e)
	{
	  var categorias = require('/ui/common/categorias'),
	    acategorias = new categorias(categoria);
    	acategorias.open(); 
	     
	});
var compartir = Ti.UI.createButton({
	backgroundImage:'/assets/logo_facebook.png',
		width:46,
		height:45,
		left:135,
		zIndex:13,
		bottom:70
});
win1.add(compartir);	
self.add(textboot);	
self.add(titulo);
self.add(titulo2);
self.add(titulo3);
self.add(elige);	
self.add(img);
self.add(imglogo);
return self;
}
function postfeed(){
var fb = require('facebook');
fb.appid = '1397156940536791';
fb.permissions = ['publish_stream','email'];	
	var data = {
    link : "http://productosalpha.com.pe/codigoqrs/",
    name : "Campaña 2014",
    message : "Ingresa al desafío Alpha y concursa para ganar grandes premios",
    caption : "Desafía Alpha",
    picture : "http://productosalpha.com.pe/codigoqrs/img/logo.png",
    description : "Ingresa al desafío Alpha y concursa para ganar grandes premios."
};
fb.dialog("feed", data, function(e) {
    if(e.success && e.result) {
       
        var url = "http://mediacontacts-app.com/__beta/webservice/json.puntos.php";
	 	 var params = {		
		'idmobile':Ti.Platform.id,
		'idpreg':Titanium.API.id
	   };
	   
	 	 var client = Ti.Network.createHTTPClient({
		     onload : function(e) {		      
		        var getdata = JSON.parse(this.responseText);
		       var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Información',
				    message: 'Gracias por compartir ganastes 10 puntos',
				    buttonNames: ['Continuar'],
				    cancel: 1
				});
				alertDialog.show();
		     },
		     onerror : function(e) {
		        Ti.API.info(e.error);
		         alert('error');
		     },
		     timeout : 5000  
		 });
		 client.open("POST", url);
		 client.send(params);
        
        
    } else {
        if(e.error) {
            alert(e.error);
        } else {
            alert("El participante cancelo");
        }
    }
});
}
module.exports = final;
