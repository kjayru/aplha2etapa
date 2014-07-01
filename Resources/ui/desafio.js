var btnDesafio = function()
{
	var desafios =  Ti.UI.createButton({
		backgroundImage:'/assets/desafios.png',
		width:52,
		height:45,
		title:'',
		left:146,
		zIndex:113,
		bottom:2
	});
	desafios.addEventListener('click',function(e){
		var categorias = require('/ui/common/categorias'),
	    acategorias = new categorias();
    	acategorias.open(); 
	});
	return desafios;
};

module.exports = btnDesafio;