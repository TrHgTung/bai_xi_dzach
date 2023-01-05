var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true; //allows the player (you) to draw while yourSum <= 21

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}

function refresh() {
    window.alert("Xác nhận chơi lại? Nhấn OK để tải ván mới")
    window.location.reload("Refresh");
}