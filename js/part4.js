$(document).ready(function () {

  // task 8
  $("#animBtn").click(function () {
    $("#box1").animate({ width: "150px", height: "150px", left: "300px" });
  });

  $("#resetBtn1").click(function () {
    $("#box1").animate({ width: "60px", height: "60px", left: "0px" });
  });

  // task 9 - animations go one after another
  $("#seqBtn").click(function () {
    $("#box2").animate({ left: "400px" });
    $("#box2").animate({ top: "180px" });
    $("#box2").animate({ width: "30px", height: "30px" });
    $("#box2").animate({ left: "0px", top: "0px", width: "60px", height: "60px" });
  });

  // task 10
  $("#comboBtn").click(function () {
    $("#box3").animate({
      opacity: 0.4,
      width: "140px",
      height: "140px",
      left: "350px"
    }, 1500);
  });

  $("#resetBtn3").click(function () {
    $("#box3").animate({
      opacity: 1,
      width: "60px",
      height: "60px",
      left: "0px"
    }, 500);
  });

});
