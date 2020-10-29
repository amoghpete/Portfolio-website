window.onload = function () {
  var triangle = document.getElementById("triangle");
  var length = triangle.getTotalLength();

  triangle.style.strokeDasharray = length;

  triangle.style.strokeDashoffset = length;

  window.addEventListener("scroll", myFunction);

  function myFunction() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight -1200);
    
    var draw = length * scrollpercent;

    triangle.style.strokeDashoffset = length - draw;
  }
};
  
function transit() {
  var element = document.getElementById("toggle");
  element.classList.toggle("anim-trans");
}
