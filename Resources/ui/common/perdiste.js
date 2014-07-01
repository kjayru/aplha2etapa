function perdiste(nombre,categoria){
var win1 = Titanium.UI.createWindow({  
	    backgroundImage:"/assets/bg.jpg"
	});	

	var imglogo = Ti.UI.createImageView({
		image: "/assets/logo.png",
		width: 140,
		height: 130,
		top: 10,
		zIndex:1
	});

var titulo = Ti.UI.createLabel({
		text:"¡QUE PIÑA! SIGUE INTENTANDO",
		top:230,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	});
var textboot = Ti.UI.createLabel({
		text:"Comparte la aplicación y gana 1 punto extras.",
		top:380,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	});

var vuelve = Ti.UI.createButton({
		title:"Vuelve a Intentar",
		top:280,
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
	
var otrodesafio = Ti.UI.createButton({
		title:"Otro desafío",
		top:320,
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

if(nombre=="memoria"){
vuelve.addEventListener('click',function(e){	  	
    	var preguntas1 = require('/ui/common/preguntas1'),
	    apreguntas = new preguntas1(categoria);
  		apreguntas.open();  
});
}else{
	
	vuelve.addEventListener('click',function(e){	  	
  	var preguntas2 = require('/ui/common/preguntas2'),
	    apreguntas = new preguntas2(nombre);
  	    apreguntas.open(); 	 				
});
}
otrodesafio.addEventListener('click',function(e){
	var categorias = require('/ui/common/categorias'),
	    acategorias = new categorias(categoria);
    	acategorias.open(); 
			
});

var compartir = Ti.UI.createButton({
	backgroundImage:'/assets/logo_facebook.png',
		width:46,
		height:45,
		left:155,
		zIndex:13,
		bottom:40
});

compartir.addEventListener('click',function(e){
	postfeed();
});
win1.add(compartir);
win1.add(vuelve);
win1.add(otrodesafio);		
win1.add(imglogo);
win1.add(titulo);
win1.add(textboot);

return win1;
}
function postfeed(){
var fb = require('facebook');
fb.appid = '1397156940536791';
fb.permissions = ['publish_stream','email'];
	var data = {
    link : "http://productosalpha.com.pe/codigoqrs/",
    name : "Campaña 2014",
    message : "Yo ya participé del desafío Alpha; ingresa aquí y descubre como descargar el APP. Participa por grandes premios. ",
    caption : "Desafío Alpha",
    picture : "http://productosalpha.com.pe/codigoqrs/img/logo.png",
    description : "Ingresa al desafío Alpha y concursa para ganar grandes premios."
};
fb.dialog("feed", data, function(e) {
    if(e.success && e.result) {
       
        var url = "http://mediacontacts-app.com/__beta/webservice/json.puntos2.php";
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
		         alert('No tienes conexión.');
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
module.exports = perdiste;
