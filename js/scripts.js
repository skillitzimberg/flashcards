$(function() {
  $("li").click(function() {
    // GETS
    var $id = $(this).attr("id");
    var $title = $("#" + $id).text();
    var $def = $("#" + $title).text();

    // PUTS
    $("#title").text($title);
    $("#definition").text($def)
  });

});
