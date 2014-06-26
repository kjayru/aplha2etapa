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
	
	var picker = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_DATE,
		minDate:minDate,
		maxDate:maxDate,
		value:value
	});
	
	// turn on the selection indicator (off by default)
	picker.selectionIndicator = true;
	
	
	
	var label = Ti.UI.createLabel({
		text:'Choose a date',
		top:6,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'white'
	});
var mifecha="";
	picker.addEventListener('change',function(e)
	{
		label.text = e.value.toLocaleString();
		 var mifecha = e.value.toLocaleString();
		 Titanium.API.mifecha = mifecha;
	});
	
	var mbt= Ti.UI.createButton({
		title:"test eval",
		width:200,
		height:45
	});
var subbg = Ti.UI.createView({
	backgroundColor:"#000",
	width:270,
	height:90,
	top:210,
	zIndex:1
});

	Ti.UI.currentWindow.add(label);
	Ti.UI.currentWindow.add(picker);