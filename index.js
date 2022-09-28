//disable any button activity
function disableButtons() {
    let disabledButtons = document.getElementsByClassName("disabledStart")
    for(let i = 0; i < disabledButtons.length; i++) {
        disabledButtons[i].disabled = true;
    }
}
disableButtons()

//enable buttons (called when game starts)
function enableButtons() {
    let disabledButtons = document.getElementsByClassName("disabledStart")
    for(let i = 0; i < disabledButtons.length; i++) {
        disabledButtons[i].disabled = false;
    }
}


//make the score work
let homeScoreSpan = document.getElementById("homescore")
let guestScoreSpan = document.getElementById("guestscore")
let homeScore = 0
let guestScore = 0
let guestFoulSpan = document.getElementById("guestFouls")
let homeFoulSpan = document.getElementById("homeFouls")
let homeFouls = 0
let guestFouls = 0

//make the clock work
let seconds = 00
let millis = 000
let minutes = 12
let appendMillis = document.getElementById("millis")
let appendSeconds = document.getElementById("seconds")
let appendMinutes = document.getElementById("minutes")
let timerInterval


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
function startGame() {
        guestScoreSpan.textContent = "00"
        homeScoreSpan.textContent = "00"
        homeFoulSpan.textContent = "0"
        guestFoulSpan.textContent = "0"
        timerInterval = setInterval(startTimer, 10);
        enableButtons()
        let tipOffButton = document.getElementById("tipoffbtn")
        tipOffButton.disabled = true
        whatPeriod()
}

let period = 0
function whatPeriod() {
    let dotOne = document.getElementById("dot1")
    let dotTwo = document.getElementById("dot2")
    let dotThree = document.getElementById("dot3")
    let dotFour = document.getElementById("dot4")

    period += 1
    
    if (period == 1) {
        dotOne.classList.add("reddot")
    }
    else if (period == 2) {
        dotOne.classList.remove("reddot")
        dotTwo.classList.add("reddot")
    }
    else if (period == 3) {
        dotTwo.classList.remove("reddot")
        dotThree.classList.add("reddot")
    }
    else if (period == 4) {
        dotThree.classList.remove("reddot")
        dotFour.classList.add("reddot")
    }
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




//mark who is leading
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


//count fouls
function homeFoul() {
    homeFouls += 1
    homeFoulSpan.innerText = homeFouls
}

function guestFoul() {
    guestFouls += 1
    guestFoulSpan.innerText = guestFouls
}


//make the timouts work
let timeoutSeconds = document.getElementById("timeoutSeconds")
let clock = document.getElementById("clock")
let timeoutSecs = 75
let timeoutInterval
let popup = document.getElementById("myPopup");
function startTimeout() {
    timeoutSecs -= 1
    timeoutSeconds.innerText = timeoutSecs + "s"
    if (timeoutSecs == 0) {
        timerInterval = setInterval(startTimer, 10);
        clearInterval(timeoutInterval)
        popup.classList.toggle("show");
        clock.classList.toggle("inactive")
        homeFoulSpan.classList.toggle("inactive")
        guestFoulSpan.classList.toggle("inactive")
        homeScoreSpan.classList.toggle("inactive")
        guestScoreSpan.classList.toggle("inactive")
        timeoutSecs = 75
        enableButtons()
    }
}

function timeOut() {
    timeoutSeconds.innerText = "75s"
    popup.classList.toggle("show");
    timeoutInterval = setInterval(startTimeout, 100);
    clearInterval(timerInterval)
    clock.classList.toggle("inactive")
    homeFoulSpan.classList.toggle("inactive")
    guestFoulSpan.classList.toggle("inactive")
    homeScoreSpan.classList.toggle("inactive")
    guestScoreSpan.classList.toggle("inactive")
    disableButtons()
}


//resetting the game.. simple reload
function resetGame() {
   document.location.reload(true)
}