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
})(jQuery); // end of jQuery name space
