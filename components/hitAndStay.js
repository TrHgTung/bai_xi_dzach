function hit() {
    if (!canHit) {
        alert("Đã quắc! Không thể rút thêm nữa, hãy xác nhận dằn");
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./assets/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) {
        canHit = false;
    }

}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;
    document.getElementById("hidden").src = "./assets/" + hidden + ".png";

    let message = "";
    let message2 = "";
    var suggestText = " Cuộn xuống để tùy chọn chơi lại.";
    var suggestTrolledText = " Sao mày lại dằn dơ vậy.";

    // var checkPointLocalStorage = localStorage.getItem("your_point");
    var checkPointLocalStorage = Number(localStorage.getItem("your_point")) || 0;
    if (yourSum > 21) {
        message = `Bạn Đã Thua! ${suggestText}`;
        // lưu điểm
        checkPointLocalStorage -= 1;
    }
    else if (dealerSum > 21) {
        message = `Bạn Đã Thắng! ${suggestText}`;
        // lưu điểm
        checkPointLocalStorage += 3;
    }
    else if (yourSum < 12) {
        // message = `Oh! ${suggestTrolledText}`;
        if (yourSum == dealerSum) {
            message = `Hòa Nhau! ${suggestTrolledText}`;
            message2 = ` ${suggestText}`;
            // lưu điểm
            checkPointLocalStorage += 1;
        }
        else if (yourSum > dealerSum) {
            message = `Bạn Đã Thắng! ${suggestTrolledText}`;
            message2 = ` ${suggestText}`;
            // lưu điểm
            checkPointLocalStorage += 3;
        }
        else if (yourSum < dealerSum) {
            message = `Bạn Đã Thua! ${suggestTrolledText}`;
            message2 = ` ${suggestText}`;
            // lưu điểm
            checkPointLocalStorage -= 1;
        }
    }
    // ca hai deu la <= 21
    else if (yourSum == dealerSum) {
        message = `Hòa Nhau! ${suggestText}`;
        // lưu điểm
        checkPointLocalStorage += 1;
    }
    else if (yourSum > dealerSum) {
        message = `Bạn Đã Thắng! ${suggestText}`;
        // lưu điểm
        checkPointLocalStorage += 3;
    }
    else if (yourSum < dealerSum) {
        message = `Bạn Đã Thua! ${suggestText}`;
        // lưu điểm
        checkPointLocalStorage -= 1;
    }
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
    document.getElementById("results2").innerText = message2;

    // Lưu điểm vào localStorage
    localStorage.setItem("your_point", checkPointLocalStorage);
}