"use strict";

$(document).ready(function (){
    console.log("Ready to go!")
});

function echo() {

    var numberOfEchoes = Math.floor((Math.random() * 8) + 1);
    for (var i = 1; i <= numberOfEchoes; i++){
        var phrase = document.getElementById("echoPhrase").value;
        var newPhrase = phrase + "<br />";
        if (phrase === " "){
            $("#response").html("I'm going to need you to say something for this to work");
        } else if (phrase.toLowerCase() === "i'm an idiot" || phrase.toLowerCase() === "i am an idiot"){
            newPhrase = "YOU'RE AN IDIOT! <br />";
            $("#response").html("YOU'RE AN IDIOT!")
        }

        $('#sayAgain').html(newPhrase.repeat(numberOfEchoes));

    }

}
