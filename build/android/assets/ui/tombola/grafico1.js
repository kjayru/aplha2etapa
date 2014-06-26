function grafico1() {	
   var self = Ti.UI.createWindow({
		backgroundImage:"/assets/bg.jpg"	
	});	
   var mpuntaje   = require("/ui/puntaje");
   var msalir     = require("/ui/salir");
   var mdesafio   = require("/ui/desafio");
 
         
   var cpuntaje   = new mpuntaje();
   var csalir     = new msalir();
   var cdesafio   = new mdesafio();    	      
 	

	var titulo = Ti.UI.createImageView({
		image:"/assets/titmemoria.png",
		width:300,	
		zIndex:21,
		top:5
	});
	

	
   self.add(titulo);  
   self.add(cpuntaje);
   self.add(csalir);
   self.add(cdesafio);
   
   

	var url = "http://mediacontacts-app.com/__beta/webservice/json.historia.php";
	 	 var params = {
		'desafio'   :Titanium.API.categoria,
		'categoria' :Titanium.API.nivel,
		'idmobile'  :Ti.Platform.id
	   };
	 	 var client = Ti.Network.createHTTPClient({
		     onload : function(e) {
		        var getdata = JSON.parse(this.responseText);	
		        Titanium.API.id=getdata.id;	 
		        id =  Titanium.API.id; 
		       
		         if(getdata.resultado=="completo")
               {              	
	               var finals = require('/ui/common/final'),
				      afinal = new finals();
			  		  afinal.open();
				   alert("completo desafio"+Ti.API.desafio+" "+Ti.API.nivel);
				   
			    }else{
			    	
			   var respuesta = getdata.respuesta;
	               var headerLabel = Ti.UI.createLabel({
						text: getdata.pregunta,
						font: {
							fontSize: 17,
							fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
							fontWeight: "bold" 
						},
						top: 230,
						right: 20,
						color: "#123e8c",
						textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
						shadowColor: "#000",
						shadowOffset: {x:1, y:1}
					});
					var imagen= getdata.imagen;
					var opcion = getdata.opciones;
					var op = opcion.split("|");
					
					if(imagen){ 
						 var lienzo = Ti.UI.createImageView({
											image:imagen,
											width:100,
											top:150,
											zIndex:111
										});
							self.add(lienzo);
						}
						if(imagen){ 
						 var pregunta = Ti.UI.createLabel({
						 	text:pregunta,
						 	color: '#123e8c',
								 font:{font:'helvetica',fontSize:11, fontWeight:'bold'},
								 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
						         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
								 top: 355,
								 zIndex:112
						 });
					}else{
						
						 var pregunta = Ti.UI.createLabel({
						 	text:pregunta,
						 	color: '#123e8c',
								 font:{font:'helvetica',fontSize:11, fontWeight:'bold'},
								 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
						         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
								 top: 305,
								 zIndex:112
						 });
					}
			   var rpta1 = Ti.UI.createButton({
						title:op[0],
						top:370,
						width:180,
						height:33,	
						backgroundColor:"#98dfa4",
						borderRadius:13,
						font:{fontFamily:'helvetica',fontSize:17, fontWeight:'bold'},
						color:"#fff",
						shadowColor:"#3b8047",
						shadowOffset:{x:0.5,y:0.5},
						zIndex:113
					});
					
				var rpta2 = Ti.UI.createButton({
						title:op[1],
						top:410,
						width:180,
						height:33,	
						backgroundColor:"#98dfa4",
						borderRadius:13,
						font:{fontFamily:'helvetica',fontSize:17, fontWeight:'bold'},
						color:"#fff",
						shadowColor:"#3b8047",
						shadowOffset:{x:0.5,y:0.5},
						zIndex:113
					});
					
				var rpta3 = Ti.UI.createButton({
						title:op[2],
						top:450,
						width:180,
						height:33,	
						backgroundColor:"#98dfa4",
						borderRadius:13,
						font:{fontFamily:'helvetica',fontSize:17, fontWeight:'bold'},
						color:"#fff",
						shadowColor:"#3b8047",
						shadowOffset:{x:0.5,y:0.5},
						zIndex:113
					});
					self.add(headerLabel);	
					self.add(rpta1);	
					self.add(rpta2);	
					self.add(rpta3);				  
					rpta1.addEventListener('click',function(e){
						if(op[0]==respuesta){
							 correcto(nombre);
						}else{
							  var perdiste = require('/ui/common/perdiste'),
						      aperdiste = new perdiste();
					  		  aperdiste.open();
						}
					});
					rpta2.addEventListener('click',function(e){
						if(op[1]==respuesta){
							correcto(nombre);						
							 
						}else{
							 var perdiste = require('/ui/common/perdiste'),
						      aperdiste = new perdiste(nombre);
					  		  aperdiste.open();
						}
					});
					rpta3.addEventListener('click',function(e){
						if(op[2]==respuesta){
						   correcto(nombre);
							
						}else{
							 var perdiste = require('/ui/common/perdiste'),
						      aperdiste = new perdiste();
					  		  aperdiste.open();
						}
					});
				   }	 				
		     },
		     onerror : function(e) {
		         Ti.API.debug(e.error);
		         alert('error');
		     },
		     timeout : 5000
		 });
    client.open("POST", url);
	client.send(params);    
   self.orientationModes =[Ti.UI.PORTRAIT];
   return self;
};
function correcto(nombre){
	  var desafio = Titanium.API.categoria;
	  var nivel = Titanium.API.nivel; 
	  var url = "http://mediacontacts-app.com/__beta/webservice/json.puntos.php";
	 	 var params = {		
		'idmobile':Ti.Platform.id,
		'idpreg':Titanium.API.id
	   };
	    Ti.API.info("restructura: "+Ti.Platform.id);
	 	 var client = Ti.Network.createHTTPClient({
		     // function called when the response data is available
		     onload : function(e) {		      
		        Ti.API.info('status'+ this.status);
				Ti.API.info('responsetext'+ this.responseText);
				Ti.API.info('conectiontype'+ this.connectionType);
				Ti.API.info('location'+ this.location);
		        var getdata = JSON.parse(this.responseText);
		        if(getdata.registro=="no"){
		        	var ganaste = require('/ui/commmon/ganaste'),
			        aganaste = new ganaste();
		  		    aganaste.open();
				     
		        }else{
		        	var pase = require('/ui/test/test2'),
			        apase = new pase(nombre);
		  		    apase.open();
		        }
		     },
		     onerror : function(e) {
		        Ti.API.info(e.error);
		         alert('error');
		     },
		     timeout : 5000  
		 });
		 client.open("POST", url);
		 client.send(params);
}
	
module.exports= grafico1;