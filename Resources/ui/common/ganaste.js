function ganastes(nombre){
 var win1 = Ti.UI.createWindow({
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
		text:"¡BIEN! GANASTE 10 PUNTOS",
		top:145,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	});
	var titulo2 = Ti.UI.createLabel({
		text:"¡Registrate para seguir ganando puntos y participar por uno de los PlayStation 4!",
		top:210,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	});
	var titulo3 = Ti.UI.createLabel({
		text:"Registrate con tu cuenta de facebook o ingresa tu correo",
		top:336,
		zIndex:111,
		color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	});
	
var send = Titanium.UI.createButton({
    title : 'Send',
    style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
});

var camera = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.CAMERA,
});

var cancel = Titanium.UI.createButton({
	 title : 'Cancelar',
    systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
});

var flexSpace = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var textfield = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'E-mail',
    backgroundColor:"#fff",
    top : 400,
    width : 300, height : 35,
    zIndex:112,
    color:"#123e8c"
});
var envio = Ti.UI.createButton({
		title:"Registro",
		bottom:40,
		width:100,
		height:33,	
		backgroundColor:"#98dfa4",
		borderRadius:13,
		font:{fontFamily:'helvetica',fontSize:17, fontWeight:'bold'},
		color:"#fff",
		shadowColor:"#3b8047",
		shadowOffset:{x:0.5,y:0.5},
		zIndex:112
	});
	
win1.add(textfield);
win1.add(envio);

var fb = require('facebook');
fb.appid = '1397156940536791';
fb.permissions = ['publish_stream','email'];
fb.addEventListener('login', function(e) {
   fb.requestWithGraphPath('me', {}, 'GET', function(e) {
    if (e.success) {     
         var getdata = JSON.parse(e.result);
         var email =getdata.email;
         var fbid =getdata.id;
         var firstname =getdata.first_name;
         var lastname =getdata.last_name;
        Ti.API.fbid = fbid;
                    var formulario = require('/ui/common/formulario'),
			        aformulario = new formulario(email,fbid,firstname,lastname,nombre);
		  		    aformulario.open();
	     
    } else if (e.error) {
        alert("No tienes conexión");
    } else {
        alert('No hay respuesta del servidor');
    }
});
});
win1.add(fb.createLoginButton({
    top : 285,
    style : fb.BUTTON_STYLE_WIDE,
    zIndex:111
	}));

envio.addEventListener('click',function(e){
	                 var formulario = require('/ui/common/formulario'),
			         aformulario = new formulario(textfield.value);
		  		     aformulario.open();
});

   	
win1.add(titulo);
win1.add(titulo2);
win1.add(titulo3);
win1.add(imglogo);
return win1;
}
module.exports = ganastes;
