$(function() {
  /*$("").click(function(){
        $(".menu-checkbox").prop("checked", false);
    });*/
  $(".list-item a").on("click", function(event) {
    $(".menu-checkbox").prop("checked", false);
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
