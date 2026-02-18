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
    Swal.fire({
        title: 'Xác nhận chơi lại?',
        text: "Hệ thống sẽ tải lại ván mới cho bạn!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
    });
}