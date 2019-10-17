"use strict";

$(document).ready(function () {
 
    $('#content').load("home.html");

    $('#button').click(function () {
        $('#alert').html("<div class=\"alert alert-danger\" role=\"alert\"><strong>Sorry man!</strong> It's still under construction.</div>");
        return false;
    });

    $('#academics').click(function () {

        $('#home').attr("class", "nav-item");
        $('#academics').attr("class", "nav-item active");
        $('#skills').attr("class", "nav-item ");
        $('#neel').attr("class", "nav-item ");
        $('#content').load("edu.html");

    });

    $('#home').click(function () {
        $('#home').attr("class", "nav-item active");
        $('#academics').attr("class", "nav-item ");
        $('#skills').attr("class", "nav-item ");
        $('#neel').attr("class", "nav-item ");
        $('#content').load("home.html");

    });

    $('#skills').click(function () {
        $('#home').attr("class", "nav-item");
        $('#academics').attr("class", "nav-item ");
        $('#skills').attr("class", "nav-item active");
        $('#neel').attr("class", "nav-item ");
        $('#content').load("skills.html");

    });

    $('#neel').click(function () {
        $('#home').attr("class", "nav-item");
        $('#academics').attr("class", "nav-item ");
        $('#skills').attr("class", "nav-item ");
        $('#neel').attr("class", "nav-item active");
        $('#content').load("edu.html");

    });
});