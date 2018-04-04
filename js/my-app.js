// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
	view:{
		xhrcache:false,
		pushState:true
	},
	dialog:{
		title:'Framework7'
	},
	routes: [
		{
		path: '/trab/',
    	url: 'trab.html',
    	name: 'trab',
  		},
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/contratar/',
    	url: 'contratar.html',
    	name: 'contratar',
  		},
		{
		path: '/pago/',
    	url: 'pago.html',
    	name: 'pago',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;


$$('#btn-login') .on('click', function(){
	var usuario= $$('#usuario').val();
	var password= $$('#password').val();
	
	if(usuario == "admin" && password == "admin"){
		myApp.popup.close("#popup-login");
	}else{
		myApp.dialog.alert("Los datos ingresados son incorrectos","LOGIN");
	}
});





// Add another view, which is in right panel





 

