function FirstView() {
	var self = Ti.UI.createView({
		backgroundImage:"/assets/bg.jpg"
	});	
    var btnIngresar =Ti.UI.createButton({
	  title:"ingresar",
	  top:140,
	  left:50,
	  height:40,
	  width:100,
	  zIndex:10
    });
    var titulo = Ti.UI.createLabel({
		color:'#123e8c',
		text:"¿Qué edad tienes?",
		top:140,
		font:{font:'helvetica',fontSize:18, fontWeight:'bold',textAlign:"center"},
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width:200,
        height:40,
        zIndex:12
	});
	   var minDate = new Date();
		minDate.setFullYear(1918);
		minDate.setMonth(0);
		minDate.setDate(1);
		
		var maxDate = new Date();
		maxDate.setFullYear(2012);
		maxDate.setMonth(11);
		maxDate.setDate(31);
		
		var value = new Date();
		value.setFullYear(2012);
		value.setMonth(0);
		value.setDate(1);
if ( Ti.Platform.osname === 'android') {	
	    var picker = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_DATE,
		minDate:minDate,
		maxDate:maxDate,
		value:value
	    });
}else{
	   var picker = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_DATE,
		minDate:minDate,
		maxDate:maxDate,
		value:value,
		top:180
	    });
}	
	picker.selectionIndicator = true;
    var mifecha="";
    var mes= "";
    var dia = "";
    var year = "";
	picker.addEventListener('change',function(e)
	{
		 label.text = "";
		 
		   var d = new Date(e.value);
	
		   year = d.getFullYear();
		  
		
		 Titanium.API.mifecha = e.value.toLocaleString();
		 Titanium.API.year = year;
	});
	
    var cenvio = require("/ui/empieza");
	var cbg    = require("/ui/fondo");
	var clogo  = require("/ui/logo");
	var menvio = new cenvio("INGRESAR");
	var mlogo  = new clogo();
	var mbg    = new cbg();
	var label = Ti.UI.createLabel({
		text:'Choose a date',
		top:6,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'white'
	});
	self.add(label);  
	self.add(titulo);	     
	self.add(menvio);
	if ( Ti.Platform.osname === 'android') {
		self.add(mbg);
	}
	self.add(mlogo);
	self.add(picker);
	
	menvio.addEventListener('click',function(e){
		
		if(!Titanium.API.year){
			var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Información',
				    message: 'Ingrese su fecha de Nacimiento',
				    buttonNames: ['Continuar'],
				    cancel: 1
				});
				alertDialog.show();
			return false;
		}else{	
		var url='http://mediacontacts-app.com/__beta/webservice/json.leves.php';
	
		var params = {
		'datos2':Titanium.API.mifecha,
		'idmobile':Ti.Platform.id,
		'year': Titanium.API.year
	   };
		var sendfecha = Ti.Network.createHTTPClient({
			onload: function(e){								
				var myData = JSON.parse(this.responseText);
                  	Titanium.API.nivel = myData.level;	
                  	var bienvenido = require('/ui/common/bienvenida'),
						abienvenida = new bienvenido();		    			     				     	 					
						abienvenida.open();										 
			},
			onerror: function(e){			
				Ti.API.debug(e.error);
				alert('error'+e.error);
			},
			timeout:5000		
		 });
		 sendfecha.open("POST",url);
		 sendfecha.send(params);
		
		}	
	});
    self.orientationModes =[Ti.UI.PORTRAIT];
	return self;
}
module.exports = FirstView;
