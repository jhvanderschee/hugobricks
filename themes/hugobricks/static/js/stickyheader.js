// Setup a timer
var timeout;
var lastScrollTop = 0;

// Listen for resize events
const ev = new Event('scroll');
window.addEventListener('scroll', function ( e ) {

	// If there's a timer, cancel it
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}

    // Setup the new requestAnimationFrame()
	timeout = window.requestAnimationFrame(function () {

        // Run our scroll functions
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
           // downscroll code
           if(top>0) document.querySelector('header').classList.add('sticky');
        } else if (st < lastScrollTop) {
           // upscroll code
           if(top<1) document.querySelector('header').classList.remove('sticky');
        } // else was horizontal scroll
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        
	});

}, false);
window.dispatchEvent(ev);