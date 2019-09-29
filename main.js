$(document).ready(function() {

$(function() {
    $("#add").on("click", function() {
        var val = $("input").val();
        if(val != '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='del'>X</button>");
            $("#myList").append(elem);
            $("input").val("");
            $(".del").on("click", function() {
                $(this).parent().remove();
            });
        }
    });
});













});