// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener('scroll', function ( event ) {

	//console.log( 'no debounce' );

	// If there's a timer, cancel it
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}

    // Setup the new requestAnimationFrame()
	timeout = window.requestAnimationFrame(function () {

        // Run our scroll functions
		//console.log( 'debounced' );
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if(top>50) document.querySelector('header').classList.add('sticky');
        else document.querySelector('header').classList.remove('sticky');

	});

}, false);


