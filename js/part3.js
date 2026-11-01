$(document).ready(function () {

  // task 5
  var n = 3;

  $("#appendBtn").click(function () {
    $("#list").append("<li>Item " + n + "</li>");
    n = n + 1;
  });

  $("#prependBtn").click(function () {
    $("#list").prepend("<li>Item " + n + "</li>");
    n = n + 1;
  });

  $("#removeBtn").click(function () {
    $("#list li:last").remove();
  });

  // task 6
  $("#srcBtn").click(function () {
    $("#attrImg").attr("src", "images/img2.svg");
  });

  $("#hrefText").text($("#myLink").attr("href"));

  $("#hrefBtn").click(function () {
    $("#myLink").attr("href", "https://api.jquery.com");
    $("#hrefText").text($("#myLink").attr("href"));
  });

  // task 7
  $("#nameInput").keyup(function () {
    $("#nameOut").text($("#nameInput").val());
  });

  $("#emailInput").keyup(function () {
    $("#emailOut").text($("#emailInput").val());
  });

});
