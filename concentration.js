var tableElem = document.getElementById('table');
var rows = 3;
var cols = 4;
var matchCount = 0;
var totalMatches = 6;
var card1;
var card2;
var turns = 0;
var images = ["secret1.gif", "secret2.gif", "secret3.gif", "secret4.gif",
    "secret5.gif", "secret6.gif"];
var randomImg = [];

function pageLoad() {

    randomizeCards();

    for (var r = 0; r < rows; r++) {
        var rowElem = document.createElement('tr');
        for (var c = 0; c < cols; c++) {
            var cellElem = document.createElement('td');
            var ImgElem = document.createElement('img');
            ImgElem.width = 100;
            ImgElem.id = ((r * cols) + c);
            cellElem.appendChild(ImgElem);
            rowElem.appendChild(cellElem);
            ImgElem.onclick = clickCard;
            ImgElem.src = "Images/" + "backImage.png";
        }

        tableElem.appendChild(rowElem);
    }
}

function clickCard(evt) {
    if (turns == 2) {
        return;
    }
    if (turns === 0) {
        card1 = evt.target;
        card1.src = "Images/" + randomImg[card1.id];
        turns = 1;

    } else {
        turns = 2;
        card2 = evt.target;
        card2.src = "Images/" + randomImg[card2.id];
        setTimeout("checkMatch()", 500);
    }
}

function checkMatch() {
    clearTimeout();
    console.log(card1);
    console.log(card2);
    if (card1.src == card2.src) {
        console.log(card1.src + card2.src);
        matchCount++;
        console.log(matchCount);

        if (matchCount == totalMatches) {
            alert("GameOver! Reload page to randomize cards again!")
        }
        turns = 0;
        return;

    } else {
        card1.src = "Images/" + "backImage.png";
        card2.src = "Images/" + "backImage.png";
        turns = 0;
        return;
    }
}

function randomizeCards() {
    for (var i = 0; i < 6; i++) {
        var randCard = Math.floor(Math.random() * images.length);
        var secret = images[randCard];
        randomImg.push(secret);
        randomImg.push(secret);
        images.splice(secret,1);
    }
    console.log(randomImg);
    shuffleArray(randomImg);
    console.log(randomImg);
}

//using Fisher Yates Shuffle
function shuffleArray(array) {
    var i = 0;
    var j = 0;
    temp = null;

    for (var i = randomImg.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

}