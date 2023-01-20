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
    if (yourSum > 21) {
        message = `Bạn Đã Thua! ${suggestText}`;
    }
    else if (dealerSum > 21) {
        message = `Bạn Đã Thắng! ${suggestText}`;
    }
    else if (yourSum < 12) {
        // message = `Oh! ${suggestTrolledText}`;
        if (yourSum == dealerSum) {
            message = `Hòa Nhau! ${suggestTrolledText}`;
            message2 = ` ${suggestText}`;
        }
        else if (yourSum > dealerSum) {
            message = `Bạn Đã Thắng! ${suggestTrolledText}`;
            message2 = ` ${suggestText}`;
        }
        else if (yourSum < dealerSum) {
            message = `Bạn Đã Thua! ${suggestTrolledText}`;
            message2 = ` ${suggestText}`;
        }
    }
    // ca hai deu la <= 21
    else if (yourSum == dealerSum) {
        message = `Hòa Nhau! ${suggestText}`;
    }
    else if (yourSum > dealerSum) {
        message = `Bạn Đã Thắng! ${suggestText}`;
    }
    else if (yourSum < dealerSum) {
        message = `Bạn Đã Thua! ${suggestText}`;
    }
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
    document.getElementById("results2").innerText = message2;
}