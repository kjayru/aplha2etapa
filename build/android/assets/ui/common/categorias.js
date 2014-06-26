function categorias(nivel) {
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/bg.jpg",
		exitOnClose: true,
	  fullscreen: false,
	   title: 'CATEGORIAS'
	});
var scroll = Ti.UI.createScrollView({
	contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '98%',
  width: '100%',
  zIndex:1
});

var view = Ti.UI.createView({
  top: 0,
  height: 540,
  width: "100%"
});

var view2 = Ti.UI.createView({
  bottom: 0,
  height: 50,
  width: "100%"
});

   var mpuntaje  = require("/ui/puntaje");
   var msalir    = require("/ui/salir");  
   var mhead     = require("/ui/headcat");  
   var msbtnal   = require("/ui/btnaleatorio");  
   var mbtnmat   = require("/ui/btnmatematica"); 
   var mbtnhist  = require("/ui/btnhistoria"); 
   var msbtnmem  = require("/ui/btnmemoria");   
   var clogo     = require("/ui/logo");     
   var cpuntaje  = new mpuntaje();
   var csalir    = new msalir();
   var chead     = new mhead();
   var cbtnal    = new msbtnal();
   var cbtnmat   = new mbtnmat();
   var cbtnhist  = new mbtnhist();
   var cbtnmem   = new msbtnmem();
   var mlogo     = new clogo(); 
        
    cbtnmat.addEventListener('click',function(e){
    	Titanium.API.categoria = "Matematica";   	
    	var preguntas2 = require('/ui/common/preguntas2'),
	    apreguntas = new preguntas2("matematica");
  		apreguntas.open();
    });
     cbtnal.addEventListener('click',function(e){
     	Titanium.API.categoria = "Aleatorio";
     	var preguntas2 = require('/ui/common/preguntas2'),
	    apreguntas = new preguntas2("aleatorio");
  		apreguntas.open();     		   	
    });
     cbtnhist.addEventListener('click',function(e){
     	Titanium.API.categoria = "Historia";
     	var preguntas2 = require('/ui/common/preguntas2'),
	    apreguntas = new preguntas2("historia");
  		apreguntas.open();
       	    	
    });
     cbtnmem.addEventListener('click',function(e){ 	
  		var mimodulo = require("/ui/common/preguntas1");
  		amodulo = new mimodulo(nivel);
  		amodulo.open();
    });  
   
 ////barra de navegacion
 var footer = Ti.UI.createView({
 	backgroundColor:"#133d8b",
 	height:50,
 	width:"100%",
 	opacity:"0.82",
 	zIndex:2,
 	bottom:0
 });  
  
   scroll.add(mlogo);
    
   view2.add(cpuntaje);
   view2.add(csalir);
   scroll.add(chead);
   scroll.add(cbtnal);
   scroll.add(cbtnmat);
   scroll.add(cbtnhist);   
   scroll.add(cbtnmem);   
   self.add(view);
   self.add(view2);
   view.add(scroll);
   view2.add(footer);
   self.orientationModes =[Ti.UI.PORTRAIT];
   return self;
}
module.exports = categorias;