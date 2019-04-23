$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $(".dropdown").click(function () {
    $(".dropdown-trigger").toggleClass("highlight");    
  })
});
