

// GLOBAL VARS
var userIsMobile;
var navOpenState = false;


// SOURCES
var nav;
var overlayNav;
var topNav_Products;
var topNav_Services;



$( window ).on('load', function()
{
	setTimeout( function()
	{
		userIsMobile = window.isMobile;
		init_Nav();

	}, 500 );

});


function init_Nav()
{
	defineSources_Nav();
	addEventListeners_Nav();

	// document.getElementById( 'menu' ).style.display = 'block';

}



function defineSources_Nav()
{
	nav = document.getElementById( 'header-main' );
	overlayNav = document.getElementById( 'nav-overlay-container' )
	topNav_Products = document.getElementById( 'top-nav-products' );
	topNav_Services = document.getElementById( 'top-nav-services' );

}



function addEventListeners_Nav()
{
	topNav_Products.addEventListener( 'mouseover', overlayNav_Open );
	topNav_Products.addEventListener( 'click', overlayNav_Open );
	
}



function overlayNav_Open(e)
{
	if(!navOpenState){
		overlayNav.classList.add( 'show' );
	} 

	navOpenState = !navOpenState;

}



function overlayNav_Close(e)
{	
	if(navOpenState){
		overlayNav.classList.remove( 'show' );
	} 
	
	navOpenState = !navOpenState;

}



window.onclick = function( event )
{
	if ( !event.target.matches('#top-nav-products') ) {
		try{
			overlayNav.classList.remove('show');
		} catch (error){/**/}
	}
}



var nav_Open = false;

window.onload = function() {
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'side': 'right',
		'padding': 265,
		'touch': false
	});


	document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
		if( !slideout.isOpen() ){
			document.getElementById( 'menu' ).style.display = 'block';
		} else {
			setTimeout( function() {
				document.getElementById( 'menu' ).style.display = 'none';
			}, 250)
		}

		slideout.toggle();

		$('.btn-hamburger'	).toggleClass('open');

	    var scrollPos;

	    if( nav_Open ){
	    	scrollPos = 0;
	    } else {
	    	scrollPos = $(document).scrollTop();
	    }

		$('#header-main').css({ top : scrollPos });

		nav_Open = !nav_Open
	});


	/*document.querySelector('.menu').addEventListener('click', function(eve) {
		if (eve.target.nodeName === 'A') { 
			slideout.close();
		}
	});*/
};