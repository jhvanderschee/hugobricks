const detailssummaryels = document.querySelectorAll("details summary");
detailssummaryels.forEach( function(el) {
  el.addEventListener("click", (e) => {
    if (el.parentElement.hasAttribute("open")) { // since it's not closed yet, it's open!
      e.preventDefault(); // stop the default behavior, meaning - the hiding
      el.parentElement.classList.add("closing"); // add a class which applies the animation in CSS
    }
  });
  // when the "close" animation is over
  el.parentElement.addEventListener("animationend", (e) => {
    if (el.parentElement.classList.contains("closing")){
      if (e.animationName === "closedetails") {
        el.parentElement.removeAttribute("open"); // close the element
        el.parentElement.classList.remove("closing"); // remove the animation
      }
    }
  });
});