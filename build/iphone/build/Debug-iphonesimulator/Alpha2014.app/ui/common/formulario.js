function formulario(email,fbid,firstname,lastname,nombre){
var win1 = Ti.UI.createWindow({
		backgroundImage:"/assets/bg.jpg"	
	});		
	var imglogo = Ti.UI.createImageView({
		image: "/assets/logo.png",
		width: 140,
		height: 130,
		top: 10,
		zIndex:1
	});
var titulo = Ti.UI.createImageView({
	image: "/assets/registrohead.png",
	width: 300,
	top: 143,
	zIndex:112
});
var envio = Ti.UI.createButton({
		title:"Registrar",
		top:445,
		width:100,
		height:33,	
		backgroundColor:"#98dfa4",
		borderRadius:13,
		font:{fontFamily:'helvetica',fontSize:17, fontWeight:'bold'},
		color:"#fff",
		shadowColor:"#3b8047",
		shadowOffset:{x:0.5,y:0.5}
	});
	
var cancel = Titanium.UI.createButton({
	 title : 'Cancelar',
    systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
});

var flexSpace = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
	
	
var textfield1 = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Nombre',
    backgroundColor:"#fff",
    top : 260,
    width : 300, height : 35,
    zIndex:112,
    value:firstname,
     color:"#123e8c"
});

var textfield2 = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Apellidos',
    backgroundColor:"#fff",
    top : 300,
    width : 300, height : 35,
    zIndex:112,
    value:lastname,
     color:"#123e8c"
});

var textfield3 = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'E-mail',
    backgroundColor:"#fff",
    top : 340,
    width : 300, height : 35,
    zIndex:112,
    value:email,
     color:"#123e8c"
});
var textfield4 = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
    hintText : 'DNI',
    backgroundColor:"#fff",
    top : 380,
    width : 300, height : 35,
    zIndex:112,
     color:"#123e8c"
});

envio.addEventListener('click',function(e){
	if(textfield1.value==""){
		
	      var alertDialog = Titanium.UI.createAlertDialog({
			    title: 'Información',
			    message: 'Ingresa tu nombre',
			    buttonNames: ['Continuar'],
			    cancel: 0
			});
			alertDialog.show();
		return false;
	};
	if(textfield2.value==""){
		   var alertDialog = Titanium.UI.createAlertDialog({
			    title: 'Información',
			    message: 'Ingresa tus apellidos',
			    buttonNames: ['Continuar'],
			    cancel: 0
			});
			alertDialog.show();
		return false;
	};
	if(textfield3.value==""){
		var alertDialog = Titanium.UI.createAlertDialog({
			    title: 'Información',
			    message: 'Ingresa tu correo',
			    buttonNames: ['Continuar'],
			    cancel: 0
			});
			alertDialog.show();
		return false;
	};
	if(textfield4.value==""){
		var alertDialog = Titanium.UI.createAlertDialog({
			    title: 'Información',
			    message: 'Ingresa tu DNI',
			    buttonNames: ['Continuar'],
			    cancel: 0
			});
			alertDialog.show();
		return false;
	};
	
	param=({
		'nombres'   : textfield1.value,
		'apellidos' : textfield2.value,
		'correo'    : textfield3.value,
		'dni'       : textfield4.value,
		'idmobile'  : Ti.Platform.id,
		'fbid'      : fbid
	});
	
	var url = "http://mediacontacts-app.com/__beta/webservice/json.registro.php";
 var client = Ti.Network.createHTTPClient({
     onload : function(e) {
         var getdata = JSON.parse(this.responseText);
         var desafio=getdata.desafio;
         var nivel =getdata.nivel;
        
         if(desafio=="Memoria"){
         		if(nivel=="SCOOL"){
         			
         			var categorias = require('/ui/common/categorias'),
				    acategorias = new categorias();
			    	acategorias.open(); 
         		}else{
         			
         		var categorias = require('/ui/common/categorias'),
	            acategorias = new categorias();
    	        acategorias.open(); 
         		}
            
         
		  }else{
		  	
		  	var categorias = require('/ui/common/categorias'),
	        acategorias = new categorias();
    	    acategorias.open(); 
		  }
     },
 
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  
 });
 client.open("POST", url);
 client.send(param);
});
	win1.add(titulo);
	win1.add(envio);
	win1.add(imglogo);
	win1.add(textfield1);
	win1.add(textfield2);
	win1.add(textfield3);
	win1.add(textfield4);
	return win1;	
}
module.exports=formulario;
