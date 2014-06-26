var fondo = function(){
	
	var img = Ti.UI.createView({
		backgroundColor:"#000",
		width: "100%",
		height: 190,
		top: 175,
		zIndex:0,
		opacity:0.8
	});
	return img;
};
module.exports = fondo;
