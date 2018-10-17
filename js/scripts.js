$(function() {
  $("li").click(function() {
    // GETS
    var $id = $(this).attr("id");
    var $title = $("#" + $id).text();
    var $def = $("#" + $id).next().text();

    // PUTS
    $("#title").text($title);
    $("#definition").text($def)
  });

  // TOGGLES
  $("#title").click(function() {
    $("#title").addClass("hide");
    $("#definition").removeClass("hide");
  });

  $("#definition").click(function() {
    $("#definition").addClass("hide");
    $("#title").removeClass("hide");
  });

});
