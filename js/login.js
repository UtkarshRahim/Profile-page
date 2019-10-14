"use strict";

$('.message a').click(function () {
   $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$(document).ready(function () {
   $('#login-button').click(function () {
      alert("Sabar kar bhai, screen ka pehla din hai");
   });
});