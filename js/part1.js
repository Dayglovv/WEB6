$(document).ready(function () {
  console.log("jQuery is ready!");

  // select by id
  $("#btnText").click(function () {
    $("#myTitle").text("New title");
  });

  // select by class
  $("#btnHtml").click(function () {
    $(".text").html("<b>Hello</b> from html()");
  });

  // select by tag
  $("#btnCss").click(function () {
    $("span").css("color", "red");
    $("span").css("font-size", "25px");
  });

  $("#btnReset").click(function () {
    $("#myTitle").text("This is a title (selected by ID)");
    $(".text").text("Paragraph (selected by class)");
    $("span").css("color", "black");
    $("span").css("font-size", "16px");
  });
});
