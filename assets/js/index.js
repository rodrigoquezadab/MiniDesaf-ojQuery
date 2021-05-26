"use strict";

$(document).ready(function () {
  $("button").click(function () {
    $("#myDropdown").slideToggle("slow");
  });
});

$("#origen").click(function () {
  $("#destino").css("background-color", "green");
  $("#destino").css("width", "50%");
});

$(document).ready(function () {
  $(".pasar").hover(
    function () {
      $("li").filter(":even").css("background-color", "red");
      $("li").filter(":odd").css("background-color", "blue");
    },
    function () {
      $("li")
        .filter(":even")
        .css("background-color", "rgba(156, 163, 175, var(--tw-bg-opacity))");
      $("li")
        .filter(":odd")
        .css("background-color", "rgba(156, 163, 175, var(--tw-bg-opacity))");
    }
  );
});
