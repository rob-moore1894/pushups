// You have a friend who is learning magic (not the card game). Their first trick is attempting to guess your card... Make a  function that will :
// First: Ask you to pick a card. Any card.
// Second: Continuously ask, if they picked "Your" card. Your only available responses are 'yes' and 'no'. If they picked your card correctly, then the trick is over. (Bonus) Add an option for your friend to ask if you would like to play again.

function cardSelect() {
    var yourCard = [];
    var num = document.getElementById("cardNumber").value;
    var suit = document.getElementById("cardSuit").value;
    yourCard.push(num);
    yourCard.push(suit);

    console.log(yourCard);
    return yourCard;
}

function magicianSelect(){
    var magicGuess = [];
    var magicNum = (Math.floor(Math.random() * 12) + 1).toString();
    switch (magicNum) {
        case 1:
            magicNum = "ace";
            break;
        case 10:
            magicNum = "jack";
            break;
        case 11:
            magicNum = "queen";
            break;
        case 12:
            magicNum = "king";
            break;
    }
    var magicSuit = Math.floor(Math.random() * 4) +1;
    switch (magicSuit) {
        case 1:
            magicSuit = "clubs";
            break;
        case 2:
            magicSuit = "spades";
            break;
        case 3:
            magicSuit = "diamonds";
            break;
        case 4:
            magicSuit = "hearts";
            break;
    }
    magicGuess.push(magicNum, magicSuit);
    $("#magicianChoice").html(magicNum + " of " + magicSuit);
    console.log(magicGuess);
    return magicGuess;
}


// These functions are not finished
function yesCard() {

    $(".cardResult").html("Ha! It's MAGIC!!")
}

function noCard() {
    $(".cardResult").html("Try again?")
}