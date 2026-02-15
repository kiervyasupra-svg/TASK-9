let coins = 0;

function increase() {
    coins++;
    document.getElementById("coin").innerText = coins;
}

function decrease() {
    if (coins > 0) {
        coins--;
        document.getElementById("coin").innerText = coins;
    }
}
