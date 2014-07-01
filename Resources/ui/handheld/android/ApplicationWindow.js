//Application Window Component Constructor
function ApplicationWindow() {
	var FirstView = require('ui/common/FirstView');
			var self = Ti.UI.createWindow({
				backgroundImage:"/assets/bg.jpg"
			});
	var Bienvenida2 = require('ui/common/Bienvenida2');
			var self = Ti.UI.createWindow({
				backgroundImage:"/assets/bg.jpg"
			});			
var url='http://mediacontacts-app.com/__beta/webservice/json.verifica.php';
param=({
		'idmobile':Ti.Platform.id
	});
 var client = Ti.Network.createHTTPClient({
     onload : function(e) {      
        var getdata = JSON.parse(this.responseText);
        Titanium.API.nivel = getdata.level;
        niveles = Titanium.API.nivel;	
        if(getdata.registro=="registra"){	
	
			var firstView = new FirstView();
			self.add(firstView);									
 }else{	    	
			var bienvenida2 = new Bienvenida2(niveles);
			self.add(bienvenida2);
	    }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
          alert('No tienes conexion a internet');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("POST", url);
 // Send the request.
 client.send(param);
self.orientationModes =[Ti.UI.PORTRAIT];
return self;
}

module.exports = ApplicationWindow;
