var textoinicio  = function(titulo){
	var mitexto = Ti.UI.createLabel({
	     text: titulo,
	     top:250,
	     height: 33,
		 zIndex:101,
		 color: '#123e8c',
		 font:{font:'helvetica',fontSize:17, fontWeight:'bold'},
		 textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
         width: Ti.UI.SIZE, height: Ti.UI.SIZE,
	});
	return mitexto;
};
module.exports = textoinicio;
