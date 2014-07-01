var empiezadesafio = function(titulo){	
if ( Ti.Platform.osname === 'android') {
var button = Titanium.UI.createButton({
	   title: titulo,
	    bottom:55,
	    width:150,
	    height: 33,
		zIndex:101,
		backgroundColor:"#98dfa4",
		borderRadius:10,
		font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
		color:"#fff",
		shadowColor:"#3b8047",
		shadowOffset:{x:0.5,y:0.5
		}
	});	
}else{
	var button = Titanium.UI.createButton({
	   title: titulo,
	    bottom:55,
	    width:150,
	    height: 33,
		zIndex:101,
		backgroundColor:"#98dfa4",
		borderRadius:10,
		font:{fontFamily:'helvetica',fontSize:14, fontWeight:'bold'},
		color:"#fff",
		shadowColor:"#3b8047",
		shadowOffset:{x:0.5,y:0.5
		}
	});
}
return button;
};	
module.exports =  empiezadesafio;