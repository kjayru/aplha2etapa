var memoria = function(){
	var btnMemoria = Ti.UI.createButton({
		backgroundImage:'/assets/memoria.png',
	    width:90,
	    height:80,
	    title:'',
	    left:70,
	    bottom:190,
	    zIndex:11
		});
	return btnMemoria;
};
module.exports = memoria;
