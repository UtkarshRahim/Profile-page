"use strict";
var alertValue = null;
$('.message a').click(function () {
   $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$(document).ready(function () {
   $('#login-button').click(function () {

      var username = $('#username').val();
      var password = $('#password').val();

      if (username === "mansi" && password === "cutoo") {

       location.href="./../pages/home.html";
     
      }
      else {
         $("#alert-box").html("<div class=\"alert alert-danger\" role=\"alert\"><strong>Oh snap!</strong> <a href=\"#!\" class=\"alert-link\">Incorrect username or password.</div>");
         alertValue = "Incorrect";
      }

      return false;
     
   });

   
   $('#username').focus(function () {
      if (alertValue === "Incorrect")
         $("#alert-box").html("");
   });
   $('#password').focus(function () {
      if (alertValue === "Incorrect")
         $("#alert-box").html("");
   });


});