document.querySelectorAll('section, footer').forEach(function(section,index) {
    if(index>1) {
		section.classList.add('opaque');
	}
});

window.addEventListener('DOMContentLoaded', () => {
	function handler(entries) {
		for (entry of entries) {
            if(entry.intersectionRatio>0) {
                entry.target.classList.remove('opaque');
    		}
		}
	}

	let observer = new IntersectionObserver(handler);
	document.querySelectorAll('section, footer').forEach(function(section,index) {
		if(index>1) observer.observe(section);
	});
});