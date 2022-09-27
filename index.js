//disable any button activity
function disableButtons() {
    let scoreButtons = document.getElementsByClassName("scorebutton")
    for(let i = 0; i < scoreButtons.length; i++) {
    scoreButtons[i].disabled = true;
}
}
disableButtons()

//enable buttons (called when game starts)
function enableButtons() {
    let scoreButtons = document.getElementsByClassName("scorebutton")
    for(let i = 0; i < scoreButtons.length; i++) {
    scoreButtons[i].disabled = false;
}
}

//make the score work
let homeScoreSpan = document.getElementById('homescore')
let guestScoreSpan = document.getElementById('guestscore')
let homeScore = 0
let guestScore = 0

//make the clock work
let seconds = 00
let millis = 000
let minutes = 12
let appendMillis = document.getElementById('millis')
let appendSeconds = document.getElementById('seconds')
let appendMinutes = document.getElementById('minutes')
let interval

//button click leads into function
function startTimer() {
    millis = millis - 10
    if (millis < 0) {
        millis = 990
        seconds--
        if (seconds < 0) {
            seconds = 59
            appendSeconds.textContent = seconds
            minutes--
            if (minutes <= 9) {
            appendMinutes.textContent = "0" + minutes
            }
            else {
                appendMinutes.textContent = minutes
            }
        }
        else if (seconds <= 9) {
            appendSeconds.textContent = "0" + seconds
        }
        else {
            appendSeconds.textContent = seconds
        }
    }
    if (millis > 99) {
        appendMillis.textContent = millis
    }
    if (millis <= 99) {
        appendMillis.textContent = "0" + millis
    }   
    if (millis <= 9) {
        appendMillis.textContent = "00" + millis
    }
}

//buttonclick start game
function startGame(){
        guestScoreSpan.textContent = "00"
        homeScoreSpan.textContent = "00"
        interval = setInterval(startTimer, 10);
        enableButtons()
        let tipOffButton = document.getElementById("tipoffbtn")
        tipOffButton.disabled = true
}




//homescore button functions
function homeOne() {
    homeScore += 1
    if (homeScore <= 9) {
        homeScoreSpan.textContent = "0" + homeScore
    }
    else {
        homeScoreSpan.textContent = homeScore
    }
    whosWinning()
}
function homeTwo() {
    homeScore += 2
    if (homeScore <= 9) {
        homeScoreSpan.textContent = "0" + homeScore
    }
    else {
        homeScoreSpan.textContent = homeScore
    }
    whosWinning()
}
function homeThree() {
    homeScore += 3
    if (homeScore <= 9) {
        homeScoreSpan.textContent = "0" + homeScore
    }
    else {
        homeScoreSpan.textContent = homeScore
    }
    whosWinning()
}

//guesscore buttons functions
function guestOne() {
    guestScore += 1
    if (guestScore <= 9) {
        guestScoreSpan.textContent = "0" + guestScore
    }
    else {
        guestScoreSpan.textContent = guestScore
    }
    whosWinning()
}
function guestTwo() {
    guestScore += 2
    if (guestScore <= 9) {
        guestScoreSpan.textContent = "0" + guestScore
    }
    else {
        guestScoreSpan.textContent = guestScore
    }
    whosWinning()
}
function guestThree() {
    guestScore += 3
    if (guestScore <= 9) {
        guestScoreSpan.textContent = "0" + guestScore
    }
    else {
        guestScoreSpan.textContent = guestScore
    }
    whosWinning()
}




//decide who is leading
function whosWinning() {
    if (guestScore > homeScore) {
        guestScoreSpan.classList.add("leader")
        homeScoreSpan.classList.remove("leader")
    }
    else if (homeScore > guestScore) {
        homeScoreSpan.classList.add("leader")
        guestScoreSpan.classList.remove("leader")
    }
    else {
        homeScoreSpan.classList.add("leader")
        guestScoreSpan.classList.add("leader")
    }
}