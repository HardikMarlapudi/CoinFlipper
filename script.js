document.getElementById("flipCoin").addEventListener(onclick, flipCoin);
document.getElementById("result");
document.getElementById("headScore");
document.getElementById("tailsScore");
document.getElementById("coinImage");
document.getElementById("coin-flipper");
document.getElementById("resetBtn");

let heads = 0;
let tails = 0;

function flipCoin() {
    let coin = Math.floor(Math.random() * 2);
    let coinImage = document.getElementById("coin-flipper");

    if(coin === 0) {
        heads +=1;
        document.getElementById("result").innerHTML = "You got heads.";
        document.getElementById("headScore").innerText = `Heads: ${heads}`;
        coinImage.src = "heads.png";
    } else {
        tails +=1;
        document.getElementById("result").innerHTML = "You got tails.";
        document.getElementById("tailsScore").innerText = `Tails: ${tails}`;
        coinImage.src = "tails.png";
    }
}

function resetBtn() {
    let heads = 0;
    let tails = 0;
    document.getElementById("headScore").innerText = `Heads: ${heads}`;
    document.getElementById("tailsScore").innerText = `Tails: ${tails}`;
    document.getElementById("result").innerHTML = `Result: `;
    document.getElementById("coin-flipper").src = "heads.png";
}
