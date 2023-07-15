window.addEventListener('scroll', function(){
    document.body.classList.add('hidecursor');
});
document.onmousemove = function(e) {
    document.body.classList.remove('hidecursor');
    document.body.style.setProperty('--x',(e.clientX)+'px');
    document.body.style.setProperty('--y',(e.clientY+window.scrollY)+'px');
}