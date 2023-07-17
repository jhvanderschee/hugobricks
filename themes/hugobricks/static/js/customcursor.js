window.addEventListener('scroll', function(){
    document.body.classList.add('hidecursor');
});

var timer;
var mouseX = 0, mouseY = 0;
var xp = 0, yp =0;

// set the momentum with setInterval function
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    document.body.style.setProperty('--x',xp+'px');
    document.body.style.setProperty('--y',yp+'px');
}, 30);

document.onmousemove = function(e) {
    document.body.classList.remove('hidecursor');
    mouseX = e.clientX;
    mouseY = e.clientY+window.scrollY;
    clearTimeout(timer);
    timer=setTimeout(mouseStopped,3000);   
}
function mouseStopped(){    
    document.body.classList.add('hidecursor');
}
const onMouseOver = function (e) {
    var cursor = getComputedStyle(e.target).cursor;
    if(cursor=='pointer') {
        document.body.classList.add('cursorpointer');
    } else {
        document.body.classList.remove('cursorpointer');
    }
  };
document.addEventListener("mouseover", onMouseOver, false);