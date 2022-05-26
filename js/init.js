(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
      $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  }); // end of document ready
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
  (function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/e64659c9-4f4a-4852-8eaf-1b8d5e5e52f6.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();
})(jQuery); // end of jQuery name space