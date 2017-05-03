/* Update individual file previews' icons */
setInterval(function(){
  Array.prototype.forEach.call(document.querySelectorAll('.aYy'), function(el, i){
    el.querySelector('.aYA').title = el.querySelector('.aV3').innerHTML;
  });
}, 100);
