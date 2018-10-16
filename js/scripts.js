$(function() {

  // $("h3").click(function() {
  //   $(this).addClass(".hide");
  //   $(this).siblings().addClass(".show");
  // });

  $("h3").click(function() {
    $(this).slideToggle();
    $(this).siblings().slideToggle();
  });

  $("p").click(function() {
    $(this).slideToggle();
    $(this).siblings().slideToggle();
  });

  // $(".clickable").click(function() {
  //   $("#shown").slideToggle();
  //   $("#hidden").slideToggle();
  // });

});
