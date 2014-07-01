var logos = function(){
		var imglogo = Ti.UI.createImageView({
		image: "/assets/logo.png",
		width: 140,
		height: 130,
		top: 5,
		zIndex:100
	});
	return imglogo;
};
module.exports = logos;
