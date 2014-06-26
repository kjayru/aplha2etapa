var btnSalir = function(){
var salir =  Ti.UI.createButton({
		backgroundImage:'/assets/salir.png',
		width:52,
		height:45,
		title:'',
		right:46,
		zIndex:13,
		bottom:2
	});

salir.addEventListener('click',function(e){
	
  Ti.UI.currentWindow.close();
  var activity = Titanium.Android.currentActivity;
     activity.finish();
});
return salir;
};
module.exports = btnSalir;