"use strict";

$(document).ready(function (){
    console.log("Ready to go!")
});

function echo() {

    var numberOfEchoes = Math.floor((Math.random() * 8) + 1);
    for (var i = 1; i <= numberOfEchoes; i++){
        var phrase = document.getElementById("echoPhrase").value;
        var newPhrase = phrase + "<br />";
        if (numberOfEchoes > 1) {
            $("#response").html("\"" + phrase + "\" should repeat " + numberOfEchoes + " times!");
        } else {
            $("#response").html("\"" + phrase + "\" should repeat 1 time!");
        }
        $('#sayAgain').html(newPhrase.repeat(numberOfEchoes));

    }

}
