function ApplicationWindow() {	
///preloader
var style;
if (Ti.Platform.name === 'iPhone OS'){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
}
else {
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}
var activityIndicator = Ti.UI.createActivityIndicator({
  color: 'black',
  font: {fontFamily:'Helvetica Neue', fontSize:20, fontWeight:'bold'},
  message: 'Abriendo...',
  style:style,
  top:300,
  left:90,
  height:Ti.UI.SIZE,
  width:Ti.UI.SIZE,
  zIndex:100
});
 
   
	var FirstView = require('ui/common/FirstView');
			var self = Ti.UI.createWindow();
	var Bienvenida2 = require('ui/common/Bienvenida2');
			var self = Ti.UI.createWindow();			
var url='http://mediacontacts-app.com/__beta/webservice/json.verifica.php';
param=({
		'idmobile':Ti.Platform.id
	});
 var client = Ti.Network.createHTTPClient({
 //	 activityIndicator.show();
  // activityIndicator.hide();
   
     onload : function(e) { 
     if(this.status==200){	
     	     activityIndicator.show();  
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
			   
	   }else{
	   	activityIndicator.show();
	   	Titanium.API.info("proeloader "+this.status);
	   }
     },
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('No tienes conexion a internet');
     }
     
 });
 client.open("POST", url);
 client.send(param);
self.orientationModes =[Ti.UI.PORTRAIT];
self.add(activityIndicator);
return self;

}
module.exports = ApplicationWindow;
