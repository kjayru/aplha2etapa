function postfeed(){
	
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
module.exports = postfeed;