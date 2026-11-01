$(document).ready(function () {

  // thumbnails fade in
  $("#gallery img").hide();
  $("#gallery img").fadeIn(1500);

  $("#hideThumbs").click(function () {
    $("#gallery img").fadeOut();
  });

  $("#showThumbs").click(function () {
    $("#gallery img").fadeIn();
  });

  // click on small picture
  $("#gallery img").click(function () {
    var src = $(this).attr("src");
    $("#bigImg").attr("src", src);
    $("#bigImg").css("width", "150px");
    $("#overlay").fadeIn();
    $("#bigImg").animate({ width: "500px" });
  });

  // click to close
  $("#overlay").click(function () {
    $("#overlay").fadeOut();
  });

});
