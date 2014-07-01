function preguntas2(nombre) {	
   var self = Ti.UI.createWindow({
		backgroundImage:"/assets/bg.jpg"	
	});	
   var mpuntaje   = require("/ui/puntaje");
   var msalir     = require("/ui/salir");
   var mdesafio   = require("/ui/desafio");         
   var cpuntaje   = new mpuntaje();
   var csalir     = new msalir();
   var cdesafio   = new mdesafio();    	      
   	
if(nombre=="historia"){
	var titulo = Ti.UI.createImageView({
		image:"/assets/titulohistoria.png",
		width:300,	
		zIndex:21,
		top:5
	});
	
}
if(nombre=="matematica"){
	var titulo = Ti.UI.createImageView({
		image:"/assets/titulomatematica.png",
		width:300,	
		zIndex:21,
		top:5
	});
	
}
if(nombre=="aleatorio"){
	var titulo = Ti.UI.createImageView({
		image:"/assets/tituloaleatorio.png",
		width:300,	
		zIndex:21,
		top:5
	});
	
}
 ////barra de navegacion
 var footer = Ti.UI.createView({
 	backgroundColor:"#133d8b",
 	height:50,
 	width:"100%",
 	opacity:"0.82",
 	zIndex:2,
 	bottom:0
 });  
    self.add(footer);  
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
		     	 Titanium.API.info("estado: "+this.status);
		     	  
		        var getdata = JSON.parse(this.responseText);	
		        Titanium.API.id=getdata.id;	 
		        id =  Titanium.API.id; 
		       
		         if(getdata.resultado=="completo")
               {              	
	               var finals = require('/ui/common/final'),
				      afinal = new finals();
			  		  afinal.open();
				    var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Información',
				    message: 'Felicidades completaste este desafío',
				    buttonNames: ['Regresar'],
				    cancel: 1
				});
				alertDialog.show();
				   
			    }
			   
			   if(getdata.resultado=="final")
               {              	
	             
	              
				    	
	        if ( Ti.Platform.osname === 'android') {
		              
					    var alertDialog = Titanium.UI.createAlertDialog({
					    title: 'Información',
					    message: 'Realizastes dos intentos fallidos, vuelva a tratar mañana.',
					    buttonNames: ['regresar'],
					    cancel: 1
					});
					alertDialog.show(); 
					var categorias = require('/ui/common/categorias'),
			        acategorias = new categorias();
		    	    acategorias.open();  			        
			     }else{		     	
			     	alert("Realizastes dos intentos fallidos, vuelva a tratar mañana.");
			     	var categorias = require('/ui/common/categorias'),
			        acategorias = new categorias();
		    	    acategorias.open(); 
			     }
			    }else{
			    
			  if(getdata.resultado=="solohoy")
               {              	
	               var categorias = require('/ui/common/categorias'),
				    acategorias = new categorias();
			    	acategorias.open(); 
			     if ( Ti.Platform.osname === 'android') {	
				    var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Información',
				    message: 'Ya completaste por hoy este desafío',
				    buttonNames: ['regresar'],
				    cancel: 1
				});
				alertDialog.show();
				}else{
					alert("Ya completaste por hoy este desafío");
				}
				   
			    }else{
			    	
			    	if(getdata.imagen){ 
			       var respuesta = getdata.respuesta;
	               var headerLabel = Ti.UI.createLabel({
						text: getdata.pregunta,
						font: {
							fontSize: 15,
							fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
							fontWeight: "bold" 
						},
						top: 252,
						width:"100%",
						color: "#123e8c",
						textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
					});
					}else{
						
						var respuesta = getdata.respuesta;
	                    var headerLabel = Ti.UI.createLabel({
						text: getdata.pregunta,
						font: {
							fontSize: 17,
							fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
							fontWeight: "bold" 
						},
						top: 200,
						width:"100%",
						color: "#123e8c",
						textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
					});
						
						
					}
					
					var imagen= getdata.imagen;
					var opcion = getdata.opciones;
					if(getdata.opciones){
					var op = opcion.split("|");
					
						 var lienzo = Ti.UI.createImageView({
											image:getdata.imagen,
											height:100,
											top:110,
											zIndex:111
										});
					    self.add(lienzo);
						
					
			   var rpta1 = Ti.UI.createButton({
						title:op[0],
						top:310,
						width:210,
						height:33,	
						backgroundColor:"#98dfa4",
						borderRadius:13,
						font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
						color:"#fff",
						shadowColor:"#3b8047",
						shadowOffset:{x:0.5,y:0.5},
						zIndex:113
					});
					
				var rpta2 = Ti.UI.createButton({
						title:op[1],
						top:350,
						width:210,
						height:33,	
						backgroundColor:"#98dfa4",
						borderRadius:13,
						font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
						color:"#fff",
						shadowColor:"#3b8047",
						shadowOffset:{x:0.5,y:0.5},
						zIndex:113
					});
					
				var rpta3 = Ti.UI.createButton({
						title:op[2],
						top:390,
						width:210,
						height:33,	
						backgroundColor:"#98dfa4",
						borderRadius:13,
						font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
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
							 perdiste(nombre);	
						}
					});
					rpta2.addEventListener('click',function(e){
						if(op[1]==respuesta){
							correcto(nombre);						
							 
						}else{
							 perdiste(nombre);	
						}
					});
					rpta3.addEventListener('click',function(e){
						if(op[2]==respuesta){
						   correcto(nombre);
							
						}else{
							 perdiste(nombre);	
						}
					});
				  }
				 }
				 }
				 				
		     },
		     onerror : function(e) {
		         Ti.API.debug("Perdiste Conexión a internet");
		         alert('error'+e);
		     }		     
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
		        
		        var getdata = JSON.parse(this.responseText);
		        if(getdata.registro=="no"){
		        	var ganaste = require('/ui/common/ganaste'),
			        aganaste = new ganaste(nombre);
		  		    aganaste.open();
				     
		        }else{
		        		var categorias = require('/ui/common/categorias'),
				        acategorias = new categorias();
			    	    acategorias.open(); 
		        }
		     },
		     onerror : function(e) {
		        alert("Perdiste conexión a Internet");
		        
		     },
		     timeout : 5000  
		 });
		 client.open("POST", url);
		 client.send(params);
}

function perdiste(nombre){
	  var desafio = Titanium.API.categoria;
	  var nivel = Titanium.API.nivel; 
	  var url = "http://mediacontacts-app.com/__beta/webservice/json.perdiste.php";
	 	 var params = {		
		'idmobile':Ti.Platform.id,
		'idpreg':Titanium.API.id
	   };
	    Ti.API.info("restructura: "+Ti.Platform.id);
	 	 var client = Ti.Network.createHTTPClient({
		     // function called when the response data is available
		     onload : function(e) {		      
		        
		        var getdata = JSON.parse(this.responseText);
		        if(getdata.rpta=="unintento"){
		        	
		         if ( Ti.Platform.osname === 'android') {	
		         var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Información',
				    message: 'Vuelve a intentar',
				    buttonNames: ['Intentar'],
				    cancel: 1
				});
				alertDialog.show();
					}else{
						alert("Otro intento");
					}
		        	//Ti.UI.currentWindow.close();
				     
		        }else{
		         if(getdata.rpta=="unintento"){	
					
					 var alertDialog = Titanium.UI.createAlertDialog({
				    title:'Información' ,
				    message: '¡Qué Piña! Por hoy tus opciones para este desafío terminaron. Elige otra prueba. ',
				    buttonNames: ['Intentar'],
				    cancel: 1
				});
				alertDialog.show();
					}else{
						
						alert("¡Qué Piña! Por hoy tus opciones para este desafío terminaron. Elige otra prueba.");
					}
		        	
		        	var categorias = require('/ui/common/categorias'),
			        acategorias = new categorias();
		    	    acategorias.open(); 
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
module.exports= preguntas2;