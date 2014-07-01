var btnPuntaje = function(){	
	var puntaje =  Ti.UI.createButton({
		backgroundImage:'/assets/puntaje.png',
		width:57,
		height:45,
		title:'',
		left:46,
		zIndex:13,
		bottom:2
	});


	puntaje.addEventListener('click',function(e){
	  var url = "http://mediacontacts-app.com/__beta/webservice/json.puntaje.php";
	   params = ({'idmobile':Ti.Platform.id});
	    var client = Ti.Network.createHTTPClient({
		     onload : function(e) {
		         var getdata = JSON.parse(this.responseText);
		         	         
		         
		         var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Tus puntos',
				    message: 'Tienes '+getdata.puntos +' puntos',
				    buttonNames: ['Continuar'],
				    cancel: 1
				});
				alertDialog.show();
		     },
		     onerror : function(e) {
		         Ti.API.debug(e.error);
		         alert('error');
		     },
		     timeout : 5000  // in milliseconds
		 });
		 client.open("POST", url);
		 client.send(params);
		
		
		
	});
	return puntaje;
};
module.exports = btnPuntaje;