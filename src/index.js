"use strict";

let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let awayScore = 0;
let homeScore = 0;

// Functions for adding points to the home scoreboard

function addOnePointHome() {
  homePoints.innerText = awayScore += 1;
}

function addTwoPointHome() {
  homePoints.innerText = awayScore += 2;
}

function addThreePointHome() {
  homePoints.innerText = awayScore += 3;
}

// Functions for adding points to the guest scoreboard

function addOnePointGuest() {
  guestPoints.innerText = homeScore += 1;
}

function addTwoPointGuest() {
  guestPoints.innerText = homeScore += 2;
}

function addThreePointGuest() {
  guestPoints.innerText = homeScore += 3;
}
