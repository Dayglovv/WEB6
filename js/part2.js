$(document).ready(function () {

  // task 2
  $("#hideBtn").click(function () {
    $("#para").hide();
  });
  $("#showBtn").click(function () {
    $("#para").show();
  });
  $("#toggleBtn").click(function () {
    $("#para").toggle();
  });

  // task 3
  $("#fadeInBtn").click(function () {
    $("#fadeImg").fadeIn();
  });
  $("#fadeOutBtn").click(function () {
    $("#fadeImg").fadeOut();
  });
  $("#fadeToggleBtn").click(function () {
    $("#fadeImg").fadeToggle();
  });

  // task 4
  $("#slideUpBtn").click(function () {
    $("#panel").slideUp();
  });
  $("#slideDownBtn").click(function () {
    $("#panel").slideDown();
  });
  $("#slideToggleBtn").click(function () {
    $("#panel").slideToggle();
  });

});
