var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true; // hitAndStay.js (check quac hay chua)

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}

function refresh() {
    window.alert("Xác nhận chơi lại? Nhấn OK để tải ván mới")
    window.location.reload("Refresh");
}