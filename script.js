document.getElementById("flipCoin");
document.getElementById("reset");
document.getElementById("result");
document.getElementById("headScore");
document.getElementById("tailsScore");
document.getElementById("coin-flipper");

let heads = 0;
let tails = 0;

function flipCoin() {
    let coin = Math.floor(Math.random() * 2);

    if(coin === 0) {
        heads +=1;
        document.getElementById("result").innerHTML = "You got heads.";
        document.getElementById("headScore").innerText = `Heads: ${heads}`;
    } else {
        tails +=1;
        document.getElementById("result").innerHTML = "You got tails.";
        document.getElementById("tailsScore").innerText = `Tails: ${tails}`
    }
}

function resetBtn() {
    let heads = 0;
    let tails = 0;
    document.getElementById("headScore").innerText = `Heads: ${heads}`;
    document.getElementById("tailsScore").innerText = `Tails: ${tails}`;
    document.getElementById("result").innerHTML = `Result: `;
}
