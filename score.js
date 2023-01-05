
let homeScore = document.getElementById("scoreH")
let guestScore = document.getElementById("scoreG")


let numHome = 0

function add1H(){
    numHome += 1
    homeScore.textContent = numHome

}

function add2H(){
    numHome += 2
    homeScore.textContent = numHome

}

function add3H(){
    numHome += 3
    homeScore.textContent = numHome

}

let numGuest = 0

function add1G(){
    numGuest += 1
    guestScore.textContent = numGuest

}

function add2G(){
    numGuest += 2
   guestScore.textContent = numGuest


}

function add3G(){
    numGuest += 3
    guestScore.textContent = numGuest


}

function resetH(){
    numHome = 0
    homeScore.textContent = numHome

}

function resetG(){
    numGuest = 0
    guestScore.textContent = numGuest


}