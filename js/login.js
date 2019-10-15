"use strict";

$('.message a').click(function () {
   $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$(document).ready(function () {
   $('#login-button').click(function () {

      var username = $('#username').val();
      var password = $('#password').val();
      alert("Sabar kar bhai, screen ka pehla din hai");
      if (username === "admin" && password === "password") { location.href = "https://neeldore.github.io"; }
      return false;
   });
});