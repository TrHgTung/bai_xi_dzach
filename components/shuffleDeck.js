function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}