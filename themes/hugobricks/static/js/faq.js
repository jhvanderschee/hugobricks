const els = document.querySelectorAll("details");
els.forEach( function(el) {
  el.addEventListener("click", (e) => {
    if (el.hasAttribute("open")) { // since it's not closed yet, it's open!
      e.preventDefault(); // stop the default behavior, meaning - the hiding
      el.classList.add("closing"); // add a class which applies the animation in CSS
    }
  });
  // when the "close" animation is over
  el.addEventListener("animationend", (e) => {
    if (el.classList.contains("closing")){
      if (e.animationName === "closedetails") {
        el.removeAttribute("open"); // close the element
        el.classList.remove("closing"); // remove the animation
      }
    }
  });
});