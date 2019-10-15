"use strict";
$(document).ready(function () {
$('#button').click(function () {
    $('#alert').html("<div class=\"alert alert-danger\" role=\"alert\"><strong>Sorry man!</strong> It's still under construction.</div>");
    return false;
});
});