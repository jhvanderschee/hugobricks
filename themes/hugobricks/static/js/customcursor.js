document.body.classList.add('hidecursor');
window.addEventListener('scroll', function(){
    document.body.classList.add('hidecursor');
});

var timer;
var startx = window.innerWidth/2;
var starty = window.innerHeight/2;
var mouseX = startx, mouseY = starty;
var xp = startx, yp = starty;

// set the momentum with setInterval function
var loop = setInterval(function(){
    if(!document.body.classList.contains('mobilemenu')) {
        // change 12 to alter damping higher is slower
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        document.body.style.setProperty('--x',xp+'px');
        document.body.style.setProperty('--y',yp+'px');
    }
}, 30);

document.onmousemove = function(e) {
    if(!document.body.classList.contains('mobilemenu')) {
        document.body.classList.remove('hidecursor');
        mouseX = e.clientX;
        mouseY = e.clientY+window.scrollY;
        clearTimeout(timer);
        timer=setTimeout(mouseStopped,3000);   
    }
}

function mouseStopped(){    
    document.body.classList.add('hidecursor');
}

const onMouseOver = function (e) {
    if(!document.body.classList.contains('mobilemenu')) {
        var cursor = getComputedStyle(e.target).cursor;
        if(cursor=='pointer') {
            document.body.classList.add('cursorpointer');
        } else {
            document.body.classList.remove('cursorpointer');
        }
    }
};

document.addEventListener("mouseover", onMouseOver, false);